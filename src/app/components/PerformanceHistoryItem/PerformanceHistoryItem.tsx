import type { Performance } from "@/types/Performance"

type Props = {
  performance: Performance,
}

export default function PerformanceHistoryItem({performance}: Props) {
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
}