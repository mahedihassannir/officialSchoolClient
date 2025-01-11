import Lottie from 'lottie-react';
import animationlearning from '../../public/learning.json';
import { Link } from 'react-router-dom';

const BannerMain = () => {
    return (
        <div className="w-full h-screen flex flex-col md:flex-row justify-center items-center px-5 md:px-20">

            {/* Left Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <p className="text-lg text-gray-600">গ্রামীণ কম্পিউটার সায়েন্স</p>
                <h1 className='text-4xl md:text-6xl font-bold text-[#ff1616] leading-snug md:leading-normal'>
                    আমাদের ট্রেনিং সেন্টারে আপনাকে
                    <span className='text-[#340e8d]'> স্বাগতম</span>
                </h1>
                <p className='pt-3  text-base md:text-base leading-6 md:leading-7 text-gray-700'>
                    মাত্র ৯৯ টাকায় আজই কম্পিউটার শিখে নিজের ভবিষ্যত গড়ে তুলুন। ছোট একটি সিদ্ধান্ত বদলে দিতে পারে আপনার পুরো জীবন। সময় নষ্ট না করে আজই শুরু করুন। প্রযুক্তির সঙ্গে এগিয়ে যান, স্বপ্ন পূরণ করুন। সফলতার পথে প্রথম পদক্ষেপ নিন এখনই!
                    <br />

                    {/* btn */}

                    <div className='mt-4'>
                        <Link to={"/payment"}>

                            <button className='animate-bounce text-3xl font-bold text-red-500 w-[300px] h-24 border-2 border-red-500 rounded-md hover:bg-red-500 hover:text-white'>

                                ভতি হন

                            </button>

                        </Link>
                    </div>
                </p>
            </div>

            {/* Right Section aimation */}
            <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
                <div className="w-72 md:w-full">
                    <Lottie loop={true} animationData={animationlearning} />
                </div>
            </div>
        </div>
    );
};

export default BannerMain;
