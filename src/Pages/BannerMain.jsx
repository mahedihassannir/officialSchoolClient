
import Lottie from 'lottie-react'

import animationlearning from '../../public/learning.json'
import { Link } from 'react-router-dom';

const BannerMain = () => {
    return (
        <div className="">

            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-1/2">

                    <p>গ্রামীণ কম্পিউটার সায়েন্স</p>
                    <h1 className='text-6xl link-error leading-normal font-bold text-[#db87f0] '>আমাদের স্বনামধন্য <br /> <span className='text-[#340e8d]'>স্কুলে স্বাগতম</span></h1>
                    <p className='pt-3 leading-7'>
                        রূপসদী বৃন্দাবন উচ্চ বিদ্যালয় বাঁশরামপুরে অবস্থিত একটি জনপ্রিয় বিদ্যালয়, রূপসদীতে স্থানীয় ব্যবসার অধীনে তালিকাভুক্ত রূপসদী, রূপসদীতে উচ্চ বিদ্যালয়, | ১৯১৫ সালে মাইম চন্দ্র রায় স্বর্গীয় স্থাপিত এই আদালতটি গত ছাত্রকাল ধরে অত্র এলাকায় শিক্ষার আলোকে সমর্থন করেন।
                        এটি একটি ঐতিহাসিক ঘটনা। কারণ স্বাধীন যুদ্ধের সময় শান্তিপূর্ণ যুদ্ধক্ষেত্রে এই স্কুলটি ব্যবহার করা হয়েছিল। এখন এটি অভিজ্ঞ শিক্ষক প্যানেল দ্বারা প্রসারিত হচ্ছে। প্রায় হাজার শিক্ষার্থী এই প্রতিষ্ঠানে অধ্যয়নরত এবং ফলাফল যথাক্রমে এসএসসি, জেএসসিতে বেশ ভালো।

                        <span className=' animate-pulse underline pl-2 hover:text-info text-yellow-700 '>
                            <Link to="/howuse">

                                How To Use This Website
                            </Link>
                        </span>
                    </p>



                </div>
                <div className="w-1/2">

                    <Lottie loop={true} animationData={animationlearning} />

                </div>
            </div>


        </div>
    );
};

export default BannerMain;