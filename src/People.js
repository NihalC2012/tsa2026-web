import React, { useState } from "react";

export default function People() {
  const [people] = useState([
    {
      id: 1,
      name: "General Anthony Wayne",
      history: "General Anthony Wayne was born near Exton and was a hero in the American Revolutionary War. Known for his bold and daring tactics, he earned the nickname 'Mad Anthony.' Wayne played a crucial role in several key battles, including the Battle of Stony Point and the Battle of Yorktown. After the war, he continued to serve his country as a statesman and military leader, contributing to the early development of the United States. He is rumoored to still haunt the residents of Exton and nearby areas",
    },
    {
      id: 2,
      name: "Dr. William Darlington",
      history: " Dr. William Darlington was a renowned botanist, physician, and banker, born in nearby Birmingham Township (1782-1863)."
    },
    {
      id: 3,
      name: "Matt Ryan",
      history: "Matt Ryan, the former nfl quarterback for the Atlanta Falcons and Indianapolis Colts, was born in Exton, Pennsylvania. His leadership and skills on the field have made him one of the most decorated players in the league."
    },
    {
      id: 4,
      name: "Kerr Smith",
      history: "Kerr Smith is an american actor known for his roles in popular movies like 'Final Destination' and TV shows such as 'Dawson's Creek' and 'Charmed'. He was born in Exton, Pennsylvania."
    },
    {
      id: 5,
      name: "Joseph Parker",
      history: "Joseph Parker is a historic figure who owned land in Exton during the early to mid 18th century. He was known for his contributions to the local community and preserving key artifacts from that time period."
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
                <strong>History:</strong> {person.history}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

