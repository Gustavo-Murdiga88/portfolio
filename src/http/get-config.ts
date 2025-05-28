export async function getConfig() {
  const response = await fetch(
    "https://hg0ayg6r51.ufs.sh/f/WZG4CsVzth1K785ZsY99OuxWgA6rh5KkMpQ2ZYeUwqHavGRc",
    {
      method: "GET",
      cache: "force-cache",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 60 * 60 * 24, // 24 hours
      },
    },
  );

  const data = await response.json();
  console.log({ data });

  return data;
}
