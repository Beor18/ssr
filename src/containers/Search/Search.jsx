import React, { useState, useEffect } from "react";
import axios from "axios";
import get from "lodash/get";

import SearchContainer from "../../components/Search/SearchContainer";
import InputSearch from "../../components/Search/InputSearch";
import FilterContainer from "../../components/Search/FilterContainer";
import FilterButtons from "../../components/Search/FilterButtons";
import Card from "../../components/Card/Card";
import RenderLoading from "../../components/Loading/Loading";
import Button from "../../components/Button/Button";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState({});
  const [pagSelected, setPagSelected] = useState("all");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      const result = await axios
        .get("https://rickandmortyapi.com/api/character/")
        .catch(() => null);

      const data = get(result, "data.results", []);

      const results = data.filter((person) =>
        person.name.toLowerCase().includes(searchTerm)
      );

      const humans = results.filter((x) => x.species === "Human")
      const aliens = results.filter((x) => x.species === "Alien")

      const all = [...humans, ...aliens];

      setData({
        all,
        humans,
        aliens
      });

      // setTimeout(() => {
      //   setLoading(false);
      // }, 1000);
    };

    getData();
  }, [searchTerm]);

  useEffect(() => {
    if (get(data, pagSelected)) {
      setLoading(true);
      setTimeout(() => {
        setSearchResults(get(data, pagSelected) || []);
        setLoading(false);
      }, 200);
    }
  }, [pagSelected, data]);

  // if (loading) {
  //   return <Loading />;
  // }

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
