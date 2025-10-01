import React, { useState } from 'react';

/**
 * Interface defining the structure of a map layer
 * This helps with TypeScript type checking and code completion
 */
interface Layer {
  id: string;           // Unique identifier for the layer
  name: string;         // Display name of the layer
  color: string;        // CSS color for the indicator (e.g., '#green', 'rgb(0,255,0)')
  icon: string;         // Emoji or icon to display
  description?: string; // Optional description for the layer
}

/**
 * Props interface for the LayerSidebar component
 * This defines what properties can be passed to the component
 */
interface LayerSidebarProps {
  /** Array of layer objects to display */
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

/**
 * LayerSidebar Component
 * 
 * A React functional component that displays a vertical sidebar with selectable map layers.
 * Each layer shows a colored indicator, an icon, and the layer name.
 * 
 * Features:
 * - Click to select different layers
 * - Visual feedback for selected layer (highlighted border and background)
 * - Customizable layer data
 * - TypeScript support
 * - Responsive design with clean spacing
 * - Beginner-friendly with extensive comments
 */
const LayerSidebar: React.FC<LayerSidebarProps> = ({
  layers,
  onLayerSelect,
  defaultSelectedLayer,
  width = '300px',
  className = ''
}) => {
  // Default layer data if none provided
  const defaultLayers: Layer[] = [
    {
      id: 'forest-cover',
      name: 'Forest Cover',
      color: '#22c55e', // Green color
      icon: '🌲',
      description: 'Shows forest coverage areas'
    },
    {
      id: 'settlements',
      name: 'Settlements',
      color: '#3b82f6', // Blue color
      icon: '🏠',
      description: 'Human settlement areas'
    },
    {
      id: 'ifr-claims',
      name: 'IFR Claims',
      color: '#f97316', // Orange color
      icon: '📍',
      description: 'Individual Forest Rights claims'
    },
    {
      id: 'cfr-claims',
      name: 'CFR Claims',
      color: '#a855f7', // Purple color
      icon: '📍',
      description: 'Community Forest Rights claims'
    },
    {
      id: 'satellite',
      name: 'Satellite View',
      color: '#6b7280', // Gray color
      icon: '🛰️',
      description: 'Satellite imagery overlay'
    }
  ];

  // Use provided layers or fall back to default layers
  const layerData = layers || defaultLayers;

  // State to track which layer is currently selected
  // useState is a React hook that manages component state
  const [selectedLayer, setSelectedLayer] = useState<string>(
    defaultSelectedLayer || layerData[0]?.id || ''
  );

  /**
   * Handles layer selection when a user clicks on a layer item
   * @param layerId - The ID of the selected layer
   */
  const handleLayerClick = (layerId: string) => {
    // Update the internal selected state
    setSelectedLayer(layerId);
    
    // Call the parent component's callback function if provided
    // This allows the parent to know which layer was selected
    if (onLayerSelect) {
      onLayerSelect(layerId);
    }
  };

  // Inline styles for the sidebar components
  // Using inline styles for simplicity and to keep everything in one file
  const sidebarStyles: React.CSSProperties = {
    width: width,
    height: '100%',
    backgroundColor: '#ffffff', // White background
    border: '1px solid #e5e7eb', // Light gray border
    borderRadius: '8px', // Rounded corners
    padding: '16px', // Internal spacing
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', // Subtle shadow
    fontFamily: 'system-ui, -apple-system, sans-serif' // Clean system font
  };

  const headerStyles: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#374151', // Dark gray text
    marginBottom: '16px',
    paddingBottom: '8px',
    borderBottom: '2px solid #f3f4f6' // Light border under header
  };

