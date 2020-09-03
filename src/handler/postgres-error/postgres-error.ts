import { createPostgresConnection } from '../../db/postgres/postgres'

export const handler = async () => {
  const connection = await createPostgresConnection()
  try {
    await connection.query('select * from test_non_existing_table')
  } finally {
    await connection.close()
  }
  return true
}
