import database from 'infra/database'

export default async function status(request, response) {
	const { version, maxConnections, usedConnections } = await database.healthy()
	const updatedAt = new Date().toISOString()
	response.status(200).json({
		updated_at: updatedAt,
		version,
		max_connections: maxConnections,
		used_connections: usedConnections,
	})
}