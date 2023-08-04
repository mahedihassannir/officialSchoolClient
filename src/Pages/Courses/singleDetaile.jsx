import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ContexM } from "../../Authentication/AuProvider";

const SingleDetaile = () => {

    const data = useLoaderData();
    console.log(data);

    const { user } = useContext(ContexM)



    const habdleMoney = () => {

        const userinfo = { name: user.displayName, email: user.email, money: data.Fee, productID: data._id, title: data.title }

        console.log(userinfo);


        fetch("http://localhost:5000/order", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userinfo) 

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

                window.location.replace(result.url)
            })

    }



    return (
        <div>

            <h1>{data.Fee}</h1>

            <button onClick={habdleMoney} className="btn">check out</button>


        </div>
    );
};

export default SingleDetaile;