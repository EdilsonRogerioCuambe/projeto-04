import { Optional } from '@/core/@types/optional'
import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

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

  set content(content: string) {
    this.props.content = content
    this.touch()
  }

  get upvotes() {
    return this.props.upvotes
  }

  set upvotes(upvotes: number) {
    this.props.upvotes = upvotes
  }

  get downvotes() {
    return this.props.downvotes
  }

  set downvotes(downvotes: number) {
    this.props.downvotes = downvotes
  }

  get authorId() {
    return this.props.authorId
  }

  get questionId() {
    return this.props.questionId
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  get except() {
    return this.content.substring(0, 100).trimEnd().concat('...')
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
