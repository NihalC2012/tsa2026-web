import React, { useState } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setResults([
        `Result 1 for "${searchTerm}"`,
        `Result 2 for "${searchTerm}"`,
        `Result 3 for "${searchTerm}"`
      ]);
    }
  };

  return (
    <div className="search-page">
      <h1>Search</h1>
      <div style={{ padding: "20px" }}>
        <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter search term..."
            style={{
              padding: "10px",
              fontSize: "16px",
              width: "300px",
              marginRight: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px"
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Search
          </button>
        </form>

        {results.length > 0 && (
          <div>
            <h3>Search Results:</h3>
            <ul>
              {results.map((result, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}