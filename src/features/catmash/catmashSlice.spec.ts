import catmashReducer, {
  CatmashState,
  won,
  counted,
  reseted,
} from "./catmashSlice.js"

describe("catmash reducer", () => {
  const initialState: CatmashState = {
    winners: [
      {
        url: "http://24.media.tumblr.com/tumblr_m29a9d62C81r2rj8po1_500.jpg",
        id: "tt",
        points: 3,
      },
      {
        url: "http://25.media.tumblr.com/tumblr_m4bgd9OXmw1qioo2oo1_500.jpg",
        id: "bmp",
        points: 2,
      },
      {
        url: "http://24.media.tumblr.com/tumblr_lzxok2e2kX1qgjltdo1_1280.jpg",
        id: "c8a",
        points: 1,
      },
    ],
    counter: 0,
  }

  it("should handle initial state", () => {
    expect(catmashReducer(undefined, { type: "unknown" })).toEqual({
      winners: [],
      counter: 0,
    })
  })

  it("should won", () => {
    const winner = { id: "Qwik", url: "", points: 0 }
    const actual = catmashReducer(initialState, won(winner))
    expect(actual.winners[3].id).toEqual("Qwik")
  })

  it("should handle increment", () => {
    const actual = catmashReducer(initialState, counted())
    expect(actual.counter).toEqual(1)
  })

  it("should be reseted", () => {
    const actual = catmashReducer(initialState, reseted())
    expect(actual.winners.length).toEqual(0)
  })
})
