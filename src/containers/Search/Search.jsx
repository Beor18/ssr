import React, { useState, useEffect } from "react";
import SearchContainer from "../../components/Search/SearchContainer";
import InputSearch from "../../components/Search/InputSearch";
import FilterContainer from "../../components/Search/FilterContainer";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

const people = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin",
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = people.filter((person) =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <SearchContainer>
      <InputSearch
        placeholder={"ingrese su busqueda"}
        value={searchTerm}
        onChange={handleChange}
      />
      <FilterContainer>
        <Button text={"Soy un boton 1"} />
        <Button text={"Soy un boton 2"} />
        <Button text={"Soy un boton 3"} />
        <Button text={"Soy un boton 4"} />
        <Button text={"Soy un boton 5"} />
      </FilterContainer>
      <div>
        <ul className="cards">
          {searchResults.map((item) => (
            <Card key={"id" + item} title={item} />
          ))}
        </ul>
      </div>
    </SearchContainer>
  );
};

export default Search;
