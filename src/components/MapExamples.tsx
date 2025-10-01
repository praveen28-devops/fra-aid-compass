import React from 'react';
import MapComponent from './MapComponent';

/**
 * Example: How to create a MapComponent with Markers
 * This example shows the concept - you would need to modify MapComponent to accept children
 * or create a separate component that wraps MapContainer directly
 */
const MapWithMarkersExample: React.FC = () => {
  // Sample locations in India (for reference)
  // const locations = [
  //   { id: 1, name: "New Delhi", position: [28.6139, 77.2090] },
  //   { id: 2, name: "Mumbai", position: [19.0760, 72.8777] },
  //   { id: 3, name: "Bangalore", position: [12.9716, 77.5946] },
  //   { id: 4, name: "Chennai", position: [13.0827, 80.2707] },
  //   { id: 5, name: "Kolkata", position: [22.5726, 88.3639] },
  // ];

  return (
    <div>
      <h2>Map with City Markers (Concept Example)</h2>
      <p>To add markers, you would extend the MapComponent or create a new wrapper component.</p>
      <MapComponent height="600px" />
      
      {/* Conceptual code for adding markers:
      <MapContainer center={[20.5937, 78.9629]} zoom={5}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations.map((location) => (
          <Marker key={location.id} position={location.position}>
            <Popup>
              <div>
                <h3>{location.name}</h3>
                <p>Coordinates: {location.position[0]}, {location.position[1]}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      */}
    </div>
  );
};

/**
 * Example: Multiple Maps in One Page
 * This example shows how to use multiple MapComponents with different configurations
 */
const MultipleMapExample: React.FC = () => {
  return (
    <div>
      <h2>Multiple Maps Example</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* India Overview */}
        <div>
          <h3>India Overview</h3>
          <MapComponent 
            height="400px"
            className="border-2 border-blue-500"
          />
        </div>
        
        {/* Delhi Close-up */}
        <div>
          <h3>Delhi Close-up</h3>
          <MapComponent 
            height="400px"
            className="border-2 border-green-500"
            // Note: To customize center, you'd need to modify the component
            // or pass center as a prop (requires component modification)
          />
        </div>
      </div>
    </div>
  );
};

/**
 * Example: Responsive Map Container
 * This example shows how to make the map responsive to different screen sizes
 */
const ResponsiveMapExample: React.FC = () => {
  return (
    <div>
      <h2>Responsive Map</h2>
      <div 
        style={{ 
          width: '100%', 
          maxWidth: '1200px', 
          margin: '0 auto',
          aspectRatio: '16/9' // Maintains aspect ratio
        }}
      >
        <MapComponent 
          width="100%" 
          height="100%" 
          className="responsive-map"
        />
      </div>
      
      {/* CSS would be added to your CSS file:
        @media (max-width: 768px) {
          .responsive-map {
            height: 300px !important;
          }
        }
        
        @media (max-width: 480px) {
          .responsive-map {
            height: 250px !important;
          }
        }
      */}
    </div>
  );
};

export { MapWithMarkersExample, MultipleMapExample, ResponsiveMapExample };