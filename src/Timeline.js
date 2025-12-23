import React from "react";
import { Chrono } from "react-chrono";
import data from "./data";

export default function Timeline() {
  // Map data to react-chrono's expected format
  const chronoData = data.map(item => ({
    title: item.title,
    cardTitle: item.contentTitle,
    cardSubtitle: item.contentText,
    cardDetailedText: item.contentDetailedText,
    media: item.media
  }));

  return (
    <div className="timeline-page" style={{ padding: "20px" }}>
      <h1>Timeline</h1>
      <div style={{ width: "100%", height: "700px", minHeight: "700px" }}>
        <Chrono 
          items={data} 
          mode="HORIZONTAL"
          content={{
            allowHTML: true
          }}
        />
      </div>
    </div>
  );
}

