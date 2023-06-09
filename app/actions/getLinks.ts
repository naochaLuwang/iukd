export async function getLink(slug: string) {
  const response = await fetch(`${process.env.API_URL}/api/links/${slug}`);
  return response.json();
}
