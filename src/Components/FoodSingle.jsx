import { useContext } from "react";
import { FaDollarSign } from "react-icons/fa";
import { Link, } from "react-router-dom";
import { ContexM } from "../Authentication/AuProvider";

// tost 
import Swal from 'sweetalert2'
import useCart from "../hooks/Usecart";

const FoodSingle = ({ data }) => {
    // user from the contex 
    const { user } = useContext(ContexM)

    // use cart 
    const [, refetch] = useCart()

    // navigating user in to the login


    const disableBtn = true




    // this is teh get the item from the buy btn 
    const addCart = (item) => {

        const product = { name: item.name, price: item.price, category: item.category, email: user.email, id: item.id, image: item.image, recipy: item.recipy }



        fetch(`http://localhost:5000/carts`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {


                if (data.insertedId) {
                    // alert("add to cart done")
                    // here is teh animated tost for add to cart
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `product add to cart done`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                refetch()
            })




    }

    return (
        <div className="">


            <div className="border-2 cursor-pointer hover:border-[#340e8d] w-[250px] h-[300px]">


                {/* card img */}

                <div className="relative">
                    {/* <Link to={ `/FoodCheckout/${data._id}`} className="text-center"> */}
                    <Link to={`/FoodCheckout/${data._id}`} className="cursor-zoom-in">
                        <img className=" px-2 w-full pt-2 h-[160px]" src={data.image} alt="" />

                    </Link>
                    <div className=" top-0 ml-38 py-1 px-1 mt-2  bg-[#340e8d] text-white absolute">
                        <p className="flex items-center text-sm "><FaDollarSign></FaDollarSign> {data.price} টাকা</p>
                    </div>

                </div>


                {/* here is teh product detailes */}
                <div className="pt-2 pl-2">
                    <div className="text-center">

                        <p className="pb-2">name: {data.name}</p>
                        <p className="pb-2 flex items-center justify-center">price:<FaDollarSign className="text-sm"></FaDollarSign>{data.price} <span className="text-red-400 ml-2">টাকা</span></p>

                    </div>

                    <div className="text-center">

                        <button disabled={user ? "" : disableBtn} onClick={() => addCart(data)} className="btn hover:text-[#340e8d]  hover:bg-[#db87f0] ">Book now</button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default FoodSingle;