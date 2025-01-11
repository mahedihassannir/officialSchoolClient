
import Lottie from 'lottie-react'

import anime from '../../../public/newsectionaddloging/boylearn.json'
import { useQuery } from '@tanstack/react-query';

import '../../ExtraCss/event.css'
import { Link } from 'react-router-dom';

const Courses = () => {


    return (
        <div className='w-full h-screen grid grid-cols-3'>


            <div key={""} className="w-[350px] h-[467px] border-2 rounded-md shadow-sm">

                    <div className="">

                        <div className="">
                            <img className='w-fulll h-60 p-1 shadow-lg' src={"https://i.ibb.co.com/M5sZ5j8/big-one.png"} alt="" />
                        </div>


                        <div className="p-2">

                            <h4>{"hello"}</h4>

                            <h4 className='pt-2'><span className=' underline text-blue-400'>
                                {"hello"}
                            </span>


                            </h4>

                            {/* date and lavle section */}
                            <div className="mt-2">
                                <div className="flex justify-between items-center">

                                    <div className="">Enroll Date : {"hello"}</div>

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
                                        ${"hello"} Taka
                                    </h4>
                                </div>

                            </div>

                            {/* here is pricing section ends */}

                            <Link to={`/payment`} className="text-center">

                                <button id='btn99'>Enroll</button>

                            </Link>


                        </div>

                    </div>

                </div>
           












        </div>
    );
};

export default Courses;