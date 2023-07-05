
const AdminHome = () => {
    return (
        <div className="w-full h-screen">

            {/* here is users teachers revinew and total product buy   */}


            <div className="grid grid-cols-3 ml-20 mt-10">
                <div className="w-[250px] h-[250px] bg-red-500 rounded-md order-2"></div>
                <div className="w-[250px] h-[250px] bg-red-500 rounded-md order-2"></div>
                <div className="w-[250px] h-[250px] bg-red-500 rounded-md order-2"></div>
            </div>
            {/* ends */}

            {/* this is analytics section */}
            <div className="mt-5 ml-10 ">
                <div className="flex gap-3">
                    {/* chart analytics */}
                    <div className="w-1/2 h-20 bg-black">

                    </div>

                    {/*sells analytics  */}
                    <div className="w-1/2 h-20 bg-black">

                    </div>


                </div>


            </div>
            {/* ends */}




        </div>
    );
};

export default AdminHome;