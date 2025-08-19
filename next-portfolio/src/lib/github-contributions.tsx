const username = 'devp19';

export async function getCachedContributions() {
  const url = new URL(`/v4/${username}?y=2025`, 'https://github-contributions-api.jogruber.de');
  const response = await fetch(url.toString(), { next: { revalidate: 60 * 60 * 24 } });
  const data = await response.json();

  const total = data?.total?.[new Date().getFullYear()] ?? 0;
  const contributions = data?.contributions ?? [];

  return { contributions, total };
}
