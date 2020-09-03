import AWS from 'aws-sdk'

import '../../utils/func-test.env'

const lambdaClient = new AWS.Lambda({ region: 'us-east-1' })

describe('timeout', () => {
  jest.setTimeout(10000)

  test('should a lambda timeout and trace it', async () => {
    const response = await lambdaClient.invoke({
      FunctionName: 'dev-recap-dev-example-project-timeout',
    }).promise()

    const result = JSON.parse(response.Payload!.toString())

    expect(result.errorMessage.includes('Task timed out')).toBe(true)
  })
})
