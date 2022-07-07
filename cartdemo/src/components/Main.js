import { useDispatch ,useSelector } from 'react-redux';
import { addToCart , emptyCart, removeFromCart } from '../redux/action';
import { productList } from '../redux/productAction';

function Main() {
    const dispatch = useDispatch();
    const stateData = useSelector(state => state);
    console.log("stateData" , stateData);
    const product = {
        name: "Iphone",
        type: "mobile",
        price: "50000",
        color: "Red"
    }
    return (
        <div className="Main">
            <div>Hello</div>
            <br />
            <br />
            <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
            <br />
            <br />
            <div>
                <button onClick={() => dispatch(removeFromCart())}>Remove from Cart</button>
            </div>
            <br />
            <br />
            <div>
                <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
            </div>
            <br />
            <br />
            <div>
                <button onClick={() => dispatch(productList())}>Product List</button>
            </div>
        </div>
    );
}

export default Main;
