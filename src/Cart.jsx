import Nav from "./Nav"
import './Cart.css'

const Cart = () => {
    return (
        <div>
            <Nav />
            <div className="cart-background">
                <h2>Cart</h2>
                <table>
                    <tbody>
                        <td>
                            <tr className="card cart-items">
                                <img src='#' />
                                <p>Description</p>
                            </tr>
                        </td>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Cart
