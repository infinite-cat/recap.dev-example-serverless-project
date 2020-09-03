import AWS from 'aws-sdk'
import { DataMapper } from '@aws/dynamodb-data-mapper'
import DynamoDB from 'aws-sdk/clients/dynamodb'

import '../../utils/func-test.env'
import { Post } from '../../entity/dynamodb'

const lambdaClient = new AWS.Lambda({ region: 'us-east-1' })
const mapper = new DataMapper({
  client: new DynamoDB({ region: 'us-east-1' }),
})

describe('dynamodb tracing', () => {
  beforeAll(async () => {
    await mapper.put(Object.assign(new Post(), {
      id: 'test-dynamodb-get',
      title: 'Testing the Tracing',
    }))
  })

  test('should not break a lambda', async () => {
    const response = await lambdaClient.invoke({
      FunctionName: 'dev-recap-dev-example-project-dynamodb-get',
      Payload: JSON.stringify({
        id: 'test-dynamodb-get',
      }),
    }).promise()

    const post = JSON.parse(response.Payload!.toString())

    expect(post).toEqual({
      id: 'test-dynamodb-get',
      title: 'Testing the Tracing',
    })
  })

  afterEach(async () => {
    try {
      await mapper.delete(Object.assign(
        new Post(),
        { id: 'test-dynamodb-get' },
      ))
    } catch (e) {
      console.log('Error cleaning up project ', e)
    }
  })
})
