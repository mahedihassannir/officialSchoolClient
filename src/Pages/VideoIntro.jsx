

import Lottie from 'lottie-react'

import scroll from '../../public/mouse scroll.json'



const VideoIntro = () => {
    return (
        <div className="w-full h-screen ">

            <div className=" gap-2 mt-40 flex items-center ">
                <div className="w-4/5 py-2  ">
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-center" >

                        <iframe width="900" height="500" src="https://www.youtube.com/embed/LlCwHnp3kL4" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



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