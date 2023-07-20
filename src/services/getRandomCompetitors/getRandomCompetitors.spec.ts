import { Cat } from "../../types/cat"
import { getRandomCompetitors } from "./getRandomCompetitors"

describe("getRandomCompetitors", () => {
  const competitors: Cat[] = [
    {
      url: "http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg",
      id: "MTgwODA3MA",
    },
    {
      url: "http://24.media.tumblr.com/tumblr_m29a9d62C81r2rj8po1_500.jpg",
      id: "tt",
    },
    {
      url: "http://25.media.tumblr.com/tumblr_m4bgd9OXmw1qioo2oo1_500.jpg",
      id: "bmp",
    },
  ]

  it("should return an array of length 2", () => {
    const result = getRandomCompetitors(competitors)
    expect(result.length).toBe(2)
  })

  it("should return valid Competitor objects", () => {
    const result = getRandomCompetitors(competitors)
    expect(
      result.every(
        (Competitor) =>
          typeof Competitor.url === "string" &&
          typeof Competitor.id === "string",
      ),
    ).toBe(true)
  })

  it("should return different results on each call", () => {
    const result1 = getRandomCompetitors(competitors)
    const result2 = getRandomCompetitors(competitors)
    expect(result1).not.toBe(result2)
  })
})
