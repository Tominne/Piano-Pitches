import express from 'express'
import { getQuestions } from '../db/question'
const router = express.Router()

//server = /api/v1

//PAGE 3 SERVER SIDE ROUTES FUNCTIONS HERE
router.get('/page3', async (req, res) => {
  try {
    const questions = await getQuestions()
    const question = questions[Math.floor(Math.random() * questions.length)]
    //console.log(question.question)
    res.json({ question })
  } catch (error) {
    console.error('Error fetching participant by key:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})
export default router

// export default function getRandomColour() {
//   const letters = '0123456789ABCDEF'
//   let colour = '#'
//   for (let i = 0; i < 6; i++) {
//     colour += letters[Math.floor(Math.random() * 16)]
//   }
//   return colour
// }
