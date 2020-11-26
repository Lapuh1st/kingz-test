import { useState, useEffect } from 'react';
import fetchTeamInfo from '../apis/teamInfo';

const useTeamInfo = (teamId) => {
  const [currentTeam, setCurrentTeam] = useState(null);

  useEffect(() => {
    fetchTeamById(teamId);
  }, [teamId]);

  const fetchTeamById = async (teamId) => {
    try {
      const response = await fetchTeamInfo(teamId);
      setCurrentTeam(response.teams[0]);
    } catch (error) {
      console.error(error);
      alert('server error');
      setCurrentTeam(null);
    }
  };

  return currentTeam;
};

export default useTeamInfo;
