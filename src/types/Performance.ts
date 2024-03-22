export type Performance = {
  id: string,
  time: Date,
  reps: number,
  weight: number,
  exerciseId: string,
  estimated1RM: number,
}

export type PerformanceGroup = {
  id: string,
  data: Performance[]
}