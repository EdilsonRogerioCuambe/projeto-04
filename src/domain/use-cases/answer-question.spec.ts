import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { AnswerRepository } from '../repositories/answers-repository'
import { Answer } from '../entities/answer'

const fakeUsersRepository: AnswerRepository = {
  create: async (answer: Answer) => {
    return
  },
}

test('create an answer for a question', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeUsersRepository)

  const answer = await answerQuestion.execute({
    content: 'Answer content',
    instructorId: 'instructor-id',
    questionId: 'question-id',
    upvotes: 0,
    downvotes: 0,
  })

  expect(answer.content).toEqual('Answer content')
})
