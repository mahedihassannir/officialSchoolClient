

// here is teh react marque 
import Marquee from "react-fast-marquee";
import { RiSecurePaymentFill } from "react-icons/ri";
// here is teh react marque  ends

const Sponsors = () => {
    return (
        <div className="w-full py-10 ">
            <div >
                <h4 className="text-4xl font-bold text-[#db87f0] my-5 flex items-center justify-center gap-4"><RiSecurePaymentFill></RiSecurePaymentFill>  আমাদের স্পনসর</h4>
            </div>

            {/* here is use react marque */}
            <div className="mt-10">

                <Marquee className="grdi gap-7" speed={100}>

                    <img className="mr-5" src="https://i.ibb.co/Jt29fjw/google.png" alt="" />
                    <img src="https://i.ibb.co/tsYhgHX/logo.png" alt="" />
                    <img src="https://i.ibb.co/j34rmpn/logo-coca-cola.png
" alt="" />
                    <img src="https://i.ibb.co/WKZhsvG/logo-godrej.png
" alt="" />
                    <img src="https://i.ibb.co/71PnVyp/logo-oppo.png
" alt="" />
                    <img src="https://i.ibb.co/8rYBbb5/logo-paypal.png
" alt="" />
                    <img src="https://i.ibb.co/jTK6QsM/logo-philips.png
" alt="" />


                </Marquee>
            </div>
        </div>
    );
};

export default Sponsors;