import { FaDollarSign } from "react-icons/fa";
import UseBook from "../hooks/Usebook";


const Bookss = () => {


    const [Book] = UseBook()


    // page books
    return (
        <div className="ml-2 my-3 grid grid-cols-5 gap-4">
            {
                Book.map(res =>
                    <div key={res._id} className="border-2 cursor-pointer hover:border-[#340e8d] w-[250px] h-[300px]">


                        {/* card img */}

                        <div className="relative">
                            {/* <Link to={ `/FoodCheckout/${data._id}`} className="text-center"> */}
                            {/* <Link to={`/FoodCheckout/${data._id}`} className="cursor-zoom-in"> */}
                            <img className=" px-2 w-full pt-2 h-[170px]" src={res.image} alt="" />

                            {/* </Link> */}
                            <div className=" top-0 ml-38 py-1 px-1 mt-2  bg-[#340e8d] text-white absolute">
                                <p className="  flex items-center text-sm "><FaDollarSign></FaDollarSign> <s>{res.price} BDT</s>
                                    <span className="text-red-400 pl-2">Free</span>
                                </p>
                            </div>

                        </div>


                        {/* here is teh product detailes */}
                        <div className="pt-2 pl-2">
                            <div className="text-center">

                                <p className="pb-2">name:{res.name} </p>
                                <p className="pb-2 flex items-center justify-center"><FaDollarSign>
                                </FaDollarSign> Price :  <s>{res.price} BDT</s>
                                    <span className="text-red-400 pl-2">Free</span>

                                </p>

                            </div>

                            <div className="text-center">

                                {/* <button disabled={user ? "" : disableBtn} className="btn hover:text-[#340e8d]  hover:bg-[#db87f0] ">read now</button> */}

                                <button className="btn hover:text-[#340e8d]  hover:bg-[#db87f0] ">read now</button>

                            </div>

                        </div>

                    </div>

                )
            }

        </div >
    );
};

export default Bookss;