import AWS from 'aws-sdk'

import '../../utils/func-test.env'

const lambdaClient = new AWS.Lambda({ region: 'us-east-1' })

describe('mysql tracing', () => {
  test('should report an error in the query', async () => {
    const response = await lambdaClient.invoke({
      FunctionName: 'dev-recap-dev-example-project-mysql-error',
    }).promise()

    const result = JSON.parse(response.Payload!.toString())

    expect(result.errorType).toEqual('QueryFailedError')
  })
})
