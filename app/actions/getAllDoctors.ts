export async function getAllDoctors() {
  const response: Response = await fetch(`${process.env.API_URL}/api/doctor`, {
    cache: "no-cache",
  });
  return response.json();
}
