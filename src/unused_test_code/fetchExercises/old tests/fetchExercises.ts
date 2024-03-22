import { server } from "@/mocks/server"
import { rest } from "msw"
import fetchExercises from "../fetchExercises"

describe("fetchExercises lib function", () => {
  it("should return the correct number of exercise items", async () => {
    const exercisesArray = await fetchExercises()
    expect(exercisesArray.length).toBe(5)
  })

  it("should return an empty array with an arror", async () => {
    server.use(
      rest.get("https://storage.googleapis.com/fitbod-web-internal/exercises.json", (req, res, ctx) => {
        return res(ctx.status(400))
      })
    )
    const exerciseArray = await fetchExercises()
    expect(exerciseArray.length).toBe(0)
  })
})