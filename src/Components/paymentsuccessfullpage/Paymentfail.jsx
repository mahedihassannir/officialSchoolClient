import { Link } from "react-router-dom";
import CartDetails from "../cartDetails";
import Payment from "../payment";

const Paymentfail = () => {


    return (
        <div>
        <div className='flex flex-col md:flex-row gap-5 '>
            {/* CartProductDetails section starts  team AVENGERS */}
            {/* this section for Chadnee */}
            <section className='w-full md:w-2/3 '>
                <CartDetails></CartDetails>
            </section>
            {/*  CartProductDetails section End */}

            {/* ------------------------------------------------- */}

            {/* PaymentDetails section starts  team AVENGERS */}
            {/* this section for MGR */}
            <section className='w-full md:w-1/3 border p-5'>
                
                <Payment></Payment>


            </section>
            {/* PaymentDetails section End  */}
        </div>
    </div>
    );
};

export default Paymentfail;