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
    render(
        <ExerciseList exercises={mockExercisesList} />
    ) // ARRANGE

    //ACT
    const exerciseArray = screen.getAllByRole('listitem')

    expect(exerciseArray.length).toBe(5)// ASSERT
  })



  // it('should render exercise name', () => {
  //   render(<ExerciseItem exercise={mockExercise}/>) // ARRANGE

  //   //ACT
  //   const message = screen.getByText('Push Up')

  //   expect(message).toBeInTheDocument()// ASSERT
  // })

  // it('should render exercise muscle', () => {
  //   render(<ExerciseItem exercise={mockExercise}/>) // ARRANGE

  //   //ACT
  //   const message = screen.getByText('Chest')

  //   expect(message).toBeInTheDocument()// ASSERT
  // })

  // it('uses renders an image with correct alt text', () => {
  //   render(<ExerciseItem exercise={mockExercise}/>)

  //   // const image = screen.getByAltText('Push Up');

  //   const image = screen.getByRole('img')

  //   expect(image).toBeInTheDocument()
  //   expect(image).toHaveAttribute('alt', "Push Up")
  // })

  // it('should render a link', () => {
  //   render(<ExerciseItem exercise={mockExercise}/>)

  //   // const image = screen.getByAltText('Push Up');

  //   const link = screen.getByRole('link')

  //   expect(link).toBeInTheDocument()
  //   expect(link).toHaveAttribute('href', "/exercise?id=push-up&thumb=https%3A%2F%2Fapp-media.fitbod.me%2Fv2%2F282%2Fimages%2Fthumb.jpg&name=Push+Up")
  // })
})