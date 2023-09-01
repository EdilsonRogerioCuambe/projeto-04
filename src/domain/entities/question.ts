import { Slug } from './value-objects/slug'
import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/@types/optional'
import dayjs from 'dayjs'

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
  get title() {
    return this.props.title
  }

  set title(title: string) {
    this.props.title = title
    this.slug = Slug.create(title)
    this.touch()
  }

  get content() {
    return this.props.content
  }

  set content(content: string) {
    this.props.content = content
    this.touch()
  }

  get slug() {
    return this.props.slug
  }

  set slug(slug: Slug) {
    this.props.slug = slug
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

  get bestAnswerId(): UniqueEntityID | undefined {
    return this.props.bestAnswerId
  }

  set bestAnswerId(id: UniqueEntityID) {
    this.props.bestAnswerId = id
    this.touch()
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  get isNew() {
    return dayjs(this.props.createdAt).isAfter(dayjs().subtract(1, 'day'))
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  get except() {
    return this.content.substring(0, 100).trimEnd().concat('...')
  }

  static create(
    props: Optional<QuestionProps, 'createdAt' | 'slug'>,
    id?: UniqueEntityID,
  ) {
    const question = new Question(
      {
        ...props,
        slug: props.slug ?? Slug.create(props.title),
        upvotes: props.upvotes ?? 0,
        downvotes: props.downvotes ?? 0,
        createdAt: new Date(),
      },
      id,
    )

    return question
  }
}
