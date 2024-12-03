import {createSlice, configureStore, PayloadAction} from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState: CounterState = {value: 0}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: state => { state.value++ },
    del: state => { state.value-- },
    amount: (state, action: PayloadAction<number>) => { state.value += action.payload}
  }
})

export const {add, del, amount} = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export const store = configureStore({
  reducer: { counter: counterSlice.reducer }
})


export default counterSlice.reducer

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch