/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import {
  ParticipantResponse,
  ParticipantData,
  NewParticipantResponse,
} from '../../models/Participant'
import { AvailableKeys } from '../../models/Keys'
import { Questions } from '../../models/Questions'

//////////////////// GET /api/v1/whaiPiano/:key

export async function getParticipantByKey(
  key: string
): Promise<ParticipantResponse> {
  const response = await request.get(`/api/v1/whaiPiano/${key}`)
  return response.body
}

//////////////////// GET /api/v1/playground/:key

export async function getNewParticipantByKey(
  key: string
): Promise<NewParticipantResponse> {
  const response = await request.get(`/api/v1/playground/${key}`)
  return response.body
}

/////////////////////// PAGE 3 FORM

export async function addParticipant(
  newParticipant: ParticipantData
): Promise<void> {
  const response = await request
    .post('/api/v1/newParticipant')
    .send({ newParticipant })
  return response.body.newParticipant
}

export async function getQuestions(): Promise<Questions> {
  const response = await request.get('/api/v1/newParticipant')
  return response.body.question
}

export async function getAllAvailableKeys(): Promise<AvailableKeys[]> {
  const response = await request.get('/api/v1/newParticipant/availableKeys')
  return response.body.key
}

///////////////////// CLOUDINARY /////////////////

async function getImageSignature() {
  const response = await request.get('/api/v1/newParticipant/signature')

  const { signature, timestamp, cloudName, apiKey } = response.body
  return { signature, timestamp, cloudName, apiKey }
}

export async function uploadImage(image: File) {
  const { signature, timestamp, cloudName, apiKey } = await getImageSignature()

  const formData = new FormData()
  formData.append('file', image)
  formData.append('signature', signature)
  formData.append('timestamp', timestamp)
  formData.append('cloud_name', cloudName)
  formData.append('api_key', apiKey)

  const response = await request
    .post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`)
    .send(formData)
  const data = response.body
  return data.url
}

export async function uploadAudio(audio: File) {
  const { signature, timestamp, cloudName, apiKey } = await getImageSignature()

  const formData = new FormData()
  formData.append('file', audio)
  formData.append('signature', signature)
  formData.append('timestamp', timestamp)
  formData.append('cloud_name', cloudName)
  formData.append('api_key', apiKey)

  const response = await request
    .post(`https://api.cloudinary.com/v1_1/${cloudName}/video/upload`)
    .send(formData)
  const data = response.body
  return data.url
}
