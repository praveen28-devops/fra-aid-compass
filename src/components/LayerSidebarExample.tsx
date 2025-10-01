import React, { useState } from 'react';
import LayerSidebar from './LayerSidebar';

/**
 * Example App Component demonstrating LayerSidebar usage
 * This shows different ways to use the LayerSidebar component
 */
const LayerSidebarExample: React.FC = () => {
  // State to track the currently selected layer
  const [selectedLayer, setSelectedLayer] = useState<string>('forest-cover');

  /**
   * Handle layer selection changes
   * This function will be called whenever a user clicks on a layer
   */
  const handleLayerSelect = (layerId: string) => {
    console.log('User selected layer:', layerId);
    setSelectedLayer(layerId);
    
    // Here you could:
    // - Update a map component
    // - Fetch data for the selected layer
    // - Change the UI in other parts of your app
  };

  // Example of custom layer data
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
      description: 'Rivers, lakes, and streams'
    },
    {
      id: 'protected-areas',
      name: 'Protected Areas',
      color: '#228b22',
      icon: '🦅',
      description: 'National parks and reserves'
    }
  ];

  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif' 
    }}>
      {/* LayerSidebar Component */}
      <div style={{ flexShrink: 0 }}>
        <LayerSidebar 
          onLayerSelect={handleLayerSelect}
          defaultSelectedLayer="forest-cover"
          width="280px"
        />
      </div>

      {/* Main Content Area */}
      <div style={{ 
        flex: 1, 
        padding: '20px', 
        backgroundColor: '#f8fafc' 
      }}>
        <h1>LayerSidebar Component Demo</h1>
        
        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          marginBottom: '20px'
        }}>
          <h2>Current Selection</h2>
          <p><strong>Selected Layer ID:</strong> {selectedLayer}</p>
          <p>Click on different layers in the sidebar to see this update!</p>
        </div>

        {/* Example with Custom Layers */}
        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          marginBottom: '20px'
        }}>
          <h2>Custom Layers Example</h2>
          <p>Here's another LayerSidebar with custom layer data:</p>
          
          <div style={{ marginTop: '15px' }}>
            <LayerSidebar 
              layers={customLayers}
              onLayerSelect={(layerId) => console.log('Custom layer selected:', layerId)}
              defaultSelectedLayer="rivers"
              width="260px"
            />
          </div>
        </div>

        {/* Usage Instructions */}
        <div style={{ 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2>How to Use LayerSidebar</h2>
          
          <h3>1. Basic Usage:</h3>
          <pre style={{ 
            backgroundColor: '#f1f5f9', 
            padding: '15px', 
            borderRadius: '6px',
            overflow: 'auto' 
          }}>
{`import LayerSidebar from './components/LayerSidebar';

function App() {
  const handleLayerChange = (layerId) => {
    console.log('Selected:', layerId);
  };

  return (
    <LayerSidebar onLayerSelect={handleLayerChange} />
  );
}`}
          </pre>

          <h3>2. With Custom Layers:</h3>
          <pre style={{ 
            backgroundColor: '#f1f5f9', 
            padding: '15px', 
            borderRadius: '6px',
            overflow: 'auto' 
          }}>
{`const myLayers = [
  { 
    id: 'custom', 
    name: 'My Layer', 
    color: '#ff0000', 
    icon: '⭐' 
  }
];

<LayerSidebar 
  layers={myLayers}
  onLayerSelect={handleLayerChange}
/>`}
          </pre>

          <h3>3. Component Props:</h3>
          <ul>
            <li><code>layers</code>: Array of layer objects (optional)</li>
            <li><code>onLayerSelect</code>: Callback function when layer is selected</li>
            <li><code>defaultSelectedLayer</code>: Initially selected layer ID</li>
            <li><code>width</code>: Custom sidebar width (default: '300px')</li>
            <li><code>className</code>: Additional CSS classes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LayerSidebarExample;