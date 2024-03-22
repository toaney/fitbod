import type { Performance } from "@/types/Performance"
import type { PerformanceGroup } from "@/types/Performance"
import PerformanceHistoryItem from "../PerformanceHistoryItem/PerformanceHistoryItem"

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
            <ul className="md:flex md:flex-wrap md:justify-between">
              {date.data.map((performance : Performance) => {
                return (
                  <PerformanceHistoryItem key={performance.id} performance={performance}/>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}