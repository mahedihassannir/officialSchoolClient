
// css form extra css file for bg

import { useRef } from 'react';
import '../../ExtraCss/bg.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const key = `890b5ec0923fcc8472f7e690406adc40`

// const uploadUrl = `https://api.imgbb.com/1/upload?key=${key}`
const uploadUrl = `https://api.imgbb.com/1/upload?key=${key}`


const AddTeachers = () => {
    // navagitr
    const navigate = useNavigate()

    // get the img
    const ImageRef = useRef(null)

    // from submit arrow => function
    const handleFrom = (e) => {

        e.preventDefault()
        const from = e.target

        const TeacherName = from.Teachername.value
        const title = from.title.value
        const category = from.category.value
        const skills = from.skills.value
        const time = from.time.value
        const Description = from.description.value
        const Achivements = from.Achivements.value
        const email = from.email.value

        const Ma = from.Ma.value
        const Ba = from.Ba.value
        const Honors = from.Honors.value
        const PHD = from.PHD.value
        // contact
        const contact = from.contact.value

        const allFromData = { TeacherName, title, category, skills, time, Description, }


        // image upload system
        console.log(allFromData);
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
                fetch(`https://server-nine-ecru.vercel.app/teacher`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        TeacherName,
                        title,
                        category,
                        skills,
                        time,
                        Description,
                        image,
                        Achivements,
                        Ma,
                        Ba,
                        Honors,
                        PHD,
                        email,
                        contact
                    })

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: `Teacher added successfully`,
                                showConfirmButton: false,
                                timer: 1300
                            })

                        }
                        navigate('/OurTeachers')
                    })
                // post on db ends



            })
        // ends





    }

    return (
        <div className="bg5">

            <h1 className='text-center text-3xl font-bold text-[#db87f0] mt-10'>Add Teacher </h1>


            <form onSubmit={handleFrom} className="flex mt-16 ml-10 gap-2">
                <div className="w-1/2 py-2 pl-2  rounded-lg  bg-slate-700">

                    {/* form admin comps */}
                    {/* <AddFoodInput></AddFoodInput> */}
                    {/* form admin comps */}

                    <div className="grid grid-cols-2 gap-2 px-2">
                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300"> Teacher name</span>
                                {/* text-[#340e8d] */}
                            </label>
                            <input name="Teachername" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Teacher name" required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300"> Teacher Title</span>
                            </label>
                            <input name="title" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder=" Teacher Title" required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">Teacher picture</span>
                            </label>
                            <input ref={ImageRef} type="file" placeholder="You can't touch this" className="file-input file-input-bordered w-full max-w-xs" required />

                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">Teacher Category</span>
                            </label>
                            <input name="category" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Course Category" required />



                        </div>



                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">Free time</span>
                            </label>
                            <input name="time" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="time" placeholder="Food name" required />
                        </div>


                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">skills</span>
                            </label>
                            <input name="skills" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Teacher skill" required />

                        </div>




                    </div>

                    {/* educational  */}
                    <hr className='my-2' />

                    <h3 className='text-lg font-bold font-mono text-white'>E@mail</h3>

                    <div className="">
                        <label htmlFor="">
                            <span className="text-gray-300">email</span>
                        </label>
                        <br />
                        <input name="email" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="email" placeholder="Teacher email" required />

                    </div>


                    <hr className='my-2' />



                    <h3 className='text-lg font-bold text-white font-mono'>Educational</h3>

                    {/*  */}

                    <div className="">
                        <label htmlFor="">
                            <span className="text-gray-300 pl-2">Ma</span>
                        </label>
                        <br />

                        <input name="Ma" className="ml-2 input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Teacher skill or not N/A" required />

                    </div>

                    {/*  */}

                    <div className="">
                        <label htmlFor="">
                            <span className="text-gray-300 pl-2">Ba</span>
                        </label>
                        <br />
                        <input name="Ba" className="ml-2 input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Teacher skill or not N/A" required />

                    </div>

                    {/*  */}

                    <div className="">
                        <label htmlFor="">
                            <span className="text-gray-300 pl-2">Honors</span>
                        </label>
                        <br />
                        <input name="Honors" className="ml-2 input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Teacher skill or not N/A" required />

                    </div>

                    <div className="">
                        <label htmlFor="">
                            <span className="text-gray-300 pl-2">PHD</span>
                        </label>
                        <br />
                        <input name="PHD" className="ml-2 input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Teacher skill or not N/A" required />

                    </div>

                    {/*  educational ends*/}

                    <hr className='my-2' />

                    <h3 className='text-lg font-bold font-mono text-white'>Achivements </h3>
                    <div className="">

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">Achivements</span>
                            </label>
                            <br />
                            <input name="Achivements" className="ml-2 input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="write in this style: ma | ba | ca  | da |" required />

                        </div>


                    </div>
                    {/* contact */}
                    <hr className='my-2' />
                    <h3 className='text-lg font-bold font-mono text-white'>contact Info </h3>
                    <div className="">

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">contact</span>
                            </label>
                            <br />
                            <input name="contact" className="ml-2 input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="write in this style: mobile | email | fackbook" required />

                        </div>


                    </div>

                    <div className="text-center w-1/2 mt-2 py-3 px-5 shadow-md text-gray-300 rounded-md hover:bg-[#db87f0] hover:text-white font-semibold mx-auto">
                        <button>
                            Add Teacher
                        </button>
                    </div>





                </div>

                {/* right section */}

                <div className=" pl-5 pt-4  w-1/2 py-2  rounded-lg ">

                    <textarea placeholder='Description About Teacher in [50] woard ' className=' rounded-lg border-2 w-11/12 pl-3 pt-3 ' name="description" id="" cols="30" rows="10" required></textarea>


                </div>
            </form>

        </div>
    );
};

export default AddTeachers;