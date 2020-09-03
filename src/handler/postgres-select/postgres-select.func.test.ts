import AWS from 'aws-sdk'

import '../../utils/func-test.env'

const lambdaClient = new AWS.Lambda({ region: 'us-east-1' })

describe('postgres tracing', () => {
  test('should not break a lambda and trace it', async () => {
    const response = await lambdaClient.invoke({
      FunctionName: 'dev-recap-dev-example-project-postgres-select',
    }).promise()

    const result = JSON.parse(response.Payload!.toString())

    expect(result).toEqual(true)
  })
})
