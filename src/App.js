import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import PageNumber from "./components/PageNumber/PageNumber";

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
  let { info, results } = fetchedData;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center ubuntu  my-4">
        Rick & Morthy <span className="text-primary">WiKi</span>
      </h1>
      <div className="container d-flex justify-content-center">
        <p className="display-5">
          <PageNumber pageNumber={pageNumber} />
        </p>
      </div>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filters />

          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}
export default App;
