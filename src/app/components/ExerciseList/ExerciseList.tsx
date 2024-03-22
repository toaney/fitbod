import ExerciseItem from "../ExerciseItem/ExerciseItem"
import type { Exercise } from "@/types/Exercise"

type Props = {
  exercises: Exercise[],
}

export default function ExerciseList({exercises}: Props) {
  return (
    <ul className="md:flex md:flex-wrap md:justify-between">
      {exercises.map((exercise: Exercise) => (
        <ExerciseItem exercise={exercise} key={exercise.id} />
      ))}
    </ul>
  )
}