import { render, screen } from '@testing-library/react'
import PerformanceHistory from '../PerformanceHistory'

const mockPerformanceList = [
  {
      "id": "03/22/2024",
      "data": [
          {
              "id": "1d7d2a68-f2d8-4c52-9bca-24974e8a4159",
              "time": "2024-03-22T15:17:30.852Z",
              "reps": 18,
              "weight": 12,
              "exerciseId": "landmine-press",
              "estimated1RM": 23
          },
          {
              "id": "793f613e-00be-4871-a540-20467fdfa488",
              "time": "2024-03-22T15:14:38.964Z",
              "reps": 12,
              "weight": 12,
              "exerciseId": "landmine-press",
              "estimated1RM": 17
          }
      ]
  },
  {
      "id": "03/20/2024",
      "data": [
          {
              "id": "edee3002-926a-4dea-b032-5851bbfa796c",
              "time": "2024-03-20T19:14:49.534Z",
              "reps": 10,
              "weight": 10,
              "exerciseId": "landmine-press",
              "estimated1RM": 13
          }
      ]
  }
]

describe('PerformanceHistory', () => {
  it('should render correct date headings', () => {
    render(<PerformanceHistory performanceList={mockPerformanceList}/>)
    const march22 = screen.getByText('03/22/2024')
    expect(march22).toBeInTheDocument()
    const march20 = screen.getByText('03/20/2024')
    expect(march20).toBeInTheDocument()
  })
})