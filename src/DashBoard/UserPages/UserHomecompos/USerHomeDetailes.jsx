
import { FaCartPlus, FaStroopwafel } from "react-icons/fa";
import { Link } from "react-router-dom";

const USerHomeDetailes = () => {

    return (
        <div>

            <div className="">
                <div className="mt-10 ml-10">

                    <div className="grid grid-cols-3 gap-4 ml-32">
                        <Link to="/cart" className=" cursor-pointer text-blak items-center w-[250px] flex justify-center h-[200px] border-2 border-[#db87f0]">
                            <div className="">
                                <h1 className="text-lg">Cart product</h1>


                                <h4 className="flex gap-2 items-center">

                                    <FaCartPlus className="w-full mx-auto mt-2 text-3xl"></FaCartPlus>:
                                    <p>3</p>
                                </h4>

                            </div>
                        </Link>

                        <div className=" text-black rounded-md cursor-pointer hover:border-[#281b2b] items-center w-[250px] flex justify-center h-[200px] border-2 border-[#db87f0]">
                            <div className="">
                                <h1 className="text-lg text-[#db87f0]">Token</h1>

                                <h4 className="flex gap-2 items-center">

                                    <FaStroopwafel className="w-full mx-auto mt-2 text-3xl"></FaStroopwafel>
                                    : <p>10</p>
                                </h4>

                            </div>
                        </div>
                        
                        <div className=" text-blak rounded-md shadow-md items-center w-[250px] flex justify-center h-[200px] border-2 border-[#db87f0]">
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