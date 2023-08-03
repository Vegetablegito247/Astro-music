import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalItem: 0,
  totalPrice:0
}

const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

    addProduct:(state, action) =>{
        state.items.push(action.payload)
        state.totalItem++
        state.totalPrice = state.totalPrice + action.payload.prdPrice
    },

    delProduct:(state, action) =>{
        state.items = state.items.filter((res) => res.id !== action.payload.id)
        state.totalItem--
        state.totalPrice = state.totalPrice - action.payload.prdPrice

    }, 
   
  },
})

// Action creators are generated for each case reducer function
export const { addProduct, delProduct, increment, decrement } = ProductSlice.actions

export default ProductSlice.reducer 