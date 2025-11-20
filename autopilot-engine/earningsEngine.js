export async function getEarningsSnapshot() {
  // Simulated dynamic values; later you can wire to real data.
  const base = 100 + Math.floor(Math.random() * 200);
  const today = base;
  const week = base * 5 + Math.floor(Math.random() * 300);
  const month = base * 20 + Math.floor(Math.random() * 800);

  const traffic = 500 + Math.floor(Math.random() * 1500);
  const conversions = 20 + Math.floor(Math.random() * 80);

  return {
    currency: "USD",
    today,
    week,
    month,
    traffic,
    conversions,
    convRate: (conversions / traffic * 100).toFixed(2)
  };
}
