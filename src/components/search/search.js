import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geo_api_url, geo_api_options } from '../../api';

const Search = ({ onSearchChange }) => {

  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${geo_api_url}/cities?namePrefix=${inputValue}`,
      geo_api_options
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.country}`,
            }
          })
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}

export default Search;