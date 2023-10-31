import { createSlice } from '@reduxjs/toolkit'
import * as XLSX from 'xlsx'
const initialState = {
    key: null
}
export const keySlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setKey: (state, action) => {
            state.key = action.payload
        }
    }
})
export const { setKey } = keySlice.actions
export default keySlice.reducer
