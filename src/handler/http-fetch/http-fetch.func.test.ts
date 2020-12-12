import AWS from 'aws-sdk'

import '../../utils/func-test.env'

const lambdaClient = new AWS.Lambda({ region: 'us-east-1' })

describe('http tracing', () => {
  test('happy path', async () => {
    const response = await lambdaClient.invoke({
      FunctionName: 'dev-recap-dev-example-project-http-fetch',
    }).promise()

    expect(response.StatusCode).toBe(200)

    const result = JSON.parse(response.Payload!.toString())

    expect(result.length).toBeGreaterThan(1)
  })
})
