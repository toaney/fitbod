"use client";

import React, {useState, useEffect, useRef} from "react";
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

const ExercisePage = () => {
  const searchParams = useSearchParams();

  const exerciseId : any = searchParams.get("id")? searchParams.get("id") : "";
  const exerciseName : any = searchParams.get("name")? searchParams.get("name") : "";
  const exerciseImage : any = searchParams.get("thumb")? searchParams.get("thumb") : "";
  const [ hasMounted, setHasMounted ] = useState<boolean>(false);
  const [ reps, setReps ] = useState("");
  const [ weight, setWeight ] = useState("");
  const [ performanceList, setPerformanceList ] = useState([]);
  const [ errors, setErrors ] = useState("");
  const inputRef = useRef(null);
  const errorRef = useRef(null);
  // const [ errors, setErrors ] = useState({
  //   repsInput: false,
  //   weightInput: false
  // })  

  //   [{
  //   id: "03/23/2024",
  //   data: [
  //     {
  //       "exerciseId": "lat-pulldown",
  //       "time": "2024-03-19T23:47:08.683Z",
  //       "reps": "10",
  //       "weight": "20",
  //       "estimated1RM": 27
  //     },
  //     {
  //       "exerciseId": "lat-pulldown",
  //       "time": "2024-03-19T23:46:44.474Z",
  //       "reps": "10",
  //       "weight": "60",
  //       "estimated1RM": 80
  //     },
  //     {
  //       "exerciseId": "lat-pulldown",
  //       "time": "2024-03-19T23:45:53.590Z",
  //       "reps": "5",
  //       "weight": "70",
  //       "estimated1RM": 79
  //     },
  //     {
  //       "exerciseId": "lat-pulldown",
  //       "time": "2024-03-19T23:04:32.878Z",
  //       "reps": "12",
  //       "weight": "50",
  //       "estimated1RM": 72
  //     }
  //   ]
  // }, {
  //   id: "03/22/2024",
  //   data: [
  //     {
  //       "exerciseId": "lat-pulldown",
  //       "time": "2024-03-19T23:47:08.683Z",
  //       "reps": "10",
  //       "weight": "20",
  //       "estimated1RM": 27
  //     },
  //     {
  //       "exerciseId": "lat-pulldown",
  //       "time": "2024-03-19T23:46:44.474Z",
  //       "reps": "10",
  //       "weight": "60",
  //       "estimated1RM": 80
  //     },
  //     {
  //       "exerciseId": "lat-pulldown",
  //       "time": "2024-03-19T23:45:53.590Z",
  //       "reps": "5",
  //       "weight": "70",
  //       "estimated1RM": 79
  //     }
  //   ]
  // }]
  


  useEffect (() => {
    setHasMounted(true)
    inputRef.current.focus()
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
  }, [hasMounted])

  function formErrors(){
    let hasErrors = false;
    let newErrors = {}

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
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return mm + "/" + dd + "/" + yyyy;
  }

  function handleSubmit(e){
    e.preventDefault();

    if (!formErrors()){
      let currentDate = getDate();
      let calculatedRM : number = Math.round(weight * (36/ (37 - reps)))
      let newPerformance = {
        id: crypto.randomUUID(),
        exerciseId: exerciseId,
        time: new Date(),
        reps: reps,
        weight: weight,
        estimated1RM: calculatedRM,
      }


      if (performanceList.some(item => item.id === currentDate)) {
        // date id found
        setPerformanceList((currentList : performance[]) => {
          return currentList.map(item => {
            if (item.id === currentDate){
              return {
                ...item, data: [newPerformance, ...item.data]
              }
            } else {
              return item
            }
          })
        })

        setReps("");
        setWeight("");
        setErrors("");

      } else {
        // date id not found
        setPerformanceList((currentList : performance[]) => {
          let newPerformanceGroup = {
            id : currentDate,
            data: [ newPerformance ]
          }
          return [newPerformanceGroup, ...currentList]
        })
    
        setReps("");
        setWeight("");
        setErrors("");
      }
      inputRef.current.focus()
    } else {
      inputRef.current.focus()
    }
  }

  return (
    // <div className="w-full h-full flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="flex pt-[32px] pb-[48px] justify-center text-[24px]">{exerciseName}</h1>
        <div className="relative w-[150px] h-[150px] ">
          <Image src={exerciseImage} priority fill alt={exerciseName} className="rounded-lg bg-slate-50 object-cover"/>
        </div>
        <div className="w-full px-8 md:w-[548px] md:px-0 pb-8">
          <form onSubmit={handleSubmit}>
          <div className="text-base font-bold mt-8 mb-6">Add set:</div>
            {errors && <div id="reps-error" tabIndex={0} role="alert" autoFocus ref={errorRef} className={`text-red-600 text-sm mb-2`}>Please enter values for both input fields</div>}
            <div className="flex flex-row justify-between items-end sm:justify-normal">
              <div className="flex">
                <div>
                  <label htmlFor="reps" className="mr-2 text-sm">Reps</label>
                  <input type="number" value={reps} ref={inputRef} id="reps" onChange={(e) => setReps(e.target.value)} className={`${errors.repsInput ? "border-red-600 ring-red-600 hover:focus:border-red-600 " : "border-black"} border rounded-[12px] h-[35px] w-[72px] px-2`}/>
                </div>
                <div className="ml-4">
                  <label htmlFor="weight" className="mr-2 text-sm">Weight</label>
                  <input type="number" value={weight} id="weight" onChange={(e) => setWeight(e.target.value)} className={`${errors.weightInput ? "border-red-600" : "border-black"} focus-visible:ring-0 border rounded-[12px] h-[35px] w-[72px] px-2`}/>
                </div>
              </div>
              <button className="bg-[#0085BF] h-[35px] w-[42px] rounded-[8px] ml-3 sm:ml-8 pb-[2px] font-[24] font-normal text-white">+</button>
            </div>
          </form>
          <div>
            <div className="text-base font-bold mt-8 mb-2">Performances:</div>
            {performanceList.map(date => {
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
    // </div>
  )
}

export default ExercisePage