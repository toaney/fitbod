import { rest } from 'msw'

export const handlers = [
  rest.get('https://storage.googleapis.com/fitbod-web-internal/exercises.json', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
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
      ]),
    )
  }),
]
