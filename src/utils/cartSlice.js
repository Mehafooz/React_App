import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name:"cart",
        initialState:{
            items:[]
        },
        reducers:{
            //here in the reducers we will write the
            //action and reducer function for that action

            addItem:(state,action)=>{
                //here state is refer to initial state 
                state.items.push(action.payload)
                // when we are trying to add item then we will
                // pass. the item write that is the payload
                // we need to add it in the array


            },
            removeItem:(state,action)=>{
                state.items.pop()
                //currently im poping out the last one,
                //what we can do is from the actions we wil get the 
                //payload and search it in the search and remove it
            },
            clearAllItems:(state)=>{
                state.items.length=0
                //here we dont need the action bcz 
                // as we are clearing the cart we dont need
                // any payload
            }

        }

    }
)

export default cartSlice.reducer;

export const {addItem,clearAllItems,removeItem}= cartSlice.actions

//here why we are doing like this is bcz the createSlice will 
//return the object to the cartSlice with redycer and actions
// so that we export like this
