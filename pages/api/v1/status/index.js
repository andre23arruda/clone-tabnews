import database from 'infra/database'

export default async function status(request, response) {
	const versionResult = await database.query('SHOW server_version;')
	const serverVersion = parseInt(versionResult.rows[0].server_version)

	const maxConnectionsResult = await database.query('SHOW max_connections;')
	const maxConnections = parseInt(maxConnectionsResult.rows[0].max_connections)

	const databaseName = process.env.POSTGRES_DB
	const usedConnectionsResult = await database.query({
		text: 'SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;',
		values: [databaseName]
	})
	const usedConnections = usedConnectionsResult.rows[0].count
	const updatedAt = new Date().toISOString()
	response.status(200).json({
		updated_at: updatedAt,
		dependencies: {
			database: {
				version: serverVersion,
				max_connections: maxConnections,
				used_connections: usedConnections,
			}
		}
	})
}


// export default async function status(request, response) {
// 	const { serverVersion, maxConnections, usedConnections } = await database.healthy()
// 	const updatedAt = new Date().toISOString()
// 	response.status(200).json({
// 		updated_at: updatedAt,
// 		dependencies: {
// 			database: {
// 				version: serverVersion,
// 				max_connections: maxConnections,
// 				used_connections: usedConnections,
// 			}
// 		}
// 	})
// }