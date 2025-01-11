import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Addcourses = () => {


    const key = `890b5ec0923fcc8472f7e690406adc40`

    // const uploadUrl = `https://api.imgbb.com/1/upload?key=${key}`
    const uploadUrl = `https://api.imgbb.com/1/upload?key=${key}`

    // from submit arrow => function

    // navagitr
    const navigate = useNavigate()
    const ImageRef = useRef(null)


    const [startedTime, setSelectedTime] = useState('');


    const handleTimeChange = (event) => {
        const { value } = event.target;
        setSelectedTime(value);
    };

    console.log(startedTime);

    const handleFrom = (e) => {

        e.preventDefault()
        const from = e.target

        const title = from.name.value
        const description = from.description.value
        const Fee = from.sites.value

        const company = from.company.value




        // image upload system

        const file = ImageRef.current.files[0]

        const Imagedaat = new FormData()
        Imagedaat.append('image', file)
        fetch(uploadUrl, {
            method: "POST",
            body: Imagedaat
        })
            .then(res => res.json())
            .then(data => {

                const image = data.data.display_url
                console.log(image);

                // post on db start
                fetch(`https://school-server-main-cgaqorflu-mahedinir34678gmailcoms-projects.vercel.app/addcourse`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ title, description, Fee, image, startedTime,company })

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: `new event added successfully`,
                                showConfirmButton: false,
                                timer: 1000
                            })

                        }
                        navigate('/courses')
                    })
                // post on db ends



            })
        // ends
    }

    return (
        <div className='bg2'>
            <h1 className='text-center text-3xl font-bold text-[#db87f0] mt-10'>Add Courses </h1>


            <form onSubmit={handleFrom} className="flex mt-16 ml-10 gap-2">
                <div className="w-1/2 py-2 pl-2  rounded-lg  bg-teal-900">

                    {/* form admin comps */}
                    {/* <AddFoodInput></AddFoodInput> */}
                    {/* form admin comps */}

                    <div className="grid grid-cols-2 gap-2 px-2">
                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">Course Name</span>
                                {/* text-[#340e8d] */}
                            </label>
                            <input name="name" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Course Name" required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">Course Fee</span>
                            </label>
                            <input name="sites" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Course Fee " required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">Course picture</span>
                            </label>
                            <input ref={ImageRef} type="file" placeholder="You can't touch this" className="file-input file-input-bordered w-full max-w-xs" required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">Start Date</span>
                            </label>
                            <input name="time" value={startedTime}

                                // how we get the value from the date input 1 make a state then onchange value go to the state then the state value we geeting


                                onChange={handleTimeChange} className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="date" placeholder="Food name" required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className=" text-gray-300">Course instracture </span>
                            </label>
                            <input name="time" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="name" placeholder="Course instracture" required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className=" text-gray-300">Course company </span>
                            </label>
                            <input name="company" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="name" placeholder="Course company" required />
                        </div>


                    </div>


                    <div className="text-center w-1/2 mt-2 py-3 px-5 shadow-md text-gray-300 rounded-md hover:bg-[#db87f0] hover:text-white font-semibold mx-auto">
                        <button>
                            Add
                            Course
                        </button>
                    </div>





                </div>

                {/* right section */}

                <div className=" pl-5 pt-4  w-1/2 py-2  rounded-lg ">
                    <label htmlFor="">
                        <span className=' text-lg text-white '>Course Description</span>
                    </label>
                    <textarea placeholder='Course Description ' className=' my-2 rounded-lg border-2 w-11/12 pl-3 pt-3 ' name="description" id="" cols="30" rows="10" required></textarea>


                </div>
            </form>

        </div>
    );
};

export default Addcourses;