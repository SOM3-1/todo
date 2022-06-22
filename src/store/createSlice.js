import { createSlice,current } from "@reduxjs/toolkit";

const initialState  = {
    todoList: []
};


export const slice = createSlice({
    name: "Todo",
    initialState,
    reducers: {
        add (state, {payload}) {
            console.log(state.todoList, payload)
            const existingList = JSON.parse(JSON.stringify(state.todoList));
           const temp = existingList.filter((value) => value.toLowerCase() === payload.toLowerCase());
            if(!temp.length)
            state.todoList = [payload,...existingList];

        },
        remove(state, {payload}){
         const newArray = current(state.todoList)
         const updatedList = newArray.filter((value, index) =>index !== payload);
         state.todoList = updatedList;
        }
    }
});

export const sliceReducers = slice.actions;