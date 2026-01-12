import React from "react";
import { Chrono } from "react-chrono";
import data from "./data";

export default function Timeline() {
  return (
    <div className="timeline-page">
      <div className="page-container">
        <div style={{ textAlign: "center", marginBottom: "var(--space-2xl)" }}>
          <h1>Historical Timeline</h1>
          <p style={{
            fontSize: "var(--font-size-lg)",
            color: "var(--color-text-secondary)",
            maxWidth: "800px",
            margin: "var(--space-md) auto 0"
          }}>
            Journey through Exton's history from 1918 to present day
          </p>
        </div>

        <div className="section">
          <div className="timeline-wrapper" style={{
            width: "100%",
            height: "700px",
            minHeight: "700px",
            position: "relative"
          }}>
            <Chrono
              items={data}
              mode="HORIZONTAL"
              slideShow={false}
              slideItemDuration={4500}
              cardHeight={300}
              theme={{
                primary: "#2563eb",
                secondary: "#f9fafb",
                cardBgColor: "#ffffff",
                cardForeColor: "#1f2937",
                titleColor: "#1f2937",
                titleColorActive: "#2563eb"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

