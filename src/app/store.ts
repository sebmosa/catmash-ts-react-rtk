import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import catmashReducer from "../features/catmash/catmashSlice"

export const store = configureStore({
  reducer: {
    winnersList: catmashReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
