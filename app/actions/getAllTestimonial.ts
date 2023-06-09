export async function getAllTestimonials() {
  const response: Response = await fetch(
    `${process.env.API_URL}/api/testimonial`,
    {
      cache: "no-cache",
    }
  );
  return response.json();
}
