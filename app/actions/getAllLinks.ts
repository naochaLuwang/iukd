export async function getAllLinks() {
  const response: Response = await fetch(`${process.env.API_URL}/api/links`, {
    cache: "no-cache",
  });
  return response.json();
}
