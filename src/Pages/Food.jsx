import { useLoaderData } from "react-router-dom";
import FoodSingle from "../Components/FoodSingle";

const Food = () => {

    const data = useLoaderData()



    return (
        <div>
            <div className="">
                {
                    data.map(res => <FoodSingle key={res._id} data={res}></FoodSingle>)
                }
            </div>

        </div>
    );
};

export default Food;