test('GET to /api/v1/status should return 200', async () => {
	const response = await fetch('http://localhost:3000/api/v1/status')
	expect(response.status).toBe(200)
	const responseBody = await response.json()

	expect(responseBody.updated_at).toBeDefined()
	const pasedDate = new Date(responseBody.updated_at).toISOString()
	expect(responseBody.updated_at).toEqual(pasedDate)

	expect(responseBody.dependencies.database.version).toBeDefined()
	expect(responseBody.dependencies.database.version).toBeGreaterThanOrEqual(0)

	expect(responseBody.dependencies.database.max_connections).toBeDefined()
	expect(responseBody.dependencies.database.max_connections).toBeGreaterThanOrEqual(100)

	expect(responseBody.dependencies.database.used_connections).toBeDefined()
	expect(responseBody.dependencies.database.used_connections).toEqual(1)
})