export async function getBestSellers() {
  const res = await fetch(
    "https://flower.elevateegy.com/api/v1/best-seller"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch best sellers");
  }

  const data = await res.json();
  return data.bestSeller || [];
}