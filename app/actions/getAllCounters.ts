export async function getAllCounters(): Promise<CounterProps[]> {
  const response: Response = await fetch(`${process.env.API_URL}/api/counter`, {
    cache: "no-cache",
  });
  return response.json();
}
