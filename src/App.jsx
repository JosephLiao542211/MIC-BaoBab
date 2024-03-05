import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/LocationSearchBar'
import ToolBar from './components/ToolBar'


function App() {
  const [count, setCount] = useState(0)
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // Perform search logic here
    // For example, fetch data from an API based on the query
    console.log('Searching for:', query);
    // Update searchResults state with the results
  };

  return (
    <>
      <div>
        <ToolBar></ToolBar>
        {/* <SearchBar onSearch={handleSearch}>

        </SearchBar> */}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App