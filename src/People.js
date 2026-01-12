import React, { useState } from "react";

export default function People() {
  const [people] = useState([
    {
      id: 1,
      name: "General Anthony Wayne",
      role: "Revolutionary War Hero",
      history: "General Anthony Wayne was born near Exton and was a hero in the American Revolutionary War. Known for his bold and daring tactics, he earned the nickname 'Mad Anthony.' Wayne played a crucial role in several key battles, including the Battle of Stony Point and the Battle of Yorktown. After the war, he continued to serve his country as a statesman and military leader, contributing to the early development of the United States. He is rumored to still haunt the residents of Exton and nearby areas."
    },
    {
      id: 2,
      name: "Dr. William Darlington",
      role: "Botanist & Physician",
      history: "Dr. William Darlington was a renowned botanist, physician, and banker, born in nearby Birmingham Township (1782-1863)."
    },
    {
      id: 3,
      name: "Matt Ryan",
      role: "NFL Quarterback",
      history: "Matt Ryan, the former NFL quarterback for the Atlanta Falcons and Indianapolis Colts, was born in Exton, Pennsylvania. His leadership and skills on the field have made him one of the most decorated players in the league."
    },
    {
      id: 4,
      name: "Kerr Smith",
      role: "Actor",
      history: "Kerr Smith is an American actor known for his roles in popular movies like 'Final Destination' and TV shows such as 'Dawson's Creek' and 'Charmed'. He was born in Exton, Pennsylvania."
    },
    {
      id: 5,
      name: "Joseph Parker",
      role: "Historic Landowner",
      history: "Joseph Parker is a historic figure who owned land in Exton during the early to mid 18th century. He was known for his contributions to the local community and preserving key artifacts from that time period."
    }
  ]);

  return (
    <div className="people-page">
      <div className="page-container">
        <div style={{ textAlign: "center", marginBottom: "var(--space-2xl)" }}>
          <h1>Notable People of Exton</h1>
          <p style={{
            fontSize: "var(--font-size-lg)",
            color: "var(--color-text-secondary)",
            maxWidth: "800px",
            margin: "var(--space-md) auto 0"
          }}>
            Discover the remarkable individuals who have called Exton home and left their mark on history
          </p>
        </div>

        <div className="card-grid">
          {people.map((person) => (
            <div key={person.id} className="card">
              <div style={{ marginBottom: "var(--space-md)" }}>
                <h3 className="card-title" style={{ marginBottom: "var(--space-sm)" }}>
                  {person.name}
                </h3>
                <span className="badge badge-primary">{person.role}</span>
              </div>
              <p className="card-text">{person.history}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

