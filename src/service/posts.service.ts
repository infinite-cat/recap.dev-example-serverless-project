import { DataMapper } from '@aws/dynamodb-data-mapper'
import DynamoDB from 'aws-sdk/clients/dynamodb'
import { get } from 'lodash-es'
import { Post } from '../entity/dynamodb'

export class PostsService {
  private mapper = new DataMapper({
    client: new DynamoDB(),
  })

  async getById(id: string): Promise<Post | null> {
    try {
      return await this.mapper.get(Object.assign(new Post(), {
        id,
      }))
    } catch (error) {
      if (get(error, 'name') === 'ItemNotFoundException') {
        return null
      }

      throw error
    }
  }
}

export const postsService = new PostsService()
