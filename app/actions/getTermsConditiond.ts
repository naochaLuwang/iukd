export async function getTermsConditions() {
  const response: Response = await fetch(`${process.env.API_URL}/api/terms`, {
    cache: "no-cache",
  });
  return response.json();
}
