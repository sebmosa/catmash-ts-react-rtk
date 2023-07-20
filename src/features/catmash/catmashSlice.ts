import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Winner {
  id: string
  url: string
  points: number
}

export interface CatmashState {
  winners: Winner[]
  counter: number
}

const initialState: CatmashState = {
  winners: [],
  counter: 0,
}

const catmashSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    won: (state, action: PayloadAction<Winner>) => {
      const existing = state.winners.find((cat) => cat.id === action.payload.id)
      if (existing) {
        existing.points += 1
      } else {
        state.winners.push({
          id: action.payload.id,
          url: action.payload.url,
          points: 1,
        })
      }
    },
    counted: (state) => {
      state.counter += 1
    },
    reseted: (state) => {
      state.counter = 0
      state.winners = []
    },
  },
})

export const { won, counted, reseted } = catmashSlice.actions

export default catmashSlice.reducer
