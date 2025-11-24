// utils/helpers.js
export function formatNumber(num) {
  if (num == null) return "-";
  return new Intl.NumberFormat().format(num);
}
