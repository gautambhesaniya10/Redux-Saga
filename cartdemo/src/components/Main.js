import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, emptyCart, removeFromCart } from '../redux/action';
import { productList, searchProduct } from '../redux/productAction';

function Main() {
    const [inputText, setInputText] = useState("");

    const dispatch = useDispatch();
    const stateData = useSelector(item => item.productData.data);

    const filterData = stateData.filter((el) => {
        if (inputText == "") {
            return el;
                }
        else {
            let res = el.name.toLowerCase() && el.category.toLowerCase() && el.brand.toLowerCase();
            return res.match(inputText.toLowerCase());
        }
    })

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputText(value)
        // dispatch(searchProduct(inputText))
    }

    useEffect(() => {
        dispatch(productList())
    }, [])

    return (
        <div className="Main">
            <div>Hello</div>
            <br />
            <div className='search-text'>
                <input type="text" name='inputText' value={inputText} onChange={inputHandler} />
                {/* <input type="text" name='inputText'  onChange={(e) =>  dispatch(searchProduct(e.target.value))} /> */}
            </div>
            <br />
            <div>
                <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
            </div>
            <br />
            <br />
            <br />
            <div className='product-container'>
                {
                    filterData.map((item) => <div key={item.id} className='product-list'>
                        <img width={"250px"} src={item.photo} />
                        <div>Name     : {item.name}</div>
                        <div>Price    : {item.price}</div>
                        <div>color    : {item.color}</div>
                        <div>Brand    : {item.brand}</div>
                        <div>Category : {item.category}</div>
                        <br />
                        <div>
                            <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
                            <button onClick={() => dispatch(removeFromCart(item.id))} style={{ marginLeft: "10px" }}>Remove To Cart</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
}

export default Main;
