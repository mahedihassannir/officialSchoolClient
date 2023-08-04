import { Link } from "react-router-dom";

const Paymentfail = () => {


    return (
        <div>

            <div className="w-full h-screen">

                {/* this is content div  */}
                <div className="">
                    {/* this is img div */}
                    <div className=" w-11/12 mx-auto  flex justify-center">
                        <img className="h-[500px]" src="https://png.pngtree.com/element_our/png/20181114/payment-failure-flat-icon-png_238383.jpg" alt="" />
                    </div>
                    {/* text content div */}
                    <div className="text-center -mt-10">

                        <h4 className="text-3xl font-semibold">
                            Your Payment Failed</h4>

                        <p className="text-xl">

                            Try Again
                        </p>




                        <div className="mt-2">
                            <Link className="text-lg text-red-400 underline" to="/">Back To Home</Link>
                        </div>

                    </div>

                </div>

            </div>



        </div>
    );
};

export default Paymentfail;