import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

test('create an answer for a question', () => {
  const answerQuestion = new AnswerQuestionUseCase()

  const answer = answerQuestion.execute({
    content: 'Answer content',
    instructorId: 'instructor-id',
    questionId: 'question-id',
  })

  expect(answer.content).toEqual('Answer content')
})
