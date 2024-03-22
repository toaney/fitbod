import { render, screen } from '@testing-library/react'
import ExerciseHeading from '../ExerciseHeading'

const mockExerciseName = "Push Up"
const mockExerciseImage = "https://app-media.fitbod.me/v2/282/images/thumb.jpg"

describe('ExerciseHeading', () => {
  it('should render exercise name', () => {
    render(<ExerciseHeading exerciseName={mockExerciseName} exerciseImage={mockExerciseImage}/>)
    const message = screen.getByText('Push Up')
    expect(message).toBeInTheDocument()
  })

  it('renders an image and has correct alt text', () => {
    render(<ExerciseHeading exerciseName={mockExerciseName} exerciseImage={mockExerciseImage}/>)
    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', "Push Up")
  })
})