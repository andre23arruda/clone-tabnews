function somar(numero1, numero2) {
	const result = numero1 + numero2
	if (isNaN(result)) {
		return 'Erro'
	}
	return numero1 + numero2
}

exports.somar = somar