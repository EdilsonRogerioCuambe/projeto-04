import { expect, test } from 'vitest'
import { Slug } from './slug'

test('it Should be able to create a slug', () => {
  const slug = Slug.create('Hello World')

  expect(slug.value).toBe('hello-world')
})
