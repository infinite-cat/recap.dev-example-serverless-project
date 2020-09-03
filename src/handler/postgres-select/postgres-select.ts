import { createPostgresConnection } from '../../db/postgres/postgres'

export const handler = async () => {
  const connection = await createPostgresConnection()
  await connection.query('select 1')
  await connection.close()
  return true
}
