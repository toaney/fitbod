import { render, screen } from '@testing-library/react'
import PerformanceHistoryItem from '../PerformanceHistoryItem'

const mockPerformance = {
    "id": "1d7d2a68-f2d8-4c52-9bca-24974e8a4159",
    "time": "2024-03-22T15:17:30.852Z",
    "reps": 18,
    "weight": 12,
    "exerciseId": "landmine-press",
    "estimated1RM": 23
  }

describe('PerformanceHistoryItem', () => {
  it('should render correct labels', () => {
    render(<PerformanceHistoryItem performance={mockPerformance}/>)
    const estimated1RM = screen.getByText('Estimated 1RM:')
    expect(estimated1RM).toBeInTheDocument()
  })
  it('should render correct values', () => {
    render(<PerformanceHistoryItem performance={mockPerformance}/>)
    const performanceValues = screen.getByText('18 x 12 lb')
    expect(performanceValues).toBeInTheDocument()
    const estimated1RMValue = screen.getByText('23 lb')
    expect(estimated1RMValue).toBeInTheDocument()
  })
})