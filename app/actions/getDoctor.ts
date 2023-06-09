export async function getDoctor(slug: string) {
  const response = await fetch(`${process.env.API_URL}/api/doctor/${slug}`, {
    cache: "no-cache",
  });
  return response.json();
}
