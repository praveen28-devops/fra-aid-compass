import React, { useState } from 'react';
import LayerSidebar from '@/components/LayerSidebar';

/**
 * Example integration of LayerSidebar with your existing Map page
 * This shows how to replace the current sidebar with the new LayerSidebar component
 */

// Convert your existing layer data to LayerSidebar format
const mapLayers = [
  {
    id: 'forest-cover',
    name: 'Forest Cover',
    color: '#22c55e', // Green (equivalent to bg-green-500)
    icon: '🌲',
    description: 'Forest coverage areas and vegetation'
  },
  {
    id: 'settlements',
    name: 'Settlements',
    color: '#3b82f6', // Blue (equivalent to bg-blue-500)
    icon: '🏠',
    description: 'Human settlement and urban areas'
  },
  {
    id: 'ifr-claims',
    name: 'IFR Claims',
    color: '#f97316', // Orange (equivalent to bg-orange-500)
    icon: '📍',
    description: 'Individual Forest Rights claims'
  },
  {
    id: 'cfr-claims',
    name: 'CFR Claims',
    color: '#a855f7', // Purple (equivalent to bg-purple-500)
    icon: '📍',
    description: 'Community Forest Rights claims'
  },
  {
    id: 'satellite',
    name: 'Satellite View',
    color: '#6b7280', // Gray (equivalent to bg-gray-500)
    icon: '🛰️',
    description: 'High-resolution satellite imagery'
  }
];

const MapPageWithLayerSidebar: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string>('forest-cover');

  const handleLayerSelect = (layerId: string) => {
    setActiveLayer(layerId);
    console.log('Selected layer:', layerId);
    // Here you can update your map display based on the selected layer
  };

  return (
    <div className="h-screen flex">
      {/* New LayerSidebar Component */}
      <div className="flex-shrink-0">
        <LayerSidebar
          layers={mapLayers}
          onLayerSelect={handleLayerSelect}
          defaultSelectedLayer={activeLayer}
          width="320px"
          className="h-full"
        />
      </div>

      {/* Map Area - Keep your existing map component */}
      <div className="flex-1 relative">
        {/* Your MapComponent goes here */}
        <div className="w-full h-full">
          {/* Placeholder - replace with your actual MapComponent */}
          <div className="w-full h-full bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Interactive Map</h2>
              <p className="text-gray-600 mb-4">Current Layer: {mapLayers.find(l => l.id === activeLayer)?.name}</p>
              <p className="text-sm text-gray-500">
                Your MapComponent with Leaflet integration will be displayed here
              </p>
            </div>
          </div>
        </div>

        {/* Optional: Top controls overlay */}
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <button className="bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            Export Map
          </button>
          <button className="bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            Full Screen
          </button>
        </div>

        {/* Optional: Bottom info panel */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="bg-white/95 backdrop-blur rounded-lg p-4 shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Active Layer:</span>
                <div className="font-medium">{mapLayers.find(l => l.id === activeLayer)?.name}</div>
              </div>
              <div>
                <span className="text-gray-500">Coordinates:</span>
                <div className="font-mono text-xs">23.2599°N, 77.4126°E</div>
              </div>
              <div>
                <span className="text-gray-500">Zoom Level:</span>
                <div className="font-mono">12</div>
              </div>
              <div>
                <span className="text-gray-500">Last Updated:</span>
                <div className="text-xs">2024-01-15</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPageWithLayerSidebar;

/**
 * To integrate this with your existing Map.tsx:
 * 
 * 1. Replace your current sidebar JSX with:
 *    <LayerSidebar layers={mapLayers} onLayerSelect={handleLayerSelect} />
 * 
 * 2. Update your layer data format to match the LayerSidebar interface
 * 
 * 3. Remove the old sidebar rendering code (the layer control section)
 * 
 * 4. Keep your existing MapComponent integration in the map area
 */