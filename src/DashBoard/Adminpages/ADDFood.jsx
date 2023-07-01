

import AddFoodInput from '../../AdminCompos/AddFoodInput';
import '../../ExtraCss/bg.css'

const ADDFood = () => {
    return (
        <div className="w-full px-2 h-screen  bg2  ">

            <h1 className='text-center text-3xl font-bold text-[#db87f0] mt-10'>Add Food section </h1>
            <form className="flex mt-16 ml-10 gap-2">
                <div className="w-1/2 py-2 pl-2  rounded-lg  bg-teal-800">

                    {/* form admin comps */}
                    {/* <AddFoodInput></AddFoodInput> */}
                    {/* form admin comps */}

                    <div className="grid grid-cols-2 gap-2 px-2">
                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">name</span>
                                {/* text-[#340e8d] */}
                            </label>
                            <input name="name" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Food name" required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">name</span>
                            </label>
                            <input name="name" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Food recipe" required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">Food picture</span>
                            </label>
                            <input type="file" placeholder="You can't touch this" className="file-input file-input-bordered w-full max-w-xs" required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">category</span>
                            </label>
                            <input name="category" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Food name" required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">price</span>
                            </label>
                            <input name="price" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Food name" required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">time</span>
                            </label>
                            <input name="time" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="time" placeholder="Food name" required />
                        </div>


                    </div>


                    <div className="text-center w-1/2 mt-2 py-3 px-5 shadow-md text-gray-300 rounded-md hover:bg-[#db87f0] hover:text-white font-semibold mx-auto">
                        <button>
                            Add product
                        </button>
                    </div>





                </div>

                {/* right section */}

                <div className=" pl-5 pt-4  w-1/2 py-2  rounded-lg ">

                    <textarea placeholder='Description About Food Product ' className=' rounded-lg border-2 w-11/12 pl-3 pt-3 ' name="" id="" cols="30" rows="10" required></textarea>


                </div>
            </form>


        </div>
    );
};

export default ADDFood;