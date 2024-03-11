import { useState } from "react";
import "./App.css"
import SearchBar from './components/SearchBar';
import SearchResultsList  from './components/SearchResultsList';

function App() {
  const [results,setresults]= useState([]);

  return(<div className="App">
    <div className="search-bar-container"> 
    <SearchBar setresults={setresults}/>
    {results && results.length>0 &&<SearchResultsList results={results}/>}
    </div> 
    </div>
  );
}

export default App
