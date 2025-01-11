const CurseIndestracture = () => {
    return (
        <div className="w-full pt-10 ">
            {/* Heading Section */}
            <div className="my-10 text-center">
                <h1 className="text-3xl font-bold" data-aos="fade-up"
                    data-aos-anchor-placement="top-center">কোর্স ইন্সট্রাক্টর</h1>
            </div>
            {/* End of Heading */}

            {/* Content Section */}
            <div className="flex flex-col md:flex-row justify-center px-5 md:px-20">
                {/* Image Section */}
                <div className="w-full md:w-1/2 border-b-2 md:border-r-2 border-yellow-500 mb-6 md:mb-0">
                    <img className="w-full md:w-[300px] md:h-[400px] rounded-b-2xl mx-auto" 
                        src="https://i.ibb.co.com/tXyqT9X/sdsdsd.png" 
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-center" />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 md:pl-4">
                    <p className="leading-loose text-center md:text-left">
                        Mahedi একজন প্রযুক্তি উদ্যোক্তা। বুয়েটে কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং নিয়ে পড়া অবস্থায় ২০০৮ সালে তিনি প্রতিষ্ঠা করেন বাংলাদেশের প্রথম ডিজিটাল এজেন্সি - অ্যানালাইজেন। প্রোগ্রামিং এর প্রতি ভালবাসা এবং মানুষকে শেখানোর প্রতি আগ্রহ থেকে এরপরে তিনি ২০২০ সালে প্রতিষ্ঠা করেন লার্ন উইথ সুমিত প্লাটফর্ম যেখানে প্রায় ৩৫০+ প্রোগ্রামিং রিলেটেড ভিডিও টিউটোরিয়াল রয়েছে। লার্ন উইথ সুমিত ইউটিউব চ্যানেল এবং পাবলিক ফেসবুক গ্রুপ থেকে প্রায় এক লক্ষেরও বেশি মানুষ ফ্রি প্রোগ্রামিং শিখছে।

                        তিনি নিজে একজন ফুল স্ট্যাক ওয়েব ডেভেলপার ও সফটওয়্যার আর্কিটেক্ট এবং দীর্ঘ 14 বছর ধরে তিনি ওয়েব ডেভেলপমেন্ট ও সফটওয়্যার পেশার সাথে জড়িত।
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CurseIndestracture;
