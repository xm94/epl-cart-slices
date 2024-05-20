import { Item } from '@/models/item';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
    cart: Item[];
}

const initialState: CartState = {
    cart: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            state.cart = [...state.cart, action.payload];
        },
        clear: (state) => {
            state.cart = [];
        },
        remove: (state, action) => {
            //find the first matching index of item to be removed
            let index = state.cart.findIndex(item =>
                item.name === action.payload.name
                && item.price === action.payload.price);
            //toSpliced allows the splice operation without modifying the original array
            state.cart = state.cart.toSpliced(index, 1);
        }
    }
});

export const { add, clear, remove } = cartSlice.actions;

export default cartSlice.reducer;
