import React, { useState } from "react";
import Search from "./containers/Search/Search";
import Header from "./components/Header/Header";

import { SearchContext } from "./context/SearchContext";
import { FaTruckLoading } from "react-icons/fa";

const App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="app">
      <SearchContext.Provider value={{ loading, setLoading }}>
        <Header />
        <Search />
      </SearchContext.Provider>
    </div>
  );
};

export default App;
