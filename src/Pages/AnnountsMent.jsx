import { useEffect } from "react";
import { useState } from "react";
import IsAnmin from "../hooks/IsAnmin";


import '../ExtraCss/bg.css'
import Swal from "sweetalert2";

const AnnountsMent = () => {

    const [announcement, Setannouncement] = useState([])

    useEffect(() => {

        fetch(`https://server-nine-ecru.vercel.app/cursorannouncement`)
            .then(res => res.json())
            .then(data => Setannouncement(data))


    }, [])


    const [isAdmin] = IsAnmin()


    const handleDeleteAnnouncement = (id) => {

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

                    fetch(`https://server-nine-ecru.vercel.app/cursorannouncement/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);

                            if (data.deletedCount > 0) {

                                Swal.fire(
                                    'Deleted!',
                                    ' Announcement has been deleted.',
                                    'success'
                                )
                            }
                        })
                }
            })
        }

    }

    return (
        <div className="pb-60">
            <p className="my-5 mx-4 "> total announcement :  <span className="text-red-500">{announcement.length}</span></p>

            <div className="grid grid-cols-3 pb-40 gap-5">


                {
                    announcement.map(res => <div key={res._id}>
                        <div className=" image-container card w-96 h-96 bg-base-100 shadow-xl image-full">
                            <figure>
                                <img className="object-cover" src="data:image/jpeg;base64,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" alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{res.title}</h2>
                                <p>{res.announce}</p>
                                {
                                    isAdmin &&
                                    <div className="card-actions justify-end">
                                        <button onClick={() => handleDeleteAnnouncement(res._id)} className="btn btn-primary">Delete </button>
                                    </div>
                                }
                            </div>
                        </div>

                    </div>

                    )
                }


            </div >

        </div>
    );
};

export default AnnountsMent;