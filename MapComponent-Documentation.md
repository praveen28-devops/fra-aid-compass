# MapComponent Documentation

## Overview

The `MapComponent` is a React functional component that provides an interactive OpenStreetMap-based map using Leaflet.js. It's designed to be beginner-friendly with comprehensive comments and TypeScript support.

## Features

- ✅ **Interactive OpenStreetMap**: Uses free OpenStreetMap tiles
- ✅ **Centered on India**: Initial view at latitude 20.5937, longitude 78.9629
- ✅ **Zoom Level 5**: Perfect initial zoom to see entire India
- ✅ **Zoom Controls**: + and - buttons for zooming in/out
- ✅ **Scale Control**: Shows distance measurements on the map
- ✅ **Responsive Design**: Full width container with 500px height (customizable)
- ✅ **TypeScript Support**: Full type safety and IntelliSense support
- ✅ **Beginner-friendly**: Extensive comments explaining each part

## Installation

### Step 1: Install Required Packages

```bash
npm install leaflet react-leaflet @types/leaflet --legacy-peer-deps
```

**Note**: We use `--legacy-peer-deps` to handle version compatibility between React 18 and react-leaflet.

### Step 2: Import CSS (Already Done)

The Leaflet CSS is automatically imported in both:
- `src/components/MapComponent.tsx` (component-level import)
- `src/index.css` (global import)

## Usage Examples

### Basic Usage

```tsx
import MapComponent from '@/components/MapComponent';

function App() {
  return (
    <div>
      <h1>My Map Application</h1>
      <MapComponent />
    </div>
  );
}
```

### Custom Dimensions

```tsx
import MapComponent from '@/components/MapComponent';

function App() {
  return (
    <div>
      <h1>Custom Sized Map</h1>
      <MapComponent 
        width="800px" 
        height="600px" 
        className="my-custom-map" 
      />
    </div>
  );
}
```

### Full Screen Map

```tsx
import MapComponent from '@/components/MapComponent';

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <MapComponent 
        width="100%" 
        height="100vh" 
      />
    </div>
  );
}
```

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `string` | `'100%'` | Width of the map container |
| `height` | `string` | `'500px'` | Height of the map container |
| `className` | `string` | `''` | Additional CSS classes |

## File Structure

```
src/
├── components/
│   └── MapComponent.tsx      # Main map component
├── pages/
│   └── Map.tsx              # Page that uses the map component
└── index.css                # Global styles with Leaflet CSS import
```

## Component Architecture

### MapComponent.tsx
The main component with the following structure:

1. **Imports**: React-Leaflet components and Leaflet CSS
2. **Icon Fix**: Fixes default marker icons for webpack
3. **MapControls**: Custom component for adding zoom and scale controls
4. **MapComponent**: Main component with TypeScript props interface

### Map.tsx (Updated)
The page component has been updated to:
- Import the new MapComponent
- Replace the placeholder with the actual interactive map
- Maintain the existing sidebar and UI structure

## Key Features Explained

### 1. Interactive Controls

```tsx
const MapControls: React.FC = () => {
  const map = useMap(); // Hook to access map instance
  
  React.useEffect(() => {
    // Add zoom control (+ and - buttons)
    const zoomControl = L.control.zoom({ position: 'topleft' });
    map.addControl(zoomControl);
    
    // Add scale control (distance measurements)
    const scaleControl = L.control.scale({
      position: 'bottomleft',
      metric: true,
      imperial: false
    });
    map.addControl(scaleControl);
    
    // Cleanup when component unmounts
    return () => {
      map.removeControl(zoomControl);
      map.removeControl(scaleControl);
    };
  }, [map]);
  
  return null;
};
```

### 2. Map Configuration

```tsx
<MapContainer
  center={[20.5937, 78.9629]} // India center coordinates
  zoom={5}                     // Initial zoom level
  zoomControl={false}          // Disable default controls (we add custom ones)
  attributionControl={true}    // Keep attribution (required for OSM)
>
```

### 3. Tile Layer Setup

```tsx
<TileLayer
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  attribution='&copy; OpenStreetMap contributors'
  maxZoom={18}  // Maximum zoom level
  minZoom={3}   // Minimum zoom level
/>
```

## Customization Options

### Change Map Center
```tsx
// Change the initial center coordinates
const indiaCenter: [number, number] = [28.6139, 77.2090]; // Delhi
const initialZoom = 10; // Closer zoom for city view
```

### Different Tile Provider
```tsx
// Use different map tiles (requires API key for some providers)
<TileLayer
  url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
  // ... other props
/>
```

### Add Markers
```tsx
import { Marker, Popup } from 'react-leaflet';

// Inside MapContainer
<Marker position={[28.6139, 77.2090]}>
  <Popup>
    Delhi, India
  </Popup>
</Marker>
```

## Troubleshooting

### Common Issues

1. **Map not displaying**: Ensure Leaflet CSS is imported
2. **Marker icons missing**: The icon fix in MapComponent.tsx should resolve this
3. **TypeScript errors**: Make sure @types/leaflet is installed
4. **Version conflicts**: Use --legacy-peer-deps flag during installation

### Development Tips

1. **Hot Reload**: The map will reload automatically during development
2. **Performance**: The map is optimized for React's reconciliation
3. **Memory Management**: Controls are properly cleaned up on unmount
4. **Responsive**: Uses percentage-based dimensions for responsiveness

## Next Steps

1. **Add Markers**: Use `Marker` component from react-leaflet
2. **Add Popups**: Use `Popup` component for information display
3. **Add Layers**: Use `LayersControl` for layer switching
4. **Add Drawing**: Use leaflet-draw plugin for drawing tools
5. **Add GeoJSON**: Use `GeoJSON` component for complex data visualization

## Resources

- [React-Leaflet Documentation](https://react-leaflet.js.org/)
- [Leaflet.js Documentation](https://leafletjs.com/)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [Leaflet Plugins](https://leafletjs.com/plugins.html)

---

**Created**: October 1, 2025  
**Version**: 1.0.0  
**Compatible**: React 18+, TypeScript 5+, Leaflet 1.7+