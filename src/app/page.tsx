import type { Exercise } from "@/types/Exercise"
import ExerciseList from "./components/ExerciseList/ExerciseList"

const IndexPage = async () => {
  const res = await fetch("https://storage.googleapis.com/fitbod-web-internal/exercises.json");
  const exercises: Exercise[] = await res.json();

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="md:w-[722px]">
        <h1 className="flex pt-[32px] pb-[48px] justify-center text-[24px]">Top Exercises</h1>
        <ExerciseList exercises={exercises} />
      </div>
    </div>
  )
}

export default IndexPage;