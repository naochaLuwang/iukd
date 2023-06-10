export async function getPrivacyPolicies() {
  const response: Response = await fetch(`${process.env.API_URL}/api/privacy`, {
    cache: "no-cache",
  });
  return response.json();
}
