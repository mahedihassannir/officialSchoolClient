
import Lottie from 'lottie-react'

import anime from '../../../public/newsectionaddloging/boylearn.json'
import { useQuery } from '@tanstack/react-query';

import '../../ExtraCss/event.css'
import { Link } from 'react-router-dom';

const Courses = () => {

    const token = localStorage.getItem('jwtToken');

    const { data: Courses = [], refetch } = useQuery(['user'], async () => {

        const res = await fetch('https://server-nine-ecru.vercel.app/courses', {

            headers: { authorization: `Bearer ${token}` }

        })
        return res.json()


    })




    return (
        <div className='w-full h-screen grid grid-cols-3'>


            {
                Courses.map(course => <div key={course._id} className="w-[350px] h-[467px] border-2 rounded-md shadow-sm">

                    <div className="">

                        <div className="">
                            <img className='w-fulll h-60 p-1 shadow-lg' src={course.image} alt="" />
                        </div>


                        <div className="p-2">

                            <h4>{course.title}</h4>

                            <h4 className='pt-2'><span className=' underline text-blue-400'>
                                {course.company}
                            </span>


                            </h4>

                            {/* date and lavle section */}
                            <div className="mt-2">
                                <div className="flex justify-between items-center">

                                    <div className="">Enroll Date : {course.startedTime}</div>

                                    <div className="">
                                        <p className="bg-purple-500 p-2 rounded-md text-white">Beginner     </p>
                                    </div>

                                </div>
                            </div>

                            {/* date and lavle section */}

                            {/* here is pricing section */}
                            <hr className='mt-2' />
                            {/* start */}
                            <div className="flex justify-between px-2 mt-4 items-center">


                                <div className="">
                                    fgaa fafa sf adf af
                                </div>

                                <div className="">

                                    <h4 className='text-lg text-red-500'>
                                        ${course.Fee} Taka
                                    </h4>
                                </div>

                            </div>

                            {/* here is pricing section ends */}

                            <Link to={`/detailes/${course._id}`} className="text-center">

                                <button id='btn99'>Enroll</button>

                            </Link>


                        </div>

                    </div>

                </div>)
            }












        </div>
    );
};

export default Courses;