import axios from 'axios';
import React, { useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { FaAddressBook, FaAddressCard, FaTaxi } from 'react-icons/fa';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    transactionId: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, transactionId } = formData;

    if (!name || !phone || !transactionId) {
      toast.error('সব তথ্য পূরণ করুন!');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:5000/payment/success/${transactionId}`, {
        name,
        phone
      });
      if (response.status === 200) {
        toast.success('পেমেন্ট সফল হয়েছে!');
        window.location.href = `/payment/success/${transactionId}`;
      }
    } catch (error) {
      toast.error('পেমেন্ট ব্যর্থ হয়েছে! আবার চেষ্টা করুন।');
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ToastContainer />
        <div className='flex justify-center'>
          <h1 className='font-semibold pb-4 text-red-500'>
            প্রথমে এই নাম্বার এ টাকা পাঠান এবং ট্রানজিশন আইডি দিন
          </h1>
        </div>

        <div className="text-xs font-semibold">
          <div className="pb-5 border-b">
            <p>Discount and Payment</p>

            {/* Name Input */}
            <div className="mt-3 flex justify-between items-center">
              <div className="flex items-center gap-1">
                <FaAddressBook className="text-[#F57224]" />
                <p>আপনার নাম দিন</p>
              </div>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className="py-[10px] outline-none border rounded w-full px-2 focus:border-[#2ABBE8]"
                placeholder="আপনার নাম দিন"
                required
              />
            </div>

            {/* Phone Number Input */}
            <div className="mt-3 flex justify-between items-center">
              <div className="flex items-center gap-1">
                <FaTaxi className="text-[#F57224]" />
                <p>আপনার মোবাইল নাম্বার দিন</p>
              </div>
              <input
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleInputChange}
                className="py-[10px] outline-none border rounded w-full px-2 focus:border-[#2ABBE8]"
                placeholder="আপনার মোবাইল নাম্বার দিন"
                required
              />
            </div>

            {/* Transaction ID Input */}
            <div className="mt-3 flex justify-between items-center">
              <div className="flex items-center gap-1">
                <FaTaxi className="text-[#F57224]" />
                <p>আপনার বিকাশ ট্রানজিশন আইডি দিন</p>
              </div>
              <input
                name="transactionId"
                type="text"
                value={formData.transactionId}
                onChange={handleInputChange}
                className="py-[10px] outline-none border rounded w-full px-2 focus:border-[#2ABBE8]"
                placeholder="আপনার বিকাশ ট্রানজিশন আইডি দিন"
                required
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="pt-5 font-bold">
            <h1>Order Summary</h1>
            <div className="flex justify-between mt-2">
              <p>Items Total</p>
              <div className="flex items-center gap-1">
                <TbCurrencyTaka />
                <span>৯৯ টাকা কোর্স</span>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Total Payment</p>
              <div className="flex items-center gap-1">
                <TbCurrencyTaka />
                <span>৯৯ টাকা</span>
              </div>
            </div>
          </div>

          <button type="submit" className="py-3 w-full bg-[#F57224] hover:bg-[#DADADA] duration-300 text-white rounded mt-4">
            Payment Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
