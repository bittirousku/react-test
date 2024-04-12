import { Story, storySorter } from "../storyHelper"

describe("storySorter", () => {
  it("should sort stories by id correctly", () => {
    const stories = [
      { id: 52, text: "cbvb" },
      { id: 1, text: "sdfsd" },
      { id: 23, text: "cbvb" },
    ] as Story[]

    const expected = [
      { id: 1, text: "sdfsd" },
      { id: 23, text: "cbvb" },
      { id: 52, text: "cbvb" },
    ] as Story[]

    const result = stories.sort(storySorter)

    expect(result).toEqual(expected)
  })
})
