import Lottie from 'lottie-react';
import scroll from '../../public/mouse scroll.json';
import { Link } from 'react-router-dom';

const VideoIntro = () => {
    return (
        // <div className="w-full h-screen flex flex-col justify-center items-center">

        //     {/* Video and Scroll Animation Section */}
        //     <div className="flex flex-col md:flex-row gap-8 items-center mt-10">

        //         {/* Video Section */}
        //         <div className="w-full md:w-4/5 px-4">
        //             <div data-aos="fade-up" data-aos-anchor-placement="top-center">
        //                 <iframe
        //                     width="400"
        //                     height="350"
        //                     src="https://www.youtube.com/embed/LlCwHnp3kL4"
        //                     title="YouTube video player"
        //                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        //                     allowFullScreen
        //                 ></iframe>
        //             </div>
        //         </div>

        //         {/* Lottie Scroll Animation */}
        //         <div className="py-2">
        //             <Lottie
        //                 className="h-[200px] md:h-[300px]"
        //                 animationData={scroll}
        //             />
        //         </div>
        //     </div>

        // </div>
        <div className='w-full h-48'>

            <div className='flex justify-center items-center'>
                <Link to={"/payment"}>

                    <button className='animate-bounce text-3xl font-bold text-red-500 w-[300px] h-24 border-2 border-red-500 rounded-md hover:bg-red-500 hover:text-white'>

                        ভতি হন

                    </button>

                </Link>
            </div>

        </div>
    );
};

export default VideoIntro;
