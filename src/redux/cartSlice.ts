import { Item } from '@/models/item';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
    cart: Item[];
}

const initialState: CartState = {
    cart:[]
};

const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        add: (state, action) => {
            state.cart = [...state.cart,action.payload];
        },
        clear: (state) => {
            state.cart = [];
        },
        remove: (state,action) =>{
            console.log(action.payload);
            let index = state.cart.findIndex(item => item.name === action.payload.name && item.price === action.payload.price);
            console.log(index);
            state.cart.splice(index,1);
            console.log(state.cart);
        }
    }
});

export const { add, clear, remove } = cartSlice.actions;

export default cartSlice.reducer;
