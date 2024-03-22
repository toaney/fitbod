import { render, screen } from '@testing-library/react'
import PerformanceForm from '../PerformanceForm'

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
const mockSetPerformanceList = jest.fn()
const mockExerciseId = "fitbod-landmine-press"

{/* <PerformanceForm performanceList={performanceList} setPerformanceList={setPerformanceList} exerciseId={exerciseId}/> */}
{/* <PerformanceForm performanceList={mockPerformanceList} setPerformanceList={mockSetPerformanceList} exerciseId={mockExerciseId}/> */}

describe('PerformanceForm', () => {
  it('should render form labels', () => {
    render(<PerformanceForm performanceList={mockPerformanceList} setPerformanceList={mockSetPerformanceList} exerciseId={mockExerciseId}/>)
    const repsLabel = screen.getByText('Reps')
    expect(repsLabel).toBeInTheDocument()
    const weightLabel = screen.getByText('Weight')
    expect(weightLabel).toBeInTheDocument()
  })
  it('should render an add button with "add new set" aria-label', () => {
    render(<PerformanceForm performanceList={mockPerformanceList} setPerformanceList={mockSetPerformanceList} exerciseId={mockExerciseId}/>)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute("aria-label", "add new set")
  })
})

// it('should render exercise name', () => {
//   render(<ExerciseItem exercise={mockExercise}/>)
//   const message = screen.getByText('Push Up')
//   expect(message).toBeInTheDocument()
// })

// it('should render exercise muscle', () => {
//   render(<ExerciseItem exercise={mockExercise}/>) 
//   const message = screen.getByText('Chest')
//   expect(message).toBeInTheDocument()
// })

// it('renders an image and has correct alt text', () => {
//   render(<ExerciseItem exercise={mockExercise}/>)
//   const image = screen.getByRole('img')
//   expect(image).toBeInTheDocument()
//   expect(image).toHaveAttribute('alt', "Push Up")
// })

// it('should render a link', () => {
//   render(<ExerciseItem exercise={mockExercise}/>)
//   const link = screen.getByRole('link')
//   expect(link).toBeInTheDocument()
//   expect(link).toHaveAttribute('href', "/exercise?id=push-up&thumb=https%3A%2F%2Fapp-media.fitbod.me%2Fv2%2F282%2Fimages%2Fthumb.jpg&name=Push+Up")
// })