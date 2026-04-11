import { loadEnvConfig } from '@next/env'

test("Verificar que o ambiente é de teste", () => {
	expect(process.env.NODE_ENV).toBe("test");
});

// test("Verificar que as credenciais do Banco de Dados nâo estão sendo injetadas no process.env", () => {
// 	expect(process.env.POSTGRES_HOST).toBeUndefined();
// 	expect(process.env.POSTGRES_PORT).toBeUndefined();
// 	expect(process.env.POSTGRES_USER).toBeUndefined();
// 	expect(process.env.POSTGRES_DB).toBeUndefined();
// 	expect(process.env.POSTGRES_PASSWORD).toBeUndefined();
// });

// test("Verificar que foram carregadas as variáveis de ambiente", () => {
// 	expect(process.env.POSTGRES_PORT).toBeUndefined();
// 	loadEnvConfig(process.cwd())
// 	expect(process.env.POSTGRES_PORT).toBe("5432");
// });