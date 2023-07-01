import { useEffect } from "react";
import { useState } from "react";

const OurTeachers = () => {

    const [teachers, Setteachers] = useState([])

    useEffect(() => {

        const url = 'http://localhost:5000/uteacher'

        fetch(url)
            .then(res => res.json())
            .then(data => Setteachers(data))


    }, [])

    return (
        <div className="mb-20">
            {
                teachers.map(res => <div key={res._id}>

                    <h1>{res.TeacherName}</h1>
                    <img src={res.image} alt="" />


                </div>)
            }

        </div>
    );
};

export default OurTeachers;