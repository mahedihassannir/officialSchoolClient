import { useLoaderData } from "react-router-dom";

const SingleDetaile = () => {

    const data = useLoaderData();
    console.log(data);



    return (
        <div>

            <h1>{data.Fee}</h1>


        </div>
    );
};

export default SingleDetaile;