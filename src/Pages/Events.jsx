import { useLoaderData } from "react-router-dom";
import Event from "../Components/Event";

const Events = () => {

    const data = useLoaderData()


    return (
        <div className="w-full pb-10">
            <div className="">
                {
                    data.map(res => <Event key={res._id} data={res}></Event>)
                }
            </div>
        </div>
    );
};

export default Events;