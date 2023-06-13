export async function getDepartment(slug: string) {
  const response = await fetch(
    `${process.env.API_URL}/api/department/${slug}`,
    {
      cache: "no-cache",
    }
  );
  return response.json();
}
