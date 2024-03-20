"use client";

import React, {useState, useEffect, useRef, Suspense} from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

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
  const [ reps, setReps ] = useState<number | null>(null);
  const [ weight, setWeight ] = useState<number | null>(null);
  const [ performanceList, setPerformanceList ] = useState<performanceGroup[]>([]);
  const [ errors, setErrors ] = useState<formErrors | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect (() => {
    setHasMounted(true)
    if (inputRef.current !== null){
      inputRef.current.focus()
    }
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

  function formErrors(){
    let hasErrors = false;
    let newErrors = {
      repsInput: false,
      weightInput: false
    }

    if (!reps) {
      newErrors.repsInput = true;
      hasErrors = true;
    }

    if (!weight) {
      newErrors.weightInput = true;
      hasErrors = true
    }
    
    setErrors(newErrors);
    return hasErrors;
  }

  function getDate(){
    const today = new Date();
    const yyyy : string | number = today.getFullYear();
    let mm : string | number = today.getMonth() + 1;
    let dd : string | number = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return mm + "/" + dd + "/" + yyyy;
  }

  function handleSubmit(e : any){
    e.preventDefault();

    if (!formErrors()){
      let currentDate = getDate();
      let calculatedRM : number = weight && reps ? Math.round(weight * (36/ (37 - reps))) : 0;
      let newPerformance : performance = {
        id: crypto.randomUUID(),
        time: new Date(),
        reps: reps || 0,
        weight: weight || 0,
        exerciseId: exerciseId || "",
        estimated1RM: calculatedRM,
      }

      if (performanceList.some((item: performanceGroup) => item.id === currentDate)) {
        // date id found
        setPerformanceList((currentList : performanceGroup[]) => {
          return currentList.map((item: performanceGroup) => {
            if (item.id === currentDate){
              return {
                ...item, data: [newPerformance, ...item.data]
              }
            } else {
              return item
            }
          })
        })

        setReps(null);
        setWeight(null);
        setErrors(null);

      } else {
        // date id not found
        setPerformanceList((currentList: performanceGroup[]) => {
          let newPerformanceGroup = {
            id : currentDate,
            data: [ newPerformance ]
          }
          return [newPerformanceGroup, ...currentList]
        })
    
        setReps(null);
        setWeight(null);
        setErrors(null);
      }
      if (inputRef.current !== null){
        inputRef.current.focus()
      }
    } else {
      if (inputRef.current !== null){
        inputRef.current.focus()
      }
    }
  }

  return (
    <Suspense>
      <div className="flex flex-col items-center">
        <h1 className="flex pt-[32px] pb-[48px] justify-center text-[24px]">{exerciseName}</h1>
        <div className="relative w-[150px] h-[150px] ">
          <Image src={exerciseImage ? exerciseImage : ""} priority fill alt={exerciseName ? exerciseName : ""} className="rounded-lg bg-slate-50 object-cover"/>
        </div>
        <div className="w-full px-8 md:w-[548px] md:px-0 pb-8">
          <form onSubmit={handleSubmit}>
          <div className="text-base font-bold mt-8 mb-6">Add set:</div>
            {errors && <div id="reps-error" tabIndex={0} role="alert" autoFocus className={`text-red-600 text-sm mb-2`}>Please enter values for both input fields</div>}
            <div className="flex flex-row justify-between items-end sm:justify-normal">
              <div className="flex">
                <div>
                  <label htmlFor="reps" className="mr-2 text-sm">Reps</label>
                  <input type="number" value={reps ? reps : ""} ref={inputRef} id="reps" onChange={(e) => setReps(e.target.valueAsNumber)} className={`${errors ? errors.repsInput ? "border-red-600" : "border-black" : ""} border rounded-[12px] h-[35px] w-[72px] px-2`}/>
                </div>
                <div className="ml-4">
                  <label htmlFor="weight" className="mr-2 text-sm">Weight</label>
                  <input type="number" value={weight ? weight : ""} id="weight" onChange={(e) => setWeight(e.target.valueAsNumber)} className={`${errors ? errors.weightInput ? "border-red-600" : "border-black": ""} border rounded-[12px] h-[35px] w-[72px] px-2`}/>
                </div>
              </div>
              <button className="bg-[#0085BF] h-[35px] w-[42px] rounded-[8px] ml-3 sm:ml-8 pb-[2px] font-[24] font-normal text-white">+</button>
            </div>
          </form>
          <div>
            <div className="text-base font-bold mt-8 mb-2">Performances:</div>
            {performanceList.map((date: performanceGroup) => {
              return (
                <div key={date.id} className="mt-6 text-sm">
                  <div className="font-bold">{date.id}</div>
                  {/* <div className="font-bold mb-6">03/23/2024</div> */}

                  <ul className="md:flex md:flex-wrap md:justify-between">
                    {date.data.map((performance : performance) => {
                      return (
                        <li key={performance.id} className="flex md:w-[250px] justify-between mt-6">
                          <div>
                            {performance.reps} x {performance.weight} lb
                          </div>
                          <div>
                            <span className="font-bold">Estimated 1RM: </span> 
                            {performance.estimated1RM} lb
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default ExercisePage