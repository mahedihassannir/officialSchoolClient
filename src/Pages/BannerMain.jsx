
import Lottie from 'lottie-react'

import animationlearning from '../../public/learning.json'

const BannerMain = () => {
    return (
        <div className="">

            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-1/2">

                    <p>রূপসদী বৃন্দাবন উচ্চ বিদ্যালয়</p>
                    <h1 className='text-6xl link-error leading-normal font-bold text-[#db87f0] '>আমাদের স্বনামধন্য <br /> <span className='text-[#340e8d]'>স্কুলে স্বাগতম</span></h1>
                    <p className='pt-3 leading-7'>
                        ২০১৭–১৮ অর্থবছরে চলতি বাজারমূল্যে বাংলাদেশের মোট দেশজ উৎপাদনের (জিডিপি) পরিমাণ ছিল ২২,৫০,৪৭৯ কোটি টাকা[২১] (২৬১.২৭ বিলিয়ন মার্কিন ডলার), যা ২০১৮–১৯ অর্থবছরে বৃদ্ধি লাভ করে ২৮৫.৮২ বিলিয়ন মার্কিন ডলার উন্নীত হবে বলে প্রাক্কলন করা হয়েছে।[২২] ২০১৭–১৮ অর্থবছরে বাংলাদেশের মানুষের মাথাপিছু গড় বার্ষিক আয় ছিল ১৭৫২ ডলার। সরকার প্রাক্কলন করেছে যে, ২০১৮–১৯ অর্থবছরে মাথাপিছু আয় দাঁড়াবে ১৯৫৬ ডলার বা ১ লাখ ৬০ হাজার ৩৯২ টাকা।[২৩] দারিদ্রের হার ২০.৫ শতাংশ, অতিদরিদ্র
                    </p>
                    <button></button>
                </div>
                <div className="w-1/2">

                    <Lottie loop={true}  animationData={animationlearning} />

                </div>
            </div>

        </div>
    );
};

export default BannerMain;