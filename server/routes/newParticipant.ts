import 'dotenv/config'
import { v2 as cloudinary } from 'cloudinary'
import express from 'express'
import { getQuestions } from '../db/question'
import { addParticipant } from '../db/newParticipant'
const router = express.Router()

//server = /api/v1

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

router.post('/page3', async (req, res) => {
  if (!req.body) {
    res.status(400).send('Bad Request: Server side route problem.')
    return
  }

  const { name, question, answer, audioUrl, imageUrl } = req.body.newParticipant

  try {
    const newParticipant = addParticipant({
      name,
      question,
      answer,
      audioUrl,
      imageUrl,
    })
    res.status(200).json({ newParticipant })
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not add new participant')
  }
})

router.get('/page3/signature', (req, res) => {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET as string

  const timestamp = Math.round(new Date().getTime() / 1000)

  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp,
    },
    apiSecret
  )

  res.json({
    signature,
    timestamp,
    cloudName,
    apiKey,
  })
})

export default router
