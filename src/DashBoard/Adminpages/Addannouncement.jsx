import { useNavigate } from 'react-router-dom';
import '../../ExtraCss/bg.css'
import Swal from 'sweetalert2';

const Addannouncement = () => {


    const navigate = useNavigate()

    const handleAnnounce = (e) => {

        e.preventDefault()

        const form = e.target

        const announce = form.announce.value
        const title = form.title.value

        console.log(announce, title);


        fetch('http://localhost:5000/sociaannouncementlpost ', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ announce, title })

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
                        timer: 1000
                    })


                }
                navigate("/notify")


            })




    }

    return (

        <div className="w-full pb-20 bg3 ">
            <h1 className='text-center text-3xl font-bold text-[#db87f0] mt-10'>Add teacher section <span className='text-red-400'>complete</span> </h1>



            <div className="">
                <form onSubmit={handleAnnounce} action="" className='flex justify-center items-center h-screen'>
                    <div className="">

                        <label htmlFor="">
                            <span className=' text-white'> Title Of Announcement </span>
                        </label>
                        <br />

                        <input name='title' type="text" placeholder="Title of announcement" className=" mb-4 input input-bordered input-primary w-full max-w-xs" />

                        {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
                        <br />
                        <label htmlFor="">
                            <span className=' text-white'> Description Of Announcement </span>
                        </label>

                        <br />
                        <textarea required name='announce' cols={50} rows={20} className="textarea textarea-primary" placeholder="Make a announce"></textarea>


                        <div className=" text-red-400 text-center "><input className='py-3 cursor-pointer rounded-md border-2 hover:bg-[#db87f0] hover:text-white font-bold px-14' type="submit" value="announce" /></div>
                    </div>

                </form>
            </div>




        </div>
    );
};

export default Addannouncement;