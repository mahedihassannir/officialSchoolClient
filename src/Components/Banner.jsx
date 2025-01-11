import Tilt from 'react-parallax-tilt';
import '../ExtraCss/bg.css';

const Banner = () => {
    return (
        <div className="relative">

            {/* Background for the banner */}
            <div className="bg h-screen mb-20 w-full flex justify-center items-center">
                
                {/* Left section (image side) */}
                <div className="w-full sm:w-1/2 md:w-1/3 flex justify-center">
                    <Tilt glareEnable={true} glareMaxOpacity={0.1} glarePosition="all">
                        <div style={{ height: '400px' }}>
                            <img
                                loading="lazy"
                                src="https://i.ibb.co/WfchYPr/b-removebg-preview.png"
                                alt="Banner Image"
                                data-aos="zoom-out-right"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </Tilt>
                </div>

            </div>

            {/* Bottom section (text side) */}
            <div className="absolute bottom-0 w-full text-center mb-10">
                <h1 className="text-white text-6xl sm:text-8xl font-bold leading-tight">
                    Let`s Build <span className="text-5xl sm:text-7xl font-bold">_ </span><br />Your Career
                </h1>
            </div>

        </div>
    );
};

export default Banner;
