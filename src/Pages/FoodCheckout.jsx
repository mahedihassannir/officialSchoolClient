import { useLoaderData } from "react-router-dom";

const FoodCheckout = () => {

    const data = useLoaderData()


    
    console.log(data.name);

    return (
        <div>


        </div>
    );
};

export default FoodCheckout;