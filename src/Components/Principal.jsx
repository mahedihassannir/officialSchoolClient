// css
import '../ExtraCss/event.css'

const Principal = () => {
    return (
        <div className="w-full px-5 md:px-20 py-10">
            <div className="mt-10 w-full flex flex-col md:flex-row justify-center items-center gap-10">

                {/* Image Section */}
                <div className="w-full lg:h-[700px] md:w-1/2 flex justify-center">
                    <img 
                        loading="lazy" 
                        className="radd md:h-[500px] max-h-[500px]" 
                        src="https://i.ibb.co.com/3SzPRGF/mamun.png" 
                        alt="Executive Officer" 
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-center" 
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <div className="mt-10 md:mt-24">
                        <h1 
                            data-aos="zoom-out-right" 
                            className="pb-10 text-green-600 text-3xl md:text-4xl leading-normal font-bold">
                            গ্রামীণ কম্পিউটার সায়েন্স <br />
                    
                            <span className=" text-[#ff2626]">নির্বাহী কর্মকর্তা</span>
                        </h1>
                        <p className="text-gray-600 leading-7 w-10/12">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis reprehenderit ex vel rem ad veritatis aperiam voluptas maiores quam labore ea minima, dicta magnam, nam illum voluptatem in laboriosam modi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Principal;