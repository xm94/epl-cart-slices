//import Counter from '@/component/Counter';
import type { NextPage } from 'next';
import styles from './button.module.css';
import { Item } from '@/models/item';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store'
import { clear, remove } from '@/redux/cartSlice';
import Link from 'next/link';

const CartPage: NextPage = () => {


    const shoppingCart = useSelector((state: RootState) => state.cart.cart);
    const dispatch = useDispatch();



    return (
        <div>
            <h1>Welcome to the Counter Page</h1>
            <h2>
                {shoppingCart.length}
            </h2>
            <Link href='storefront'>link</Link>
            <p>This is a simple example of integrating Redux with a counter component in Next.js.</p>
            {
                shoppingCart.map((value: Item, index: number) => (
                    <div key={index}>
                        <br></br>
                        <h3 style={{ paddingBottom: "5px" }}>{value.name} ${value.price}</h3>
                        <button onClick={() => dispatch(remove(value))}>Remove from Cart</button>
                    </div>
                ))
            }
            <br></br>
            { shoppingCart!=null && shoppingCart.length>0 ? <button onClick={() => dispatch(clear())}>Clear Cart</button> : <></>}
            
        </div>
    );
};

export default CartPage;
