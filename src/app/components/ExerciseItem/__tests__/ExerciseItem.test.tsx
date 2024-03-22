import { render, screen } from '@testing-library/react'
import ExerciseItem from '../ExerciseItem'

const mockExercise = {
  "id": "push-up",
  "name": "Push Up",
  "muscle": "Chest",
  "image": "https://app-media.fitbod.me/v2/282/images/thumb.jpg"
}

describe('ExerciseItem', () => {
  it('should render exercise name', () => {
    render(<ExerciseItem exercise={mockExercise}/>)

    const message = screen.getByText('Push Up')

    expect(message).toBeInTheDocument()
  })

  it('should render exercise muscle', () => {
    render(<ExerciseItem exercise={mockExercise}/>) 

    const message = screen.getByText('Chest')

    expect(message).toBeInTheDocument()
  })

  it('uses renders an image with correct alt text', () => {
    render(<ExerciseItem exercise={mockExercise}/>)

    const image = screen.getByRole('img')

    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', "Push Up")
  })

  it('should render a link', () => {
    render(<ExerciseItem exercise={mockExercise}/>)

    const link = screen.getByRole('link')

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', "/exercise?id=push-up&thumb=https%3A%2F%2Fapp-media.fitbod.me%2Fv2%2F282%2Fimages%2Fthumb.jpg&name=Push+Up")
  })
})