import React, { useEffect, useRef } from "react";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

// Define multiple locations with their details
const locations = [
  {
    id: 1,
    name: "Main Office",
    coordinates: [40.0326, -75.6275],
    address: "304 Main Street",
    city: "Exton",
    state: "PA, US",
    postalCode: "M5B 2K3",
    phone: "1-2729795000 Ext. 5192",
    color: "blue"
  },
  {
    id: 2,
    name: "Branch Office",
    coordinates: [40.0586, -75.6015],
    address: "150 Market Street",
    city: "West Chester",
    state: "PA, US",
    postalCode: "19380",
    phone: "1-6105551234",
    color: "red"
  },
  {
    id: 3,
    name: "Warehouse",
    coordinates: [40.0000, -75.6500],
    address: "500 Industrial Blvd",
    city: "Downingtown",
    state: "PA, US",
    postalCode: "19335",
    phone: "1-6105555678",
    color: "green"
  },
  {
    id: 4,
    name: "Retail Store",
    coordinates: [40.0450, -75.5800],
    address: "789 Commerce Drive",
    city: "Malvern",
    state: "PA, US",
    postalCode: "19355",
    phone: "1-6105559012",
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
            <p style="margin: 5px 0;"><strong>Postal Code:</strong> ${location.postalCode}</p>
            <p style="margin: 5px 0;"><strong>Phone:</strong> ${location.phone}</p>
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
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Maps</h1>
      <div style={{ padding: "20px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <p style={{ marginBottom: "20px", color: "#666", fontSize: "16px" }}>
          Explore locations on the interactive map below.
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
                  <strong>Phone:</strong> {location.phone}
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