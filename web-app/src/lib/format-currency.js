// Bug: currency is hardcoded to USD regardless of the locale passed in.
// Opening /orders/12345?locale=de-DE will display amounts in USD instead of EUR.
export function formatCurrency(amount, locale) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}
