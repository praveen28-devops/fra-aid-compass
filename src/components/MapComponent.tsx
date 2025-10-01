import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
// This is needed because webpack doesn't include the default marker images
delete (L.Icon.Default.prototype as L.Icon.Default & { _getIconUrl?: () => string })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

/**
 * Custom component to add zoom control and scale control to the map
 * This component uses the useMap hook to access the map instance
 */
const MapControls: React.FC = () => {
  const map = useMap();

  React.useEffect(() => {
    // Add zoom control to the map (top-left corner by default)
    const zoomControl = L.control.zoom({
      position: 'topleft' // You can change this to 'topright', 'bottomleft', or 'bottomright'
    });
    map.addControl(zoomControl);

    // Add scale control to the map (bottom-left corner by default)
    const scaleControl = L.control.scale({
      position: 'bottomleft', // Position of the scale control
      metric: true, // Show metric units (meters/kilometers)
      imperial: false, // Don't show imperial units (feet/miles)
      maxWidth: 150 // Maximum width of the scale control in pixels
    });
    map.addControl(scaleControl);

    // Cleanup function to remove controls when component unmounts
    return () => {
      map.removeControl(zoomControl);
      map.removeControl(scaleControl);
    };
  }, [map]);

  return null; // This component doesn't render anything visible
};

/**
 * Props interface for the MapComponent
 */
interface MapComponentProps {
  /** Custom width for the map container (default: 100%) */
  width?: string;
  /** Custom height for the map container (default: 500px) */
  height?: string;
  /** Custom CSS class for the map container */
  className?: string;
}

/**
 * MapComponent - A React functional component that displays an interactive OpenStreetMap
 * using Leaflet.js library through react-leaflet wrapper
 * 
 * Features:
 * - Interactive map centered on India
 * - OpenStreetMap tiles as base layer
 * - Zoom controls (+ and - buttons)
 * - Scale control showing distance measurements
 * - Responsive container with customizable dimensions
 * - TypeScript support with proper type definitions
 */
const MapComponent: React.FC<MapComponentProps> = ({ 
  width = '100%', 
  height = '500px', 
  className = '' 
}) => {
  // India's approximate center coordinates
  const indiaCenter: [number, number] = [20.5937, 78.9629];
  const initialZoom = 5;

  return (
    <div 
      className={`map-container ${className}`}
      style={{ 
        width, 
        height,
        border: '2px solid #e2e8f0', // Light gray border
        borderRadius: '8px', // Rounded corners
        overflow: 'hidden' // Ensure map doesn't overflow the container
      }}
    >
      {/* 
        MapContainer is the main component from react-leaflet
        It creates the Leaflet map instance and provides context for child components
      */}
      <MapContainer
        center={indiaCenter} // Initial center position [latitude, longitude]
        zoom={initialZoom} // Initial zoom level (1-18, higher = more zoomed in)
        style={{ height: '100%', width: '100%' }} // Make map fill the container
        zoomControl={false} // Disable default zoom control (we'll add custom one)
        attributionControl={true} // Keep attribution control (required for OpenStreetMap)
      >
        {/* 
          TileLayer component loads and displays map tiles
          OpenStreetMap provides free, open-source map tiles
        */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // OpenStreetMap tile server URL
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' // Required attribution
          maxZoom={18} // Maximum zoom level supported
          minZoom={3} // Minimum zoom level to prevent over-zooming out
        />
        
        {/* 
          Add custom controls (zoom and scale)
          This component is defined above and uses useMap hook
        */}
        <MapControls />
      </MapContainer>
    </div>
  );
};

export default MapComponent;

/**
 * USAGE INSTRUCTIONS:
 * 
 * 1. First install the required packages:
 *    npm install leaflet react-leaflet @types/leaflet
 * 
 * 2. Import the component in your React file:
 *    import MapComponent from './components/MapComponent';
 * 
 * 3. Use the component in your JSX:
 *    <MapComponent />
 * 
 * 4. Customize with props (optional):
 *    <MapComponent 
 *      width="800px" 
 *      height="600px" 
 *      className="my-custom-map" 
 *    />
 * 
 * IMPORTANT: Make sure to include Leaflet CSS in your app:
 * - The CSS is already imported in this file: 'leaflet/dist/leaflet.css'
 * - If you have issues with marker icons, the fix is included above
 * 
 * CUSTOMIZATION OPTIONS:
 * - Change initial position by modifying indiaCenter coordinates
 * - Adjust initial zoom level by changing initialZoom value
 * - Switch to different tile providers (Mapbox, Google, etc.) by changing TileLayer url
 * - Add markers, popups, polygons, and other Leaflet features as needed
 */