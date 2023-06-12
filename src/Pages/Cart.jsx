import useCart from "../hooks/Usecart";



const Cart = () => {


    const [cart, refetch] = useCart()
    console.log(cart.length);
    console.log(cart);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            {
                                cart.map(res => <div key={res._id}>
                                    <td>{res.name}</td>
                                    <td>{res.price}</td>
                                    <td>{res.category}</td>

                                </div>)
                            }

                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Cart;