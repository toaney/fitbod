import React, {useState, useRef} from "react";
import Image from "next/image"
import Link from "next/link"
import type { PerformanceGroup } from "@/types/Performance"
import type { PeformanceFormErrors } from "@/types/PerformanceFormErrors"

type Props = {
  performanceList: PerformanceGroup[],
  setPerformanceList: React.Dispatch<React.SetStateAction<PerformanceGroup[]>>,
  exerciseId: string | null,
}

export default function PerformanceForm({performanceList, setPerformanceList, exerciseId}: Props) {
  const [ reps, setReps ] = useState<number | null>(null);
  const [ weight, setWeight ] = useState<number | null>(null);
  const [ errors, setErrors ] = useState<PeformanceFormErrors | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);


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
      let newPerformance = {
        id: crypto.randomUUID(),
        time: new Date(),
        reps: reps || 0,
        weight: weight || 0,
        exerciseId: exerciseId || "",
        estimated1RM: calculatedRM,
      }

      if (performanceList.some((item: PerformanceGroup) => item.id === currentDate)) {
        // date id found
        setPerformanceList((currentList : PerformanceGroup[]) => {
          return currentList.map((item: PerformanceGroup) => {
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
        setPerformanceList((currentList: PerformanceGroup[]) => {
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
    <>          
    <form onSubmit={handleSubmit}>
      <div className="text-base font-bold mt-8 mb-6">Add set:</div>
      {errors && <div id="reps-error" tabIndex={0} role="alert" autoFocus className={`text-red-600 text-sm mb-2`}>Please enter values for both input fields</div>}
      <div className="flex flex-row justify-between items-end sm:justify-normal">
        <div className="flex">
          <div>
            <label htmlFor="reps" className="mr-2 text-sm">Reps</label>
            <input type="number" value={reps ? reps : ""} ref={inputRef} autoFocus id="reps" onChange={(e) => setReps(e.target.valueAsNumber)} className={`${errors ? errors.repsInput ? "border-red-600" : "border-black" : ""} border rounded-[12px] h-[35px] w-[72px] px-2`}/>
          </div>
          <div className="ml-4">
            <label htmlFor="weight" className="mr-2 text-sm">Weight</label>
            <input type="number" value={weight ? weight : ""} id="weight" onChange={(e) => setWeight(e.target.valueAsNumber)} className={`${errors ? errors.weightInput ? "border-red-600" : "border-black": ""} border rounded-[12px] h-[35px] w-[72px] px-2`}/>
          </div>
        </div>
        <button className="bg-[#0085BF] h-[35px] w-[42px] rounded-[8px] ml-3 sm:ml-8 pb-[2px] font-[24] font-normal text-white">+</button>
      </div>
    </form>
    </>
  )
}