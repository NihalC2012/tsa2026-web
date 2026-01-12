import React, { useState } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setResults([
        {
          id: 1,
          title: `Historical Record: ${searchTerm}`,
          description: "Found in the historical archives section",
          type: "Archive"
        },
        {
          id: 2,
          title: `Location Reference: ${searchTerm}`,
          description: "Referenced in the maps and landmarks database",
          type: "Location"
        },
        {
          id: 3,
          title: `Notable Mention: ${searchTerm}`,
          description: "Mentioned in the people and events timeline",
          type: "Timeline"
        }
      ]);
    }
  };

  return (
    <div className="search-page">
      <div className="page-container">
        <div style={{ textAlign: "center", marginBottom: "var(--space-2xl)" }}>
          <h1>Search</h1>
          <p style={{
            fontSize: "var(--font-size-lg)",
            color: "var(--color-text-secondary)",
            maxWidth: "700px",
            margin: "var(--space-md) auto 0"
          }}>
            Search through Exton's history, landmarks, and notable people
          </p>
        </div>

        <div className="section">
          <form onSubmit={handleSearch} style={{
            display: "flex",
            gap: "var(--space-md)",
            marginBottom: "var(--space-xl)",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter search term..."
              className="input"
              style={{ flexGrow: 1, maxWidth: "500px" }}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>

          {results.length > 0 && (
            <div>
              <h3 style={{
                marginBottom: "var(--space-xl)",
                color: "var(--color-text-primary)"
              }}>
                Search Results ({results.length})
              </h3>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-lg)"
              }}>
                {results.map((result) => (
                  <div
                    key={result.id}
                    className="card"
                    style={{
                      borderLeft: "4px solid var(--color-primary)",
                      cursor: "pointer"
                    }}
                  >
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                      marginBottom: "var(--space-sm)"
                    }}>
                      <h4 className="card-title" style={{ marginBottom: 0 }}>
                        {result.title}
                      </h4>
                      <span className="badge badge-primary">{result.type}</span>
                    </div>
                    <p className="card-text">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {results.length === 0 && (
            <div style={{ textAlign: "center", padding: "var(--space-3xl) 0" }}>
              <p style={{
                fontSize: "var(--font-size-lg)",
                color: "var(--color-text-muted)"
              }}>
                Enter a search term to find information about Exton
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}