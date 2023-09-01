export class Slug {
  public value: string

  constructor(value: string) {
    this.value = value
  }

  /**
   * Receive a string and normalize it to a slug.
   *
   * Example:
   *  - "Hello World" -> "hello-world"
   *
   * @param text
   */
  static create(text: string) {
    const slug = text
      .normalize('NFKD')
      .toLocaleLowerCase()
      .trim()
      .replace(/\s+/g, '-') // remove all whitespaces
      .replace(/[^\w-]+/g, '') // remove all non-word chars
      .replace(/_/g, '-') // replace underscore with dash
      .replace(/--+/g, '-') // remove duplicated dashes
      .replace(/-$/g, '') // remove trailing dashes

    return new Slug(slug)
  }
}
