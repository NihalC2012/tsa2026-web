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

  // Function to handle location card click
  const handleLocationClick = (location) => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Find the marker for this location
    const markerIndex = location.id - 1; // Arrays are 0-indexed
    const marker = markersRef.current[markerIndex];

    if (marker) {
      // Zoom and pan to the location
      map.setView(location.coordinates, 15, {
        animate: true,
        duration: 1
      });

      // Open the popup for this marker
      setTimeout(() => {
        marker.openPopup();
      }, 500); // Delay to allow pan animation to complete
    }
  };

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
    <div className="maps-page">
      <div className="page-container">
        <div style={{ textAlign: "center", marginBottom: "var(--space-2xl)" }}>
          <h1>Explore Exton</h1>
          <p style={{
            fontSize: "var(--font-size-lg)",
            color: "var(--color-text-secondary)",
            maxWidth: "800px",
            margin: "var(--space-md) auto 0"
          }}>
            Discover famous landmarks and key locations in the Exton area through our interactive map
          </p>
        </div>

        <div className="section">
          <div
            ref={mapRef}
            id="map"
            style={{
              width: "100%",
              height: "600px",
              borderRadius: "var(--border-radius-lg)",
              boxShadow: "var(--shadow-md)",
              marginBottom: "var(--space-xl)"
            }}
          />

          <div className="section-light">
            <h3 style={{ marginBottom: "var(--space-lg)" }}>
              Featured Locations ({locations.length})
            </h3>
            <div className="grid-4">
              {locations.map((location) => (
                <div
                  key={location.id}
                  className="card"
                  onClick={() => handleLocationClick(location)}
                  style={{
                    borderTop: `4px solid ${
                      location.color === 'blue' ? 'var(--color-primary)' :
                      location.color === 'red' ? 'var(--color-error)' :
                      location.color === 'green' ? 'var(--color-success)' :
                      'var(--color-warning)'
                    }`,
                    cursor: 'pointer'
                  }}
                >
                  <h4 className="card-title">{location.name}</h4>
                  <p className="card-text" style={{ fontSize: "var(--font-size-sm)" }}>
                    <strong>Address:</strong> {location.address}<br />
                    <strong>City:</strong> {location.city}, {location.state}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            marginTop: "var(--space-xl)",
            padding: "var(--space-xl)",
            backgroundColor: "var(--color-background-subtle)",
            borderRadius: "var(--border-radius-lg)"
          }}>
            <h4 style={{ marginBottom: "var(--space-md)" }}>Map Controls</h4>
            <ul style={{
              margin: 0,
              paddingLeft: "var(--space-xl)",
              color: "var(--color-text-secondary)",
              lineHeight: "var(--line-height-relaxed)"
            }}>
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