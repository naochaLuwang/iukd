export async function getAllOutreachOpds() {
  const response: Response = await fetch(
    `${process.env.API_URL}/api/outreachopds`,
    {
      cache: "no-cache",
    }
  );
  return response.json();
}
