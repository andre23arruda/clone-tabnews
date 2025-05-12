test('GET to /api/v1/status should return 200', async () => {
	const response = await fetch('http://localhost:3000/api/v1/status')
	expect(response.status).toBe(200)
	const responseBody = await response.json()

	expect(responseBody.updated_at).toBeDefined()
	const pasedDate = new Date(responseBody.updated_at).toISOString()
	expect(responseBody.updated_at).toEqual(pasedDate)

	expect(responseBody.version).toBeDefined()
	expect(responseBody.version).toBeGreaterThanOrEqual(0)

	expect(responseBody.max_connections).toBeDefined()
	expect(responseBody.max_connections).toBeGreaterThanOrEqual(0)

	expect(responseBody.used_connections).toBeDefined()
	expect(responseBody.used_connections).toBeGreaterThanOrEqual(0)
})