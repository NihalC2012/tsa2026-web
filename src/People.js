import React, { useState } from "react";

export default function People() {
  const [people] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      email: "john.doe@example.com",
      department: "Engineering"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Product Manager",
      email: "jane.smith@example.com",
      department: "Product"
    },
    {
      id: 3,
      name: "Bob Johnson",
      role: "Designer",
      email: "bob.johnson@example.com",
      department: "Design"
    },
    {
      id: 4,
      name: "Alice Williams",
      role: "Marketing Specialist",
      email: "alice.williams@example.com",
      department: "Marketing"
    },
    {
      id: 5,
      name: "Charlie Brown",
      role: "Data Analyst",
      email: "charlie.brown@example.com",
      department: "Analytics"
    }
  ]);

  return (
    <div className="people-page">
      <h1>People</h1>
      <div style={{ padding: "20px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}>
          {people.map((person) => (
            <div
              key={person.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px",
                backgroundColor: "#f9f9f9",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}
            >
              <h3 style={{ marginTop: 0, color: "#333" }}>{person.name}</h3>
              <p style={{ margin: "8px 0", color: "#666" }}>
                <strong>Role:</strong> {person.role}
              </p>
              <p style={{ margin: "8px 0", color: "#666" }}>
                <strong>Department:</strong> {person.department}
              </p>
              <p style={{ margin: "8px 0", color: "#666" }}>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${person.email}`}
                  style={{ color: "#007bff", textDecoration: "none" }}
                >
                  {person.email}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

