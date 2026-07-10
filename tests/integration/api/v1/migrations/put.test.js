import orchestrator from "tests/orchestrator.js";
import { cleanDataBase } from "tests/utils";

beforeAll(async () => {
	await orchestrator.waitForAllServices();
	await cleanDataBase();
});

test("PUT to /api/v1/migrations and check connections", async () => {
	for (let i = 0; i < 30; i++) {
		await fetch("http://localhost:3000/api/v1/migrations", {
			method: "PUT",
		});
	}

	const response = await fetch("http://localhost:3000/api/v1/status");
	const responseBody = await response.json();
	// expect(responseBody.dependencies.database.used_connections).toBeGreaterThan(0)
	expect(responseBody.dependencies.database.used_connections).toBe(1);
});

test("DELETE to /api/v1/migrations and check connections", async () => {
	for (let i = 0; i < 30; i++) {
		await fetch("http://localhost:3000/api/v1/migrations", {
			method: "DELETE",
		});
	}

	const response = await fetch("http://localhost:3000/api/v1/status");
	const responseBody = await response.json();
	// expect(responseBody.dependencies.database.used_connections).toBeGreaterThan(0)
	expect(responseBody.dependencies.database.used_connections).toBe(1);
});
