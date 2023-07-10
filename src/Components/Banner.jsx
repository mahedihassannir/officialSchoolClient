
// here is  the parallax imports 
import Tilt from 'react-parallax-tilt';
// ends

// here is the css
import '../ExtraCss/bg.css'
// here is the css ends

const Banner = () => {
    return (
        <div className="">
            {/* bg for the nackground  */}
            <div className="bg h-screen mb-20  w-full   flex   justify-center items-center">
                {/* this is the image side */}
                <div className="w-1/3 ">
                    <Tilt glareEnable={true} glareMaxOpacity={0.1} glarePosition="all">
                        <div style={{ height: '400px', }}>

                            {/* <DefaultComponent /> */}
                            <img loading='lazy' src="https://i.ibb.co/WfchYPr/b-removebg-preview.png" alt="" data-aos="zoom-out-right" />
                        </div>
                    </Tilt>


                </div>
                {/* this  is the text or headding side  */}
                <div className="w-1/2 " data-aos="zoom-out-left">
                    <h1 className='text-[#db87f0] link-error text-8xl font-bold leading-tight'>Let`s Build <span className='text-7xl font-bold' >_ </span> <br />  Your Career </h1>
                </div>
            </div>

        </div>
    );
};

export default Banner;