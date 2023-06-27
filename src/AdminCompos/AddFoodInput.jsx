
const AddFoodInput = () => {
    return (
        <div className="">
            <div className="grid grid-cols-2 gap-2 px-2">
                <div className="">
                    <label htmlFor="">
                        <span className="text-[#340e8d]">name</span>
                    </label>
                    <input name="name" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Food name" />
                </div>
               
                <div className="">
                    <label htmlFor="">
                        <span className="text-[#340e8d]">name</span>
                    </label>
                    <input name="name" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Food recipe" />
                </div>
               
                <div className="">
                    <label htmlFor="">
                        <span className="text-[#340e8d]">Food picture</span>
                    </label>
                    <input type="file" placeholder="You can't touch this" className="file-input file-input-bordered w-full max-w-xs" disabled />
                </div>
               
                <div className="">
                    <label htmlFor="">
                        <span className="text-[#340e8d]">name</span>
                    </label>
                    <input name="name" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Food name" />
                </div>
               
                <div className="">
                    <label htmlFor="">
                        <span className="text-[#340e8d]">name</span>
                    </label>
                    <input name="name" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Food name" />
                </div>
               
                <div className="">
                    <label htmlFor="">
                        <span className="text-[#340e8d]">name</span>
                    </label>
                    <input name="name" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Food name" />
                </div>
               

            </div>


            <div className="text-center w-1/2 mt-2 py-3 px-5 shadow-md hover:bg-[#db87f0] hover:text-white font-semibold mx-auto">
                <button>
                    Add product
                </button>
            </div>

        </div>
    );
};

export default AddFoodInput;