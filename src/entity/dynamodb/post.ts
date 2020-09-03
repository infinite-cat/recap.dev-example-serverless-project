import { attribute, hashKey, table } from '@aws/dynamodb-data-mapper-annotations'

@table(`${process.env.stage}-autotracing-example-project-posts`)
class Post {
  @hashKey()
  id: string

  @attribute()
  title: string
}

export { Post }
