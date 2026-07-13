test("Verificar que o ambiente é de teste", () => {
	expect(process.env.NODE_ENV).toBe("test");
});
