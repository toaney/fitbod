import type { Performance } from "@/types/Performance"
import type { PerformanceGroup } from "@/types/Performance"

type Props = {
  performanceList: PerformanceGroup[],
}

export default function PerformanceHistory({performanceList}: Props) {
  return (
    <div>
      <div className="text-base font-bold mt-8 mb-2">Performances:</div>
      {performanceList.map((date: PerformanceGroup) => {
        return (
          <div key={date.id} className="mt-6 text-sm">
            <div className="font-bold">{date.id}</div>
            {/* <div className="font-bold mb-6">03/23/2024</div> */}

            <ul className="md:flex md:flex-wrap md:justify-between">
              {date.data.map((performance : Performance) => {
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
  )
}