import database from "infra/database";

async function cleanDataBase() {
	await database.query("drop schema public cascade;");
	await database.query("create schema public;");
}

export { cleanDataBase };
