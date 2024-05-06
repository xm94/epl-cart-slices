//import Counter from '@/component/Counter';
import type { NextPage } from 'next';
import styles from './button.module.css';
import { Item } from '@/models/item';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store'
import { add } from '@/redux/cartSlice';
import Link from 'next/link';

const StorefrontPage: NextPage = () => {


    let items: Item[] = [
        { name: "Water", price: 5 },
        { name: "Eggs", price: 6 },
        { name: "Pens", price: 3 },
        { name: "Ramen", price: 2 }
    ]

    const shoppingCart = useSelector((state: RootState) => state.cart.cart);
    const dispatch = useDispatch();



    return (
        <div>
            <h1>Welcome to the Counter Page</h1>
            <h2>
                {shoppingCart.length}
            </h2>
            <Link href='cart'>Cart</Link>

            <p>This is a simple example of integrating Redux with a counter component in Next.js.</p>
            {
                items.map((value: Item, index: number) => (
                    <div key={index}>
                        <br></br>
                        <h3 style={{paddingBottom:"5px"}}>{value.name} ${value.price}</h3>
                        <button onClick={() => dispatch(add(value))}>Add to Cart</button>
                    </div>
                ))
            }

        </div>
    );
};

export default StorefrontPage;
