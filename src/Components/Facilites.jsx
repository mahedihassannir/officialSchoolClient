import { BsCameraVideo } from "react-icons/bs"; //import the icon from react icons

const Facilites = () => {
    return (
        <div className="w-full  py-10">

            {/* Heading */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold pb-2">
                    এক নজরে আমাদের <span className="text-[#db87f9]">Mern Stack / Frontend</span> কোর্স
                </h1>
                <p className="text-lg">এই কোর্সে যা যা থাকছে</p>
            </div>

            {/* Facility details section */}
            <section className="mt-4">
                {/* Grid layout for different screen sizes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-[90%] mx-auto">

                    {/* Card 1 */}
                    <div className="w-full h-[300px] border-2 hover:border-[#db87f0] cursor-pointer">
                        <div className="flex justify-center mt-10 mb-3">
                            <BsCameraVideo className="text-5xl text-[#340e8d]" />
                        </div>
                        <div className="text-center px-2">
                            <p className="pb-2">12 টি মডিউলে 135+ ভিডিও</p>
                            <p>আপনারা যেন ধাপে ধাপে শিখতে পারেন সেজন্য পুরো কোর্সটি 12টি মডিউলে ও 135+ ভিডিওতে ভাগ করে সাজানো হয়েছে।</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="w-full h-[300px] border-2 hover:border-[#db87f0] cursor-pointer">
                        <div data-aos="fade-right" data-aos-anchor-placement="top-center" className="flex justify-center mt-10 mb-3">
                            <BsCameraVideo className="text-5xl text-pink-400" />
                        </div>
                        <div className="text-center px-2">
                            <p className="pb-2">12 টি মডিউলে 135+ ভিডিও</p>
                            <p>আপনারা যেন ধাপে ধাপে শিখতে পারেন সেজন্য পুরো কোর্সটি 12টি মডিউলে ও 135+ ভিডিওতে ভাগ করে সাজানো হয়েছে।</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="w-full h-[300px] border-2 hover:border-[#db87f0] cursor-pointer">
                        <div className="flex justify-center mt-10 mb-3">
                            <BsCameraVideo className="text-5xl text-[#340e8d]" />
                        </div>
                        <div className="text-center px-2">
                            <p className="pb-2">12 টি মডিউলে 135+ ভিডিও</p>
                            <p>আপনারা যেন ধাপে ধাপে শিখতে পারেন সেজন্য পুরো কোর্সটি 12টি মডিউলে ও 135+ ভিডিওতে ভাগ করে সাজানো হয়েছে।</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="w-full h-[300px] border-2 hover:border-[#db87f0] cursor-pointer">
                        <div className="flex justify-center mt-10 mb-3">
                            <BsCameraVideo className="text-5xl text-pink-400" />
                        </div>
                        <div className="text-center px-2">
                            <p className="pb-2">12 টি মডিউলে 135+ ভিডিও</p>
                            <p>আপনারা যেন ধাপে ধাপে শিখতে পারেন সেজন্য পুরো কোর্সটি 12টি মডিউলে ও 135+ ভিডিওতে ভাগ করে সাজানো হয়েছে।</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="w-full h-[300px] border-2 hover:border-[#db87f0] cursor-pointer">
                        <div className="flex justify-center mt-10 mb-3">
                            <BsCameraVideo className="text-5xl text-pink-400" />
                        </div>
                        <div className="text-center px-2">
                            <p className="pb-2">12 টি মডিউলে 135+ ভিডিও</p>
                            <p>আপনারা যেন ধাপে ধাপে শিখতে পারেন সেজন্য পুরো কোর্সটি 12টি মডিউলে ও 135+ ভিডিওতে ভাগ করে সাজানো হয়েছে।</p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="w-full h-[300px] border-2 hover:border-[#db87f0] cursor-pointer">
                        <div className="flex justify-center mt-10 mb-3">
                            <BsCameraVideo className="text-5xl text-pink-400" />
                        </div>
                        <div className="text-center px-2">
                            <p className="pb-2">12 টি মডিউলে 135+ ভিডিও</p>
                            <p>আপনারা যেন ধাপে ধাপে শিখতে পারেন সেজন্য পুরো কোর্সটি 12টি মডিউলে ও 135+ ভিডিওতে ভাগ করে সাজানো হয়েছে।</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Facilites;
