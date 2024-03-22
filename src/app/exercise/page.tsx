"use client";

import React, {useState, useEffect} from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import ExerciseHeading from "../components/ExerciseHeading/ExerciseHeading";
import PerformanceForm from "../components/PerformanceForm/PerformanceForm";
import PerformanceHistory from "../components/PerformanceHistory/PerformanceHistory";

interface performance {
  id: string,
  time: Date,
  reps: number,
  weight: number,
  exerciseId: string,
  estimated1RM: number,
}

interface performanceGroup {
  id: string,
  data: performance[]
}

interface formErrors {
  repsInput: boolean,
  weightInput: boolean
}

const ExercisePage = () => {
  const searchParams = useSearchParams();

  const exerciseId : string | null = searchParams.get("id")? searchParams.get("id") : "";
  const exerciseName : string | null = searchParams.get("name")? searchParams.get("name") : "";
  const exerciseImage : string | null = searchParams.get("thumb")? searchParams.get("thumb") : "";
  const [ hasMounted, setHasMounted ] = useState<boolean>(false);
  const [ performanceList, setPerformanceList ] = useState<performanceGroup[]>([]);


  useEffect (() => {
    setHasMounted(true)
    // if (inputRef.current !== null){
    //   inputRef.current.focus()
    // }
  }, [])

  useEffect (() => {
    if (hasMounted){
      localStorage.setItem(`fitbod-${exerciseId}`, JSON.stringify(performanceList))
    }
  }, [performanceList])

  useEffect(() => {
    if (hasMounted){
      setPerformanceList(localStorage.getItem(`fitbod-${exerciseId}`) ? JSON.parse(localStorage.getItem(`fitbod-${exerciseId}`) || "{}") : [])
    }
  }, [hasMounted, exerciseId])

  

  return (
    // <Suspense>
      <div className="flex flex-col items-center">

        <ExerciseHeading exerciseName={exerciseName} exerciseImage={exerciseImage}/>


        
        <div className="w-full px-8 md:w-[548px] md:px-0 pb-8">


          <PerformanceForm performanceList={performanceList} setPerformanceList={setPerformanceList} exerciseId={exerciseId}/>




          <PerformanceHistory performanceList={performanceList}/>




        </div>
      </div>
    // </Suspense>
  )
}

export default ExercisePage