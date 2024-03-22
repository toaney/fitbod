// "use client" 

import fetchExercises from "@/unused_test_code/fetchExercises/fetchExercises"
import type { Exercise } from "@/types/Exercise"
import { useState, useEffect } from "react"
import ExerciseList from "./components/ExerciseList/ExerciseList"

const IndexPage = async () => {
  const res = await fetch("https://storage.googleapis.com/fitbod-web-internal/exercises.json");
  const exercises: Exercise[] = await res.json();
  // const [exerciseList, setExerciseList] = useState<Exercise[]>([])

  // const exercises: any = fetchExercises()

  // useEffect(() => {
  //   async function getExercises() {
  //     // const exercises = await fetchExercises()
  //     const res = await fetch("https://storage.googleapis.com/fitbod-web-internal/exercises.json", {
  //       mode: 'no-cors',
  //       // method: "get",
  //       headers: {
  //            "Content-Type": "application/json"
  //       },
  //       // body: JSON.stringify(ob)
  //     });
  //     const exercises: Exercise[] = await res.json();
  //     if (exercises?.length) setExerciseList(exercises)
  //   }

  //   getExercises()
  // }, [])

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