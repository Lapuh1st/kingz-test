import { useState } from 'react';
import fetchTeamList from '../apis/teamList';

const useTeams = () => {
  const [teamList, setTeamList] = useState([]);

  const search = async (query) => {
    try {
      const response = await fetchTeamList(query);
      setTeamList(response.teams);
    } catch (error) {
      console.error(error);
      alert('server error');
      setTeamList(null);
    }
  };

  return [teamList, search];
};

export default useTeams;
