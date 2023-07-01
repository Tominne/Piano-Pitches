exports.seed = async function (knex) {
  await knex('newParticipants').del()
  await knex('newParticipants').insert([
    {
      // leave blank - for null purposes
      id: 1,
      name: '',
      key: '',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 2,
      name: '',
      key: 'C2',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 3,
      name: '',
      key: 'C#2',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 4,
      name: '',
      key: 'D2',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 5,
      name: '',
      key: 'D#2',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 6,
      name: '',
      key: 'E2',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 7,
      name: '',
      key: 'F2',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 8,
      name: '',
      key: 'F#2',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 9,
      name: '',
      key: 'G2',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 10,
      name: '',
      key: 'G#2',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 11,
      name: '',
      key: 'A2',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 12,
      name: '',
      key: 'A#2',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 13,
      name: '',
      key: 'B2',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 14,
      name: '',
      key: 'C3',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 15,
      name: '',
      key: 'C#3',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 16,
      name: '',
      key: 'D3',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 17,
      name: '',
      key: 'D#3',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 18,
      name: '',
      key: 'E3',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 19,
      name: '',
      key: 'F3',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 20,
      name: '',
      key: 'F#3',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 21,
      name: '',
      key: 'G3',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 22,
      name: '',
      key: 'G#3',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 23,
      name: '',
      key: 'A3',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 24,
      name: '',
      key: 'A#3',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 25,
      name: '',
      key: 'B3',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 26,
      name: '',
      key: 'C4',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 27,
      name: '',
      key: 'C#4',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 28,
      name: '',
      key: 'D4',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 29,
      name: '',
      key: 'D#4',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 30,
      name: '',
      key: 'E4',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 31,
      name: '',
      key: 'F4',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 32,
      name: '',
      key: 'F#4',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
    {
      id: 33,
      name: '',
      key: 'G4',
      audioUrl: '',
      question: '',
      answer: '',
      imageUrl: '',
    },
  ])
}
