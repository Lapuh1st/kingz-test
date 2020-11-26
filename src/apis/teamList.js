import { BASE_URL } from './apiConstants';

export default async function fetchTeamList(query) {
  const url = `${BASE_URL}/searchteams.php?t=${query}`;
  const response = await fetch(url);
  return response.json();
}

