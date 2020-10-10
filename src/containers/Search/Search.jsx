import React, { useState, useEffect, useContext } from "react";
import get from "lodash/get";

import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";

import SearchContainer from "../../components/Search/SearchContainer";
import InputSearch from "../../components/Search/InputSearch";
import FilterContainer from "../../components/Search/FilterContainer";
import FilterButtons from "../../components/Search/FilterButtons";
import Card from "../../components/Card/Card";
import RenderLoading from "../../components/Loading/Loading";
import Button from "../../components/Button/Button";

const Search = () => {
  const { loading, setLoading } = useContext(SearchContext);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [datas, setDatas] = useState({});
  const [pagSelected, setPagSelected] = useState("all");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const { data } = useFetch("https://rickandmortyapi.com/api/character/");
  const newData = get(data, "results", []);

  useEffect(() => {
    const results = newData.filter((person) =>
      person.name.toLowerCase().includes(searchTerm)
    );

    const humans = results.filter((x) => x.species === "Human");
    const aliens = results.filter((x) => x.species === "Alien");

    const all = [...humans, ...aliens];
    setDatas({ all, humans, aliens });
  }, [searchTerm]);

  useEffect(() => {
    if (get(datas, pagSelected)) {
      setLoading(true);
      setTimeout(() => {
        setSearchResults(get(datas, pagSelected) || []);
        setLoading(false);
      }, 500);
    }
  }, [pagSelected, datas]);

  return (
    <SearchContainer>
      <InputSearch
        placeholder={"ingrese su busqueda"}
        value={searchTerm}
        onChange={handleChange}
      />
      <FilterContainer>
        <FilterButtons
          pagSelected={pagSelected}
          setPagSelected={setPagSelected}
          result={searchResults}
        />
      </FilterContainer>

      {loading || !searchTerm || !searchResults.length ? (
        <RenderLoading
          result={searchResults}
          input={searchTerm.length > 1 ? searchTerm : ""}
          loading={loading}
        />
      ) : (
        <div>
          <ul className="cards">
            {searchResults.map((item) => (
              <Card
                key={"id" + item.id}
                title={item.name}
                description={item.species}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      )}
    </SearchContainer>
  );
};

export default Search;
