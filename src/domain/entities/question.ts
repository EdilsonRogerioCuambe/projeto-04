import { Slug } from './value-objects/slug'
import { Entity } from '../../core/entities/entity'
import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Optional } from '../../core/@types/optional'

interface QuestionProps {
  authorId: UniqueEntityID
  bestAnswerId?: UniqueEntityID
  title: string
  content: string
  slug: Slug
  upvotes: number
  downvotes: number
  createdAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {
  static create(
    props: Optional<QuestionProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const question = new Question(
      {
        ...props,
        upvotes: props.upvotes ?? 0,
        downvotes: props.downvotes ?? 0,
        createdAt: new Date(),
      },
      id,
    )

    return question
  }
}
