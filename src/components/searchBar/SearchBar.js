import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useTeams from '../../hooks/useTeams';
import SearchResults from './SearchResults';
import NoSearchResults from './NoSearchResults';
import './search-bar.scss';

export const MINIMUM_SYMBOLS = 2;

const SearchBar = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [teams, search] = useTeams();
  const hasMinimumSymbols = (query) => !!(query && (query.length > MINIMUM_SYMBOLS));
  const showResults = teams && hasMinimumSymbols(query);
  const showNoResults = !teams && hasMinimumSymbols(query);

  const onQueryChange = (query) => {
    setQuery(query);
    if (hasMinimumSymbols(query)) {
      search(query)
    }
  }

  useEffect (() => {
    setQuery('');
  }, [location])

  return (
    <form className="search">
      <input
        className="search__input"
        placeholder="Search for songs, artists etc ..."
        type="text"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
      />
      {showResults && <SearchResults teams={teams}/>}
      {showNoResults && <NoSearchResults/>}
    </form>
  );
};

export default SearchBar;