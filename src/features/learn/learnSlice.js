import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    src:"",
}

const learnSlice = createSlice ({
    name: "learn",
    initialState,
    reducers: {
        setLearnImg: (state,action) => {
            state.src = action.payload;
        }
    }
})

export const { setLearnImg } = learnSlice.actions;

export const selectLearnImg = (state) => state.learn.src;

export default learnSlice.reducer;