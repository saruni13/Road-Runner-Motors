import { useState } from "react";

function Searchbar() {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleChange = (event) => {
      setQuery(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const response = await fetch(`cars?q=${query}`);
      const data = await response.json();
  
      setSearchResults(data);
    };
  
    return (
      <div>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <form id="searchform" onSubmit={handleSubmit}>
        <div id="Searchdiv">
          <input
            type="text"
            value={query}    
            onChange={handleChange}
            placeholder="Type name of the car you're intrerested in"
          />
          <i className='bx bx-search bx-burst bx-flip-horizontal' ></i>
          </div>
          <button type="submit">Enter</button>
        </form>
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
    </div>
    )
}

export default Searchbar