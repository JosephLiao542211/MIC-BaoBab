import React, { useState } from "react";
import SearchBar from "./LocationSearchBar";
import YourOffers from "./YourOffers";
import './components.css'; // Importing CSS file

function ToolBar(){

    const [status, setStatus] = useState([]);

    const handleClick = (component) => {
        if (status.includes(component)) {
            setStatus(status.filter(item => item !== component));
        } else {
            setStatus([...status, component]);
        }
    };

    return (
        <div className="toolbar-container">
            <button onClick={() => handleClick("SearchBar")}>Toggle Search Bar</button>
            {status.includes("SearchBar") && (
                <div>
                    <SearchBar />
                </div>
            )}
             <button onClick={() => handleClick("Comp1")}>Comp1</button>
            {status.includes("Comp1") && (
                <div>
                    <YourOffers></YourOffers>
                </div>
            )}
             <button onClick={() => handleClick("Comp2")}>Toggle Search Bar</button>
            {status.includes("Comp2") && (
                <div>
                    <SearchBar />
                </div>
            )}
        </div>
    );
}

export default ToolBar;
