import type { Exercise } from "@/types/Exercise"

export default async function fetchExercises() {
  try {
    const res = await fetch("https://storage.googleapis.com/fitbod-web-internal/exercises.json")
    const exercises: Exercise[] = await res.json()
    return exercises
  } catch (err) {
    if (err instanceof Error) console.log(err.message)
    return []
  }
}