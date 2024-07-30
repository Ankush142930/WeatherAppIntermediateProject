/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../api';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleSearch = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = async (inputValue) => {
    try {
      return await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
      )
        .then((response) => response.json())
        .then((response) => {
          return {
            options: response.data.map((city) => {
              return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
              };
            }),
          };
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AsyncPaginate
      placeholder="Search for your city..."
      debounceTimeout={600}
      value={search}
      onChange={handleSearch}
      loadOptions={loadOptions}
    ></AsyncPaginate>
  );
};
export default Search;