  const layerListStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px' // Space between layer items
  };

  /**
   * Generates styles for individual layer items
   * @param isSelected - Whether this layer is currently selected
   * @returns CSS properties object
   */
  const getLayerItemStyles = (isSelected: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px', // Space between elements in the layer item
    padding: '12px',
    borderRadius: '6px',
    cursor: 'pointer', // Show pointer cursor on hover
    transition: 'all 0.2s ease', // Smooth transitions for interactions
    backgroundColor: isSelected ? '#f0f9ff' : 'transparent', // Light blue bg when selected
    border: isSelected ? '2px solid #3b82f6' : '2px solid transparent' // Blue border when selected
  });

  const colorIndicatorStyles: React.CSSProperties = {
    width: '16px',
    height: '16px',
    borderRadius: '3px', // Slightly rounded square
    flexShrink: 0 // Prevent the indicator from shrinking
  };

  const iconStyles: React.CSSProperties = {
    fontSize: '18px',
    flexShrink: 0 // Prevent the icon from shrinking
  };

  const textContainerStyles: React.CSSProperties = {
    flex: 1, // Take up remaining space
    display: 'flex',
    flexDirection: 'column'
  };

  const layerNameStyles: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: '500', // Medium font weight
    color: '#374151', // Dark gray
    margin: 0
  };

  const layerDescriptionStyles: React.CSSProperties = {
    fontSize: '12px',
    color: '#6b7280', // Lighter gray
    margin: '2px 0 0 0'
  };

  return (
    <div 
      className={`layer-sidebar ${className}`}
      style={sidebarStyles}
    >
      {/* Sidebar Header */}
      <div style={headerStyles}>
        Map Layers
      </div>

      {/* Layer List */}
      <div style={layerListStyles}>
        {layerData.map((layer) => {
          // Check if this layer is currently selected
          const isSelected = selectedLayer === layer.id;

          return (
            <button
              key={layer.id} // React needs unique keys for list items
              type="button" // Specify button type to prevent form submission
              style={{
                ...getLayerItemStyles(isSelected),
                border: isSelected ? '2px solid #3b82f6' : '2px solid transparent', // Override border
                background: 'none', // Remove default button background
                textAlign: 'left', // Align content to the left
                width: '100%' // Make button fill container width
              }}
              onClick={() => handleLayerClick(layer.id)}
              // Add hover effects using onMouseEnter/onMouseLeave
              onMouseEnter={(e) => {
                // Only apply hover effects if not selected
                if (!isSelected) {
                  e.currentTarget.style.backgroundColor = '#f9fafb';
                }
              }}
              onMouseLeave={(e) => {
                // Remove hover effects if not selected
                if (!isSelected) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
              // Accessibility: provide screen reader description
              aria-label={`Select ${layer.name} layer${isSelected ? ' (currently selected)' : ''}`}
              aria-pressed={isSelected} // Accessibility: indicates if button is pressed/selected
            >
              {/* Color Indicator Square */}
              <div
                style={{
                  ...colorIndicatorStyles,
                  backgroundColor: layer.color
                }}
              />

              {/* Layer Icon */}
              <span style={iconStyles}>
                {layer.icon}
              </span>

              {/* Layer Text Content */}
              <div style={textContainerStyles}>
                {/* Layer Name */}
                <div style={layerNameStyles}>
                  {layer.name}
                </div>
                
                {/* Optional Layer Description */}
                {layer.description && (
                  <div style={layerDescriptionStyles}>
                    {layer.description}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer with current selection info */}
      <div style={{
        marginTop: '16px',
        paddingTop: '16px',
        borderTop: '1px solid #e5e7eb',
        fontSize: '12px',
        color: '#6b7280'
      }}>
        Selected: {layerData.find(layer => layer.id === selectedLayer)?.name || 'None'}
      </div>
    </div>
  );
};

export default LayerSidebar;

/**
 * USAGE EXAMPLES:
 * 
 * 1. Basic Usage (with default layers):
 * ```tsx
 * import LayerSidebar from './components/LayerSidebar';
 * 
 * function App() {
 *   const handleLayerChange = (layerId: string) => {
 *     console.log('Selected layer:', layerId);
 *   };
 * 
 *   return (
 *     <div style={{ display: 'flex' }}>
 *       <LayerSidebar onLayerSelect={handleLayerChange} />
 *       <div>Main content here</div>
 *     </div>
 *   );
 * }
 * ```
 * 
 * 2. Custom Layers:
 * ```tsx
 * const customLayers = [
 *   { id: 'roads', name: 'Roads', color: '#000000', icon: '🛣️' },
 *   { id: 'rivers', name: 'Rivers', color: '#0066cc', icon: '🏞️' }
 * ];
 * 
 * <LayerSidebar 
 *   layers={customLayers}
 *   defaultSelectedLayer="roads"
 *   onLayerSelect={handleLayerChange}
 * />
 * ```
 * 
 * 3. Custom Styling:
 * ```tsx
 * <LayerSidebar 
 *   width="250px"
 *   className="my-custom-sidebar"
 *   onLayerSelect={handleLayerChange}
 * />
 * ```
 */