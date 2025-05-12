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
	const result = await client.query(queryObject)
	await client.end()
	return result
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

	const usedConnectionsResult = await client.query('SELECT count(*) AS used_connections FROM pg_stat_activity;')
	const usedConnections = parseInt(usedConnectionsResult.rows[0].used_connections)

	await client.end()
	return {
		version: serverVersion,
		maxConnections: maxConnections,
		usedConnections: usedConnections,
	}
}

export default {
	query: query,
	healthy: healthy
}