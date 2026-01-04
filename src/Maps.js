import React, { useEffect, useRef } from "react";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

// Define multiple locations with their details
const locations = [
  {
    id: 1,
    name: "Exton Mall",
    coordinates: [40.0314, -75.6236],
    address: "260 Exton Square",
    city: "Exton",
    state: "PA, US",
    color: "blue"
  },
  {
    id: 2,
    name: "American Helicopter Museum",
    coordinates: [39.991863, -75.578867],
    address: "1220 American Blvd",
    city: "West Chester",
    state: "PA, US",
    color: "red"
  },
  {
    id: 3,
    name: "Exton Park",
    coordinates: [40.0380, -75.6124],
    address: "611 Swedesford Road",
    city: "Exton",
    state: "PA, US",
    color: "green"
  },
  {
    id: 4,
    name: "Church Farm School",
    coordinates: [40.0328, -75.5951],
    address: "1001 Lincoln Hwy",
    city: "Exton",
    state: "PA, US",
    color: "orange"
  }
];

export default function Maps() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    // Fix for default marker icon issue in webpack
    delete leaflet.Icon.Default.prototype._getIconUrl;
    leaflet.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    });

    // Only create map if it doesn't exist
    if (!mapInstanceRef.current && mapRef.current) {
      // Calculate center point from all locations
      const avgLat = locations.reduce((sum, loc) => sum + loc.coordinates[0], 0) / locations.length;
      const avgLng = locations.reduce((sum, loc) => sum + loc.coordinates[1], 0) / locations.length;

      // Creates a leaflet map centered on average of all locations
      const map = leaflet.map(mapRef.current).setView([avgLat, avgLng], 11);

      // Use OpenStreetMap tiles (light, standard map) instead of dark theme
      leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(map);

      // Create a marker group to fit bounds to all markers
      const markerGroup = leaflet.featureGroup();

      // Add markers for each location
      locations.forEach((location) => {
        // Create custom colored marker icon
        const markerColor = location.color || 'blue';
        const iconUrl = `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${markerColor}.png`;
        const iconRetinaUrl = `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${markerColor}.png`;

        const customIcon = leaflet.icon({
          iconUrl: iconUrl,
          iconRetinaUrl: iconRetinaUrl,
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });

        const marker = leaflet.marker(location.coordinates, {
          icon: customIcon
        }).addTo(map);

        marker.bindPopup(`
          <div style="padding: 5px; min-width: 200px;">
            <h3 style="margin: 0 0 10px 0; color: #333; border-bottom: 2px solid #${markerColor === 'blue' ? '007bff' : markerColor === 'red' ? 'dc3545' : markerColor === 'green' ? '28a745' : 'ffc107'}; padding-bottom: 5px;">${location.name}</h3>
            <p style="margin: 5px 0;"><strong>Address:</strong> ${location.address}</p>
            <p style="margin: 5px 0;"><strong>City:</strong> ${location.city}</p>
            <p style="margin: 5px 0;"><strong>State:</strong> ${location.state}</p>
          </div>
        `);

        markersRef.current.push(marker);
        markerGroup.addLayer(marker);
      });

      // Fit map to show all markers
      map.fitBounds(markerGroup.getBounds().pad(0.1));

      // Open popup for first marker
      if (markersRef.current.length > 0) {
        markersRef.current[0].openPopup();
      }

      // Store map instance
      mapInstanceRef.current = map;

      // Invalidate size to ensure proper rendering
      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    }

    // Cleanup function to remove the map when component unmounts
    return () => {
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="maps-page" style={{ padding: "20px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Map</h1>
      <div style={{ padding: "20px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <p style={{ marginBottom: "20px", color: "#666", fontSize: "16px" }}>
          Explore Exton and its famous landmarks using the interactive map below. Each marker represents a key location in the area. Click on the markers to see more details about each location.
        </p>
        <div
          ref={mapRef}
          id="map"
          style={{
            width: "100%",
            height: "600px",
            border: "2px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}
        />
        <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f9f9f9", borderRadius: "5px" }}>
          <h3 style={{ marginTop: 0, color: "#333" }}>Locations ({locations.length})</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px", marginTop: "15px" }}>
            {locations.map((location) => (
              <div key={location.id} style={{ 
                padding: "12px", 
                backgroundColor: "white", 
                borderRadius: "5px",
                border: `2px solid ${location.color === 'blue' ? '#007bff' : location.color === 'red' ? '#dc3545' : location.color === 'green' ? '#28a745' : '#ffc107'}`,
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
              }}>
                <h4 style={{ margin: "0 0 8px 0", color: "#333" }}>{location.name}</h4>
                <p style={{ margin: "4px 0", fontSize: "14px", color: "#666" }}>
                  <strong>Address:</strong> {location.address}<br />
                  <strong>City:</strong> {location.city}, {location.state}<br />
                </p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "1px solid #ddd" }}>
            <h4 style={{ marginTop: 0, color: "#333" }}>Map Controls</h4>
            <ul style={{ margin: "10px 0", paddingLeft: "20px", color: "#666" }}>
              <li>Click and drag to pan around the map</li>
              <li>Use the +/- buttons or scroll to zoom in and out</li>
              <li>Click on any marker to see location details</li>
              <li>The map automatically fits to show all {locations.length} locations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}