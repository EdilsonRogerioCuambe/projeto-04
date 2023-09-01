import { Optional } from '../../core/@types/optional'
import { Entity } from '../../core/entities/entity'
import { UniqueEntityID } from '../../core/entities/unique-entity-id'

interface AnswerProps {
  authorId: UniqueEntityID
  questionId: UniqueEntityID
  content: string
  upvotes: number
  downvotes: number
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content
  }

  static create(
    props: Optional<AnswerProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const answer = new Answer(
      {
        ...props,
        upvotes: props.upvotes ?? 0,
        downvotes: props.downvotes ?? 0,
        createdAt: new Date(),
      },
      id,
    )

    return answer
  }
}
