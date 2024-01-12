export const convertCurrency = (amount: string | number) => {
	return new Intl.NumberFormat("sgn-NL", {
		style: "currency",
		currency: "EUR",
		minimumFractionDigits: 2,
	}).format(+amount)
}
