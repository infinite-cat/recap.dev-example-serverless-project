import fetch from 'node-fetch'

export const handler = async () => {
  const response = await fetch('https://cat-fact.herokuapp.com/facts')
  return response.json()
}
