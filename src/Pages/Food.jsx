import { useLoaderData } from "react-router-dom";
import FoodSingle from "../Components/FoodSingle";

const Food = () => {

    const data = useLoaderData()



    return (
        <div>

            <h1 className="text-[#db87f0] text-4xl text-center font-bold mb-10">আমাদের স্কুলের খাবার</h1>

            <div className="my-10 grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-5  gap-2">
                {
                    data.map(res => <FoodSingle key={res._id} data={res}></FoodSingle>)
                }
            </div>

        </div>
    );
};

export default Food;