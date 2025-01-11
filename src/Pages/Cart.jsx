import useCart from "../hooks/Usecart";


//icons
import { RxCross1 } from "react-icons/rx";
import { FcViewDetails } from "react-icons/fc";
import Swal from "sweetalert2";

// cons
import { TbCurrencyTaka } from "react-icons/tb"; //// cons
// cons

import '../ExtraCss/event.css'

const Cart = () => {



    const [cart, refetch] = useCart()


    // here is the delete method
    const handleDeleteCart = (id) => {
        fetch(`https://school-server-main-cgaqorflu-mahedinir34678gmailcoms-projects.vercel.app/cartDelete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(info => {

                if (info.deletedCount > 0) {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'remove from cart successfully',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    refetch()

                }

            })
    }

    // total price


    const total = cart.reduce((sum, item) => item.price + sum, 0)

    const final = parseFloat(total).toFixed(2)




    return (
        <div className="py-4 w-full h-screen">
            <div className="ml-40 mt-10">

                <div className="flex gap-40">
                    <h1 className=" flex items-center gap-2 text-2xl pb-2 text-gray-500">মোট :<span className="  text-red-500 flex items-center font-semibold font-mono pr-2 ">
                        <TbCurrencyTaka></TbCurrencyTaka>
                        {final}
                    </span> টাকা</h1>

                    <button className="" id="btn2">pay</button>

                </div>
                {/* ends */}
                <div className="flex">
                    <div className="overflow-x-auto border-2 py-2  mt-2  ">
                        <table className="  table">
                            <tbody className="w-11/12 mx-auto">
                                {/* row 1 */}


                                <tr className="py-2">

                                    {/* {
                                cart.map((res, index) => <tr key={res._id} className="">{index + 1}</tr>)

                            },
                            */}

                                    {
                                        cart.map(data => <tr key={data._id}>


                                            <td className="">
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={data.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold"></div>
                                                        <div className="text-sm opacity-90">{data.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-green-800">{data.category}
                                                <br />

                                            </td>
                                            <td className=" text-lg text-red-500"><span className="text-green-500">Price :</span> $ {data.price}</td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs hover:text-white hover:bg-gray-400 text-2xl "><FcViewDetails /></button>
                                            </th>

                                            <th>
                                                <button onClick={() => handleDeleteCart(data._id)} className=" font-bold btn text-lg btn-ghost btn-xs"> <span><RxCross1></RxCross1></span> </button>
                                            </th>
                                        </tr>)
                                    }
                                </tr>



                            </tbody>


                        </table>
                    </div>
                    <div className="w-1/2 ml-10 -mt-20 ">
                        <div className="p-4">

                            <iframe className="mx-auto rounded-md" width="560" height="315" src="https://www.youtube.com/embed/HFzoi7SKLyo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className=" border-2 py-3 px-2 rounded-md pl-16">
                            <p className="text-lg  font-bold">কিভাবে একটি পণ্য ফর্ম কিনতে paren video ta dekhe nen</p>

                            <div className="mt-5">
                                <p className="text-lg">Ai khen thake ponno kiner sobodha</p>
                                <p className="py-2">কিভাবে একটি পণ্য ফর্ম কিনতে paren video ta dekhe nen</p>
                                <p className="py-2">কিভাবে একটি পণ্য ফর্ম কিনতে paren video ta dekhe nen</p>
                                <p className="py-2"> কিভাবে একটি পণ্য ফর্ম কিনতে paren video ta dekhe nen কিভাবে একটি পণ্য ফর্ম কিনতে paren video ta dekhe nen</p>

                            </div>

                        </div>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;