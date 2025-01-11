import { Link, useLoaderData } from "react-router-dom";

// css from extra css
import '../ExtraCss/event.css'
import IsAnmin from "../hooks/IsAnmin";
import Swal from "sweetalert2";

const Events = () => {

    const data = useLoaderData()


    // for (let img of data) {

    // }

    const [isAdmin] = IsAnmin()

    const handleDeleteevent = (id) => {
        console.log({ id });
        if (isAdmin) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {

                    fetch(`https://school-server-main-cgaqorflu-mahedinir34678gmailcoms-projects.vercel.app/eventdelete/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);

                            if (data.deletedCount > 0) {

                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                            }
                        })
                }
            })
        }


    }


    return (
        <div className="w-full pb-10 ">

            <div className="m-5 ">
                <p className="text-2xl font-bold">সব <span className="text-red-500">প্রোগ্রাম</span> : {data.length}</p>

            </div>

            <div className="grid grid-cols-3 gap-5">


                {
                    data.map(res => <div key={res._id}>
                        <div className="w-[400px] h-[400px] border-2 rounded-md ">


                            <div className="w-full ">
                                <img src={res.image} className="p-1 w-full h-[250px]" alt="" />

                            </div>

                            <div className="pl-3 pt-5">

                                <div className="">

                                    <p className="text-lg ">event name : {res.title}</p>
                                </div>
                                <div className="">

                                </div>
                                <div className="flex">

                                    <Link to={`/events/${res._id}`} className="pt-5 pl-3">
                                        <button id="btn" className="">
                                            view detailes
                                        </button>
                                    </Link>

                                    {
                                        isAdmin &&
                                        <div className="pt-5 pl-3">
                                            <button onClick={() => handleDeleteevent(res._id)} id="btn" className="">
                                                delete
                                            </button>
                                        </div>
                                    }
                                </div>

                            </div>
                        </div>
                    </div>)
                }


            </div >
        </div >
    );
};

export default Events;



/**
 * 
 * 
 * <div>
                            <div className="w-[400px] h-[400px] border-2 ">


                                <div >
                                    <img className="w-full h-[250px]" src={data.image} />
                                </div>

                                <div className="pl-3 pt-5">

                                    <div className="">

                                        <p className="text-lg ">event name : </p>
                                    </div>
                                    <div className="">

                                    </div>
                                    <div className="pt-5 pl-3">
                                        <button id="btn" className="">
                                            view detailes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
 * 
 */