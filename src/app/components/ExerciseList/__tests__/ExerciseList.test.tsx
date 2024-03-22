import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ExerciseList from '../ExerciseList'

const mockExercisesList = [
  {
    "id": "landmine-press",
    "name": "Landmine Press",
    "muscle": "Shoulders",
    "image": "https://app-media.fitbod.me/v2/208/images/thumb.jpg"
  },
  {
    "id": "push-up",
    "name": "Push Up",
    "muscle": "Chest",
    "image": "https://app-media.fitbod.me/v2/282/images/thumb.jpg"
  },
  {
    "id": "lat-pulldown",
    "name": "Lat Pulldown",
    "muscle": "Back",
    "image": "https://app-media.fitbod.me/v2/211/images/thumb.jpg"
  },
  {
    "id": "dumbbell-fly",
    "name": "Dumbbell Fly",
    "muscle": "Chest",
    "image": "https://app-media.fitbod.me/v2/108/images/thumb.jpg"
  },
  {
    "id": "sit-up",
    "name": "Sit Up",
    "muscle": "Abs",
    "image": "https://app-media.fitbod.me/v2/336/images/thumb.jpg"
  }
]

describe('ExerciseList', () => {
  it('should render a list with the correct number of items', () => {
    render(<ExerciseList exercises={mockExercisesList} />)
    const exerciseArray = screen.getAllByRole('listitem')
    expect(exerciseArray.length).toBe(5)
  })
})