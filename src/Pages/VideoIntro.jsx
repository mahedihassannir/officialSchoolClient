

import Lottie from 'lottie-react'

import scroll from '../../public/mouse scroll.json'



const VideoIntro = () => {
    return (
        <div className="w-full h-screen ">

            <div className=" gap-2 mt-40 flex items-center ">
                <div className="w-4/5 py-2  ">
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-center" >

                        <video controls className='rounded-md' loop={true} src="../../public/video.mp4" ></video>

                    </div>
                </div>
                <div className="py-2">

                    <Lottie className='h-[200px]' animationData={scroll} />
                </div>
            </div>

        </div>
    );
};

export default VideoIntro;