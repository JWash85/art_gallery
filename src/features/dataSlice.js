/*import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    objectId: 0,
    apiData: []
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        increment: (state) => {
            return { objectId: state.objectId + 1 }
        },
        decrement: (state) => {
            return { objectId: state.objectId - 1 }
        },
        incrementByAmount: (state, action) => {
            return { objectId: state.objectId + action.payload }
        }
    }
})
export const fetchData = () => {
    const dataThunk = async (dispatch, getState) => {
        const response = await fetch(URL)
        const resData = await response.json()
        console.log(resData)
        dispatch(setData(resData))
    }
    return dataThunk
}

export const { increment, decrement, incrementByAmount } = dataSlice.actions

export default dataSlice.reducer*/