import { formatDate } from "../helper"

describe("helpers", () => {
  describe("formatDate", () => {
    it("should return correctly formatted output", () => {
      const input = "2023/05/18"

      const result = formatDate(input)
      const expected = "18.05.2023"

      expect(result).toEqual(expected)
    })
  })
})
