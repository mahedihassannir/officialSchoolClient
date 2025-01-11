const About = () => {
    return (
        <div className="w-full py-10">

            {/* Container for content */}
            <div className="flex flex-col md:flex-row justify-center px-5 md:px-20">

                {/* Left Section (Text content) */}
                <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-8 md:mb-0 border-b-2 md:border-r-2 border-yellow-500">

                    <p className="leading-loose text-base md:text-lg">
                        <span className="text-md font-bold text-[#db87f0]" data-aos="fade-up" data-aos-anchor-placement="top-center">
                            মাহেদী হাসান
                        </span> 
                        একজন প্রযুক্তি উদ্যোক্তা। বুয়েটে কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং নিয়ে পড়া অবস্থায় ২০০৮ সালে তিনি প্রতিষ্ঠা করেন বাংলাদেশের প্রথম ডিজিটাল এজেন্সি - অ্যানালাইজেন। প্রোগ্রামিং এর প্রতি ভালবাসা এবং মানুষকে শেখানোর প্রতি আগ্রহ থেকে এরপরে তিনি ২০২০ সালে প্রতিষ্ঠা করেন লার্ন উইথ সুমিত প্লাটফর্ম যেখানে প্রায় ৩৫০+ প্রোগ্রামিং রিলেটেড ভিডিও টিউটোরিয়াল রয়েছে। লার্ন উইথ সুমিত ইউটিউব চ্যানেল এবং পাবলিক ফেসবুক গ্রুপ থেকে প্রায় এক লক্ষেরও বেশি মানুষ ফ্রি প্রোগ্রামিং শিখছে।

                        তিনি নিজে একজন ফুল স্ট্যাক ওয়েব ডেভেলপার ও সফটওয়্যার আর্কিটেক্ট এবং দীর্ঘ 14 বছর ধরে তিনি ওয়েব ডেভেলপমেন্ট ও সফটওয়্যার পেশার সাথে জড়িত।
                    </p>
                </div>

                {/* Right Section (Image) */}
                <div className="w-full md:w-1/2 md:ml-10">
                    <img 
                        data-aos="fade-left"
                        data-aos-anchor-placement="top-center"
                        loading="lazy"
                        src="https://i.ibb.co.com/tXyqT9X/sdsdsd.png" 
                        alt="Mahadi Hasan"
                        className="w-full h-auto"
                    />
                </div>

            </div>

        </div>
    );
};

export default About;
