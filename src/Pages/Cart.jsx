import useCart from "../hooks/Usecart";



const Cart = () => {


    const [cart] = useCart()
    console.log(cart.length);
    console.log(cart);

    return (
        <div>


            {
                cart.map(res => <div key={res._id}>

                    m

                </div>)
            }

        </div>
    );
};

export default Cart;