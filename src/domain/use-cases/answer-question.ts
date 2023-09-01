import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Answer } from '../entities/answer'
import { AnswerRepository } from '../repositories/answers-repository'

interface AnswerQuestionUseCaseRequest {
  questionId: string
  instructorId: string
  content: string
  upvotes?: number
  downvotes?: number
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswerRepository) {}

  async execute({
    questionId,
    instructorId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const answer = Answer.create({
      questionId: new UniqueEntityID(questionId),
      authorId: new UniqueEntityID(instructorId),
      content,
      downvotes: 0,
      upvotes: 0,
    })

    await this.answersRepository.create(answer)

    return answer
  }
}
