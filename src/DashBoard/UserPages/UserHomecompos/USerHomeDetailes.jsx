
import { FaCartPlus, FaStroopwafel } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/Usecart";

const USerHomeDetailes = () => {


    const [cart] = useCart()

    return (
        <div>

            <div className="">
                <div className="mt-10 ml-10">

                    <div className="grid grid-cols-3 gap-4 ml-32">
                        <Link to="/cart" className=" cursor-pointer  items-center w-[250px] flex justify-center h-[200px] border-2 border-gray-200 shadow-md rounded">
                            <div className="">
                                <h1 className="text-lg">Cart product</h1>


                                <h4 className="flex gap-2 items-center">

                                    <FaCartPlus className="w-full mx-auto mt-2 text-3xl"></FaCartPlus> +<p>{cart.length}</p>
                                </h4>

                            </div>
                        </Link>

                        <div className=" cursor-pointer  items-center w-[250px] flex justify-center h-[200px] border-2 border-gray-200 shadow-md rounded">
                            <div className="">
                                <h1 className="text-lg text-[#db87f0]">Token</h1>

                                <h4 className="flex gap-2 items-center">

                                    <FaStroopwafel className="w-full mx-auto mt-2 text-3xl"></FaStroopwafel>
                                    : <p>10</p>
                                </h4>

                            </div>
                        </div>

                        <div className=" cursor-pointer  items-center w-[250px] flex justify-center h-[200px] border-2 border-gray-200 shadow-md rounded">
                            <div className="">
                                <h1 className="text-lg text-[#db87f0]">Token</h1>

                                <h4 className="flex gap-2 items-center">

                                    <FaStroopwafel className="w-full mx-auto mt-2 text-3xl"></FaStroopwafel>
                                    : <p>10</p>
                                </h4>

                            </div>
                        </div>



                    </div>


                </div>

                <div>

                </div>

            </div>

        </div>
    );
};

export default USerHomeDetailes;