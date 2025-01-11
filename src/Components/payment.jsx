import React from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { FaAddressBook, FaAddressCard, FaPhone, FaTaxi } from 'react-icons/fa';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Payment = () => {
  return (
    <div>
      <form>
        <ToastContainer />


        <div className='flex justify-center'>
          <h1 className='font-semibold pb-4  text-red-500'>প্রথমে এই নাম্বার এ টাকা পাঠান এবং ট্রানজিশন আইডি দিন</h1>
        </div>


        <div className="text-xs font-semibold ">
          <div className="pb-5 border-b">
            <p>Discount and Payment</p>

            {/* apply promo code  */}
            <div>
              <div className="mt-3 flex justify-between items-center">
                <div className="flex items-center gap-1 ">
                  <FaAddressBook className="text-[#F57224]" />
                  <p>আপনার নাম দিন</p>
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-gray-400">আপনার নাম দিন</p>
                  <FaAddressCard />
                </div>
              </div>

              <div className="mt-2 w-f  overflow-hidden relative">
                <input
                  name="address"
                  type="text"
                  className={`py-[10px] outline-none border rounded placeholder:text-gray-400 w-full px-2 focus:border-[#2ABBE8] duration-300 ${"isInputEmpty" ? 'border-red-500  border-4' : 'border-green-500'}`}
                  placeholder="আপনার নাম দিন"
                  onChange={"handleInputChange"}
                  required
                />
                <button className="absolute  right-0 top-1/2 -translate-y-1/2 border-l h-[50%] text-[#2ABBE8] px-3">
                  Confirm
                </button>
              </div>
            </div>
            <div>
              <div className="mt-3 flex justify-between items-center">
                <div className="flex items-center gap-1 ">
                  <FaTaxi className="text-[#F57224]" />
                  <br />
                  <p>আপনার মোবাইল নাম্বার দিন</p>
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-gray-400">আপনার মোবাইল নাম্বার দিন</p>
                  <BsChevronRight />
                </div>
              </div>

              <div className="mt-2 w-f  overflow-hidden relative ">
                <input
                  type="text"
                  className="py-[10px] outline-none border rounded placeholder:text-gray-400 w-full px-2 focus:border-[#2ABBE8] duration-300"
                  placeholder="আপনার মোবাইল নাম্বার দিন"
                />
                <button className="absolute  right-0 top-1/2 -translate-y-1/2 border-l h-[50%] text-[#2ABBE8] px-3">
                  Confirm
                </button>
              </div>
              <br />

              <div className="mt-3 flex justify-between items-center">
                <div className="flex items-center gap-1 ">
                  <FaTaxi className="text-[#F57224]" />
                  <br />
                  <p>আপনার বিকাশ ট্রানজিশন আইডি দিন</p>
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-gray-400">আপনার বিকাশ ট্রানজিশন আইডি দিন</p>
                  <BsChevronRight />
                </div>
              </div>

              <div className="mt-2 w-f  overflow-hidden relative ">
                <input
                  type="text"
                  className="py-[10px] outline-none border rounded placeholder:text-gray-400 w-full px-2 focus:border-[#2ABBE8] duration-300"
                  placeholder="আপনার বিকাশ ট্রানজিশন আইডি দিন"
                />
                <button className="absolute  right-0 top-1/2 -translate-y-1/2 border-l h-[50%] text-[#2ABBE8] px-3">
                  Confirm
                </button>
              </div>
            </div>
          </div>











          <div className="pt-5 font-bold">
            <h1>Order Summary</h1>

            <div className="flex flex-col gap-2 mt-2">
              {/*items total Taka  */}
              <div className="flex items-center justify-between">
                <p className="">Items Total</p>
                <div className="flex items-center gap-1">
                  <TbCurrencyTaka />
                  <span className='text-lg'>{"৯৯ টাকা কোর্স "}</span>
                </div>
              </div>


              {/*Total Payment */}
              <div className="flex items-center justify-between">
                <p>Total Payment</p>
                <div className="flex items-center gap-1">
                  <TbCurrencyTaka />
                  {/* <span>{cart?.result?.product.price * cart?.result?.product?.quantity}</span> */}
                  <span className='text-lg'>{"৯৯ টাকা "}</span>
                </div>
              </div>

              <div>
                <p className="text-gray-500 mt-1 text-right">
                  VAT included, where applicable
                </p>
              </div>
            </div>
          </div>

          <Link className="pt-5">
            {/* payment btn  */}
            <div>
              <button className="py-3 w-full bg-[#F57224] hover:bg-[#DADADA] duration-300 hover:text-gray-500 text-white rounded" onClick={""}>Payment Now</button>
            </div>
            {/* <button
            onClick={onSubmit}
            className="py-3 w-full bg-[#F57224] hover:bg-[#DADADA] duration-300 hover:text-gray-500 text-white rounded"
          >

            Place Order

          </button>
           */}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Payment;