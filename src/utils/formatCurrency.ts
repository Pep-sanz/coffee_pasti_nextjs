export const formatCurrency = (number: number, locale = "en-US", currency = "USD") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
};
