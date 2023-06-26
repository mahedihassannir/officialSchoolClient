
const Teachers = () => {
    return (
        <div className="w-full h-[60vh] px-10 ">
            {/*title section  */}
            <section>

                <h4 className="text-center font-bold text-2xl py-4 text-[#db87f0]">Teachers</h4>

            </section>
            {/* ends */}
            <section className="grid grid-cols-4">
                <div className="w-[300px] h-[300px]  rounded-lg border-2">
                    <div className="">
                        <img className="w-full h-[230px p-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmGFRI_sEYgHk4N9uCQ4XL-K-3ttOy-VnXwAjB-SDC-SbXAZCm4JygIZXroYF5vxHVCk&usqp=CAU" alt="" />
                    </div>
                    <div className="pb-4">

                        <div className="pt-2 pl-2">
                            <p>name : </p>
                            <p>Position : CEO</p>
                         
                        </div>

                    </div>
                </div>
                <div className="w-[300px] h-[300px]  rounded-lg border-2">
                    <div className="">
                        <img className="w-full h-[230px p-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmGFRI_sEYgHk4N9uCQ4XL-K-3ttOy-VnXwAjB-SDC-SbXAZCm4JygIZXroYF5vxHVCk&usqp=CAU" alt="" />
                    </div>
                    <div className="pb-4">

                        <div className="pt-2 pl-2">
                            <p>name : </p>
                            <p>Position : CEO</p>
                         
                        </div>

                    </div>
                </div>
                <div className="w-[300px] h-[300px]  rounded-lg border-2">
                    <div className="">
                        <img className="w-full h-[230px p-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmGFRI_sEYgHk4N9uCQ4XL-K-3ttOy-VnXwAjB-SDC-SbXAZCm4JygIZXroYF5vxHVCk&usqp=CAU" alt="" />
                    </div>
                    <div className="pb-4">

                        <div className="pt-2 pl-2">
                            <p>name : </p>
                            <p>Position : CEO</p>
                         
                        </div>

                    </div>
                </div>
                <div className="w-[300px] h-[300px]  rounded-lg border-2">
                    <div className="">
                        <img className="w-full h-[230px p-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmGFRI_sEYgHk4N9uCQ4XL-K-3ttOy-VnXwAjB-SDC-SbXAZCm4JygIZXroYF5vxHVCk&usqp=CAU" alt="" />
                    </div>
                    <div className="pb-4">

                        <div className="pt-2 pl-2">
                            <p>name : </p>
                            <p>Position : CEO</p>
                         
                        </div>

                    </div>
                </div>
            </section>
            
            <div className=" my-6 text-center">
                    <button className="border-2 hover:border-[#db87f0] hover:rotate-3 rounded-md py-3 px-6">
                        Show all teachers
                    </button>
                </div>
        </div>
    );
};

export default Teachers;