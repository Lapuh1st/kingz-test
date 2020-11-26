import React from 'react';
import { Link } from 'react-router-dom'
import searchImg from '../../images/search-image.jpg';

const SearchResults = ({teams}) => (
  <div className="search__results">
    <ul className="search__list">
        {teams.map((team) => {
          return <Link to={`/info/${team.idTeam}`} key={team.idTeam}>
            <li className="search__item" >
              <img src={team.strTeamBadge || searchImg}/>
              <span>{team.strTeam}</span>
            </li>
          </Link>
        })}
      </ul>
  </div>
)

export default SearchResults;