export async function getAllDoctors(): Promise<PeopleProps[]> {
  const response: Response = await fetch(`${process.env.API_URL}/api/doctor`, {
    cache: "no-cache",
  });
  return response.json();
}
