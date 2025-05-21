import { Client } from 'pg'

async function query(queryObject) {
	const client = new Client({
		host: process.env.POSTGRES_HOST,
		port: process.env.POSTGRES_PORT,
		user: process.env.POSTGRES_USER,
		database: process.env.POSTGRES_DB,
		password: process.env.POSTGRES_PASSWORD,
	})
	await client.connect()
	try {
		const result = await client.query(queryObject)
		return result
	} catch (error) {
		console.log(error)
	} finally {
		await client.end()
	}
}

async function healthy() {
	const client = new Client({
		host: process.env.POSTGRES_HOST,
		port: process.env.POSTGRES_PORT,
		user: process.env.POSTGRES_USER,
		database: process.env.POSTGRES_DB,
		password: process.env.POSTGRES_PASSWORD,
	})
	await client.connect()

	const versionResult = await client.query('SHOW server_version;')
	const serverVersion = parseInt(versionResult.rows[0].server_version)

	const maxConnectionsResult = await client.query('SHOW max_connections;')
	const maxConnections = parseInt(maxConnectionsResult.rows[0].max_connections)

	const usedConnectionsResult = await client.query("SELECT count(*)::int FROM pg_stat_activity WHERE datname = 'local_db';")
	const usedConnections = usedConnectionsResult.rows[0].count

	await client.end()
	return {
		serverVersion,
		maxConnections,
		usedConnections,
	}
}

export default {
	query: query,
	healthy: healthy
}