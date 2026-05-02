export async function getBestSellers() {
  const res = await fetch("https://flower.elevateegy.com/api/v1/best-seller");

  if (!res.ok) {
    throw new Error("Failed to fetch best sellers");
  }

  const data = await res.json();
  return data.bestSeller || [];
}

export async function findOccasionId(occasionName) {
  const res = await fetch("https://flower.elevateegy.com/api/v1/occasions");

  if (!res.ok) {
    throw new Error("Failed to fetch occasions");
  }

  const data = await res.json();

  const occasion = data.occasions.find(
    (o) => o.name.toLowerCase() === occasionName.toLowerCase(),
  );
  console.log("Found occasion:", occasion);
  return occasion ? occasion._id : null;
}

export async function getMostPopularByOccasion(occasionName) {
  const occasionId = await findOccasionId(occasionName);
  const res = await fetch(
    `https://flower.elevateegy.com/api/v1/products?occasion=${occasionId}&sort=-rateAvg&limit=40`,
    // `https://flower.elevateegy.com/api/v1/products?occasion=${occasionId}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch most popular products");
  }

  const data = await res.json();
  return data.products || [];
}
