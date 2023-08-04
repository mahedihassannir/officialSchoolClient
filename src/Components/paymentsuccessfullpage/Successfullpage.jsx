import { Link, useParams } from "react-router-dom";

const Successfullpage = () => {

    const { tranId } = useParams();

    return (
        <div>

            <div className="w-full h-screen">

                {/* this is content div  */}
                <div className="">
                    {/* this is img div */}
                    <div className=" w-11/12 mx-auto  flex justify-center">
                        <img className="h-[500px]" src="https://assets.materialup.com/uploads/8a92b321-3f81-435c-98e7-bdf643d25cc3/payment.png" alt="" />
                    </div>
                    {/* text content div */}
                    <div className="text-center -mt-10">

                        <h4 className="text-2xl font-semibold">
                            Your Payment is Successfull
                        </h4>

                        <p className="text-xl">
                            Thank you for your payment. Copy your tran id 


                        </p>

                        <p className="m-4">
                            Your tran id <span className="p-2 bg-red-400 text-white">{tranId}</span>
                        </p>
                        <div className="">
                            <Link className="text-lg text-red-400 underline" to="/">Back To Home</Link>
                        </div>

                    </div>

                </div>

            </div>



        </div>
    );
};

export default Successfullpage;