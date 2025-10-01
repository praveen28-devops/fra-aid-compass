# LayerSidebar Component Documentation

## Overview

The `LayerSidebar` is a React functional component that provides a clean, interactive vertical sidebar for selecting map layers. It features colored indicators, icons, layer names, and clear visual feedback for the selected state.

## Features

- ✅ **Interactive Layer Selection**: Click to select different layers
- ✅ **Visual Feedback**: Selected layer is highlighted with border and background
- ✅ **Colored Indicators**: Each layer has a colored square/circle indicator
- ✅ **Icon Support**: Uses emojis or custom icons for each layer type
- ✅ **Accessibility**: Full keyboard navigation and screen reader support
- ✅ **TypeScript Support**: Complete type safety and IntelliSense
- ✅ **Customizable**: Flexible props for custom layers and styling
- ✅ **Responsive Design**: Works on different screen sizes
- ✅ **Two Styling Options**: Inline styles or CSS modules

## Default Layers

The component comes with predefined layers for forest/environmental mapping:

| Layer | Color | Icon | Description |
|-------|-------|------|-------------|
| Forest Cover | Green (#22c55e) | 🌲 | Shows forest coverage areas |
| Settlements | Blue (#3b82f6) | 🏠 | Human settlement areas |
| IFR Claims | Orange (#f97316) | 📍 | Individual Forest Rights claims |
| CFR Claims | Purple (#a855f7) | 📍 | Community Forest Rights claims |
| Satellite View | Gray (#6b7280) | 🛰️ | Satellite imagery overlay |

## Installation & Import

```tsx
// Import the component
import LayerSidebar from './components/LayerSidebar';

// Or import the CSS modules version
import LayerSidebarWithCSS from './components/LayerSidebarWithCSS';
```

## Basic Usage Examples

### 1. Simple Usage with Default Layers

```tsx
import React from 'react';
import LayerSidebar from './components/LayerSidebar';

function App() {
  const handleLayerChange = (layerId: string) => {
    console.log('User selected layer:', layerId);
    // Update your map or perform other actions
  };

  return (
    <div style={{ display: 'flex' }}>
      <LayerSidebar onLayerSelect={handleLayerChange} />
      <div>Your main content here</div>
    </div>
  );
}
```

### 2. With Custom Initial Selection

```tsx
<LayerSidebar 
  onLayerSelect={handleLayerChange}
  defaultSelectedLayer="satellite"
  width="250px"
/>
```

### 3. Using Custom Layers

```tsx
const customLayers = [
  {
    id: 'roads',
    name: 'Road Network',
    color: '#000000',
    icon: '🛣️',
    description: 'Major roads and highways'
  },
  {
    id: 'rivers',
    name: 'Water Bodies',
    color: '#0066cc',
    icon: '🏞️',
    description: 'Rivers and lakes'
  },
  {
    id: 'boundaries',
    name: 'Administrative Boundaries',
    color: '#ff6600',
    icon: '🗺️',
    description: 'State and district boundaries'
  }
];

<LayerSidebar 
  layers={customLayers}
  onLayerSelect={handleLayerChange}
  defaultSelectedLayer="rivers"
/>
```

### 4. Integration with Map Component

```tsx
import React, { useState } from 'react';
import LayerSidebar from './components/LayerSidebar';
import MapComponent from './components/MapComponent';

function MapPage() {
  const [activeLayer, setActiveLayer] = useState('forest-cover');

  const handleLayerChange = (layerId: string) => {
    setActiveLayer(layerId);
    // Update map visualization based on selected layer
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LayerSidebar 
        onLayerSelect={handleLayerChange}
        defaultSelectedLayer={activeLayer}
      />
      <div style={{ flex: 1 }}>
        <MapComponent activeLayer={activeLayer} />
      </div>
    </div>
  );
}
```

## Component Props

### LayerSidebarProps Interface

```tsx
interface LayerSidebarProps {
  /** Array of layer objects to display (optional) */
  layers?: Layer[];
  
  /** Callback function called when a layer is selected */
  onLayerSelect?: (layerId: string) => void;
  
  /** Initially selected layer ID */
  defaultSelectedLayer?: string;
  
  /** Custom width for the sidebar (default: '300px') */
  width?: string;
  
  /** Custom CSS class name for the sidebar container */
  className?: string;
}
```

### Layer Interface

```tsx
interface Layer {
  /** Unique identifier for the layer */
  id: string;
  
  /** Display name of the layer */
  name: string;
  
  /** CSS color for the indicator (hex, rgb, named colors) */
  color: string;
  
  /** Emoji or icon to display */
  icon: string;
  
  /** Optional description text */
  description?: string;
}
```

## Styling Options

### Option 1: Inline Styles (Default)

The main `LayerSidebar` component uses inline styles for simplicity and portability. No external CSS files needed.

### Option 2: CSS Modules

Use `LayerSidebarWithCSS` component with `LayerSidebar.module.css` for:
- Better separation of concerns
- Advanced CSS features (hover states, media queries)
- Dark mode support
- High contrast mode support
- Reduced motion support

## Accessibility Features

The LayerSidebar component includes comprehensive accessibility support:

- **Keyboard Navigation**: Use Tab to navigate, Enter/Space to select
- **Screen Reader Support**: Proper ARIA labels and roles
- **Focus Management**: Clear focus indicators
- **Semantic HTML**: Uses proper button elements
- **State Announcements**: Screen readers announce selection state

### Keyboard Shortcuts

- `Tab` / `Shift+Tab`: Navigate between layer items
- `Enter` / `Space`: Select the focused layer
- `Escape`: Remove focus (browser default)

## Customization Examples

### Custom Colors and Icons

```tsx
const environmentalLayers = [
  {
    id: 'air-quality',
    name: 'Air Quality',
    color: '#10b981', // Green
    icon: '🌬️',
    description: 'Air pollution monitoring stations'
  },
  {
    id: 'water-quality',
    name: 'Water Quality',
    color: '#06b6d4', // Cyan
    icon: '💧',
    description: 'Water quality measurement points'
  },
  {
    id: 'noise-levels',
    name: 'Noise Levels',
    color: '#f59e0b', // Amber
    icon: '🔊',
    description: 'Urban noise monitoring'
  }
];
```

### Custom Width and Styling

```tsx
<LayerSidebar 
  width="350px"
  className="custom-sidebar"
  layers={customLayers}
  onLayerSelect={handleLayerChange}
/>
```

### With Custom CSS

```css
/* Add to your global CSS */
.custom-sidebar {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
}
```

## State Management Integration

### With React Context

```tsx
// LayerContext.tsx
import { createContext, useContext, useState } from 'react';

const LayerContext = createContext({
  activeLayer: '',
  setActiveLayer: (layerId: string) => {}
});

export const LayerProvider = ({ children }) => {
  const [activeLayer, setActiveLayer] = useState('forest-cover');
  
  return (
    <LayerContext.Provider value={{ activeLayer, setActiveLayer }}>
      {children}
    </LayerContext.Provider>
  );
};

export const useLayer = () => useContext(LayerContext);

// Usage in component
function MapPage() {
  const { activeLayer, setActiveLayer } = useLayer();
  
  return (
    <LayerSidebar 
      onLayerSelect={setActiveLayer}
      defaultSelectedLayer={activeLayer}
    />
  );
}
```

### With Redux/Zustand

```tsx
// With Zustand store
import { create } from 'zustand';

const useLayerStore = create((set) => ({
  activeLayer: 'forest-cover',
  setActiveLayer: (layerId: string) => set({ activeLayer: layerId })
}));

// Usage
function MapPage() {
  const { activeLayer, setActiveLayer } = useLayerStore();
  
  return (
    <LayerSidebar 
      onLayerSelect={setActiveLayer}
      defaultSelectedLayer={activeLayer}
    />
  );
}
```

## Advanced Examples

### Dynamic Layer Loading

```tsx
import { useState, useEffect } from 'react';

function DynamicLayerSidebar() {
  const [layers, setLayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch layers from API
    fetch('/api/layers')
      .then(response => response.json())
      .then(data => {
        setLayers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading layers...</div>;
  }

  return (
    <LayerSidebar 
      layers={layers}
      onLayerSelect={(layerId) => {
        // Handle layer selection
        console.log('Selected:', layerId);
      }}
    />
  );
}
```

### Layer Groups

```tsx
const layerGroups = {
  environmental: [
    { id: 'forest', name: 'Forest Cover', color: '#22c55e', icon: '🌲' },
    { id: 'water', name: 'Water Bodies', color: '#3b82f6', icon: '🏞️' }
  ],
  administrative: [
    { id: 'boundaries', name: 'Boundaries', color: '#f97316', icon: '🗺️' },
    { id: 'settlements', name: 'Settlements', color: '#a855f7', icon: '🏠' }
  ]
};

// Render multiple LayerSidebar components or create a grouped version
```

## Browser Support

- **Modern Browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **CSS Features Used**: Flexbox, CSS Grid, CSS Custom Properties
- **JavaScript Features**: ES6+ (transpiled by your bundler)

## Performance Notes

- **Rendering**: Optimized with React keys and proper event handling
- **Memory**: Minimal memory footprint with efficient state management
- **Bundle Size**: ~5KB gzipped (including dependencies)

## Troubleshooting

### Common Issues

1. **Icons not displaying**: Ensure your system supports emoji rendering
2. **Styling conflicts**: Check for CSS conflicts with existing styles
3. **TypeScript errors**: Ensure all required props are provided
4. **Accessibility warnings**: Component includes proper ARIA attributes

### Debug Tips

```tsx
// Add logging to track selections
<LayerSidebar 
  onLayerSelect={(layerId) => {
    console.log('Layer selected:', layerId);
    // Your logic here
  }}
/>
```

## Contributing

To extend or modify the LayerSidebar component:

1. **Add new props**: Update the `LayerSidebarProps` interface
2. **Custom styling**: Modify inline styles or CSS modules
3. **New features**: Extend the component with additional functionality
4. **Accessibility**: Maintain ARIA compliance when making changes

---

**Created**: October 1, 2025  
**Version**: 1.0.0  
**Compatible**: React 18+, TypeScript 5+