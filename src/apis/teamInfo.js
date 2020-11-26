import { BASE_URL } from './apiConstants';

export default async function fetchTeamInfo(teamId) {
  const url = `${BASE_URL}/lookupteam.php?id=${teamId}`;
  const response = await fetch(url);
  return response.json();
}
