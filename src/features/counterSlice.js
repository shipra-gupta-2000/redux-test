import { createSlice } from "@reduxjs/toolkit";
 
export const counterSlice = createSlice({
    name: 'counter',
    initialState : {
        value:0,
    },
    reducers:{
        increment: (prop) => {
            prop.value+=1
        },
        decrement: (prop) => {
            prop.value-=1
        },
        incrementByAmount: (prop,action) => {
            console.log("action",action)
            prop.value += action.payload
        },
    },
})

export const { increment , decrement , incrementByAmount } = counterSlice.actions

export default counterSlice.reducer