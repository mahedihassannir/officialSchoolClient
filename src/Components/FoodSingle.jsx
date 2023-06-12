import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const FoodSingle = ({ data }) => {

    const addCart = (item) => {

        const product = { item, }
        console.log(product);

        // const getPrice = item.price - 10
        // console.log(getPrice);

    }

    return (
        <div className="">


            <div className="border-2 cursor-pointer hover:border-[#340e8d] w-[250px] h-[300px]">


                {/* card img */}

                <div className="relative">
                    {/* <Link to={ `/FoodCheckout/${data._id}`} className="text-center"> */}
                    <Link to={`/FoodCheckout/${data._id}`} className="cursor-zoom-in">
                        <img className=" px-2 w-full pt-2 h-[160px]" src={data.image} alt="" />

                    </Link>
                    <div className=" top-0 ml-48 py-1 px-1 mt-2  bg-[#340e8d] text-white absolute">
                        <p className="flex items-center text-sm "><FaDollarSign></FaDollarSign> {data.price}</p>
                    </div>

                </div>


                {/* here is teh product detailes */}
                <div className="pt-2 pl-2">
                    <div className="text-center">

                        <p className="pb-2">name: {data.name}</p>
                        <p className="pb-2 flex items-center justify-center">price:<FaDollarSign className="text-sm"></FaDollarSign>{data.price} 30</p>

                    </div>

                    <button onClick={() => addCart(data)} className="btn hover:text-[#340e8d]  hover:bg-[#db87f0] ">Book now</button>


                </div>

            </div>

        </div>
    );
};

export default FoodSingle;