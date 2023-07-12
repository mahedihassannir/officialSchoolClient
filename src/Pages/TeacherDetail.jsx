import { useLoaderData } from "react-router-dom";

const TeacherDetail = () => {

    const data = useLoaderData()

    return (
        <div className="w-full   pb-10 ">

            {/* here is the top section */}
            <div className=" w-full mx-2  pb-4 shadow-lg  m-2 ">

                <div className=" mx-20  flex gap-2 ">

                    <div className="w-1/2  ">
                        <img src={data.image} alt="" />

                    </div>
                    <div className="w-1/2  ">
                        <div className="pl-4 pt-10">

                            <h3 className="leading-8 text-lg font-mono">Name : {data.TeacherName}</h3>
                            <h3 className="leading-8 text-lg font-mono">Title : {data.title}</h3>
                            <h3 className="leading-8 text-lg font-mono">Category: {data.category}</h3>
                            <h3 className="leading-8 text-lg font-mono">Teacher E@mail : {data.email}</h3>

                        </div>
                    </div>


                </div>

            </div>

            {/* here is the description section */}

            <div className="flex flex-row-reverse gap-2  my-20">

                <div className="w-1/2 ">


                    <img src={data.image} alt="" />

                </div>
                <div className="w-1/2">

                    <div className="pt-10">

                        <h3 className="text-2xl font-mono  font-bold py-2">Description About The Teacher</h3>

                        <p className=" text-lg font-serif  font-semibold flex  flex-wrap px-2">{data.Description}</p>

                    </div>
                </div>


            </div>
            {/* ends */}

            {/* here is the teacher qualification section  */}

            <h3 className="text-2xl font-bold font-mono py-2 ">Teacher skill and Educational Qualification </h3>
            <div className="w-full gap-2">

                <div className="w-11/12 py-2 ">

                    <p className="text-lg font-serif">Ma : {data.Honors}</p>

                </div>
                <hr className="my-2" />


                <div className="w-11/12 py-2 ">

                    <p className="text-lg font-serif">Ma : {data.Ma}</p>

                </div>
                <hr className="my-2" />



                <div className="w-11/12 py-2 ">

                    <p className="text-lg font-serif">Ma : {data.Ba}</p>

                </div>
                <hr className="my-2" />



                <div className="w-11/12 py-2 ">

                    <p className="text-lg font-serif">Ma : {data.PHD}</p>

                </div>
                <hr className="my-2" />


                <div className="w-11/12 py-2 ">

                    <p className="text-lg font-serif">Achivement:  {data.Achivements}</p>


                </div>

                <hr className="my-2" />



                <h3 className="text-2xl font-bold font-mono py-2 ">Teacher contact info </h3>

                <div className="">
                    <p className="text-lg font-mono">Contact : {data.contact}</p>
                </div>


                <div className=" mt-4">
                    <p className="text-lg font-mono">email : {data.email}</p>
                </div>

            </div>




        </div>
    );
};

export default TeacherDetail;