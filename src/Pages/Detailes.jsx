import img1 from '../assets/job-recommendation.webp';
import img2 from '../assets/t-shirt.webp';
import img3 from '../assets/tpaccess.webp';

const Detailes = () => {
    return (
        <div className="w-full  my-20">

            {/* First Section */}
            <div className="flex flex-col md:flex-row justify-center w-full">
                <div className="w-full md:w-1/2 md:mt-40">
                    <img className="w-full md:w-[80%] mx-auto rounded-se-full" src={img1} alt="Job Recommendation" />
                </div>
                <div className="w-full md:w-1/2 md:mt-40 mt-10 px-5" data-aos="zoom-in">
                    <h1 className="text-2xl font-bold text-center md:text-left w-11/12">
                        <span className='text-[#db98f0]'>কোর্সে ভাল করলে</span> জব রেকোমেন্ডেসন লেটার
                    </h1>
                    <p className="w-11/12 pt-5 leading-7 text-center md:text-left">
                        যারা কোর্সের বিভিন্ন এসাইনমেন্ট ও ফাইনাল পরীক্ষায় ভাল রেজাল্ট করবেন এবং সামগ্রিকভাবে কমপক্ষে 70% মার্কস পাবেন, তাদের কে নির্বাচন করে আমরা জব রেকোমেন্ডেশন লেটার লিখে দিবো। এই কোর্স কাউকে চাকরির নিশ্চয়তা দিতে পারবেনা কারণ কোন কোর্সই সেটা পারেনা। তবে পরিশ্রমী এবং নিবেদিতপ্রাণ লার্নারদের সঠিক গাইডলাইন অবশ্যই নিশ্চিত করবে এবং চাকরির ইন্টারভিউতে যেন তারা আত্মবিশ্বাস এর সাথে ভাল করতে পারে সে ব্যাপারে সাহায্য করবে।
                    </p>
                </div>
            </div>

            {/* Second Section */}
            <div className="flex flex-col md:flex-row-reverse justify-center w-full mt-10">
                <div className="w-full md:w-1/2 md:mt-40">
                    <img className="w-full md:w-[80%] mx-auto rounded-se-full" src={img3} alt="TP Access" />
                </div>
                <div className="w-full md:w-1/2 md:mt-40 mt-10 px-5" data-aos="zoom-in">
                    <h1 className="text-2xl font-bold text-center md:text-left w-11/12">
                        কোর্সে ভাল করলে জব রেকোমেন্ডেসন লেটার
                    </h1>
                    <p className="w-11/12 pt-5 leading-7 text-center md:text-left">
                        যারা কোর্সের বিভিন্ন এসাইনমেন্ট ও ফাইনাল পরীক্ষায় ভাল রেজাল্ট করবেন এবং সামগ্রিকভাবে কমপক্ষে 70% মার্কস পাবেন, তাদের কে নির্বাচন করে আমরা জব রেকোমেন্ডেশন লেটার লিখে দিবো। এই কোর্স কাউকে চাকরির নিশ্চয়তা দিতে পারবেনা কারণ কোন কোর্সই সেটা পারেনা। তবে পরিশ্রমী এবং নিবেদিতপ্রাণ লার্নারদের সঠিক গাইডলাইন অবশ্যই নিশ্চিত করবে এবং চাকরির ইন্টারভিউতে যেন তারা আত্মবিশ্বাস এর সাথে ভাল করতে পারে সে ব্যাপারে সাহায্য করবে।
                    </p>
                </div>
            </div>

            {/* Third Section */}
            <div className="flex flex-col md:flex-row justify-center w-full mt-10">
                <div className="w-full md:w-1/2 md:mt-40">
                    <img className="w-full md:w-[80%] mx-auto rounded-tl-full" src={img2} alt="T-Shirt" />
                </div>
                <div className="w-full md:w-1/2 md:mt-40 mt-10 px-5" data-aos="zoom-in">
                    <h1 className="text-2xl font-bold text-center md:text-left w-11/12">
                        কোর্সে ভাল করলে জব রেকোমেন্ডেসন লেটার
                    </h1>
                    <p className="w-11/12 pt-5 leading-7 text-center md:text-left">
                        যারা কোর্সের বিভিন্ন এসাইনমেন্ট ও ফাইনাল পরীক্ষায় ভাল রেজাল্ট করবেন এবং সামগ্রিকভাবে কমপক্ষে 70% মার্কস পাবেন, তাদের কে নির্বাচন করে আমরা জব রেকোমেন্ডেশন লেটার লিখে দিবো। এই কোর্স কাউকে চাকরির নিশ্চয়তা দিতে পারবেনা কারণ কোন কোর্সই সেটা পারেনা। তবে পরিশ্রমী এবং নিবেদিতপ্রাণ লার্নারদের সঠিক গাইডলাইন অবশ্যই নিশ্চিত করবে এবং চাকরির ইন্টারভিউতে যেন তারা আত্মবিশ্বাস এর সাথে ভাল করতে পারে সে ব্যাপারে সাহায্য করবে।
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Detailes;
