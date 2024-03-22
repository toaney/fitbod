import Image from "next/image"
import Link from "next/link"
import type { Exercise } from "@/types/Exercise"

type Props = {
  exerciseName: string | null,
  exerciseImage: string | null,
}

export default function ExerciseHeading({exerciseName, exerciseImage}: Props) {
  return (
    <>
      <h1 className="flex pt-[32px] pb-[48px] justify-center text-[24px]">{exerciseName}</h1>
      <div className="relative w-[150px] h-[150px] ">
        <Image src={exerciseImage ? exerciseImage : ""} priority fill alt={exerciseName ? exerciseName : ""} className="rounded-lg bg-slate-50 object-cover"/>
      </div>
    </>



  )
}