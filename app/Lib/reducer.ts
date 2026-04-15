import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    isLoggedin: boolean,
    token: string,
    role: string,
    profile: any,
}

const initialState: CounterState = {
    profile: {},
    isLoggedin: false,
    role: '',
    token: '',
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        dispatchProfile: (state, action: PayloadAction<CounterState['profile']>) => {
            state.profile = action.payload
        },
        dispatchRole: (state, action: PayloadAction<CounterState['role']>) => {
            state.role = action.payload
        },
        dispatchToken: (state, action: PayloadAction<CounterState['token']>) => {
            state.token = action.payload
        },
        dispatchLoggedin: (state, action: PayloadAction<CounterState['isLoggedin']>) => {
            state.isLoggedin = action.payload
        },
    },
})

export const { dispatchLoggedin, dispatchProfile, dispatchRole, dispatchToken} = counterSlice.actions

export default counterSlice.reducer