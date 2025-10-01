import React, { useState } from 'react';
import styles from './LayerSidebar.module.css';

/**
 * Alternative LayerSidebar Component using CSS Modules
 * This version uses external CSS instead of inline styles
 * 
 * To use this version:
 * 1. Replace the inline-styled LayerSidebar with this file
 * 2. Ensure LayerSidebar.module.css is in the same directory
 * 3. Your bundler should support CSS modules (Vite does by default)
 */

interface Layer {
  id: string;
  name: string;
  color: string;
  icon: string;
  description?: string;
}

interface LayerSidebarProps {
  layers?: Layer[];
  onLayerSelect?: (layerId: string) => void;
  defaultSelectedLayer?: string;
  width?: string;
  className?: string;
}

const LayerSidebarWithCSS: React.FC<LayerSidebarProps> = ({
  layers,
  onLayerSelect,
  defaultSelectedLayer,
  width,
  className = ''
}) => {
  const defaultLayers: Layer[] = [
    {
      id: 'forest-cover',
      name: 'Forest Cover',
      color: '#22c55e',
      icon: '🌲',
      description: 'Shows forest coverage areas'
    },
    {
      id: 'settlements',
      name: 'Settlements',
      color: '#3b82f6',
      icon: '🏠',
      description: 'Human settlement areas'
    },
    {
      id: 'ifr-claims',
      name: 'IFR Claims',
      color: '#f97316',
      icon: '📍',
      description: 'Individual Forest Rights claims'
    },
    {
      id: 'cfr-claims',
      name: 'CFR Claims',
      color: '#a855f7',
      icon: '📍',
      description: 'Community Forest Rights claims'
    },
    {
      id: 'satellite',
      name: 'Satellite View',
      color: '#6b7280',
      icon: '🛰️',
      description: 'Satellite imagery overlay'
    }
  ];

  const layerData = layers || defaultLayers;
  const [selectedLayer, setSelectedLayer] = useState<string>(
    defaultSelectedLayer || layerData[0]?.id || ''
  );

  const handleLayerClick = (layerId: string) => {
    setSelectedLayer(layerId);
    if (onLayerSelect) {
      onLayerSelect(layerId);
    }
  };

  return (
    <div 
      className={`${styles.sidebar} ${className}`}
      style={width ? { width } : undefined}
    >
      {/* Header */}
      <div className={styles.header}>
        Map Layers
      </div>

      {/* Layer List */}
      <div className={styles.layerList}>
        {layerData.map((layer) => {
          const isSelected = selectedLayer === layer.id;

          return (
            <button
              key={layer.id}
              type="button"
              className={`${styles.layerItem} ${isSelected ? styles.selected : ''}`}
              onClick={() => handleLayerClick(layer.id)}
              aria-label={`Select ${layer.name} layer${isSelected ? ' (currently selected)' : ''}`}
              aria-pressed={isSelected}
            >
              {/* Color Indicator */}
              <div
                className={styles.colorIndicator}
                style={{ backgroundColor: layer.color }}
              />

              {/* Icon */}
              <span className={styles.icon}>
                {layer.icon}
              </span>

              {/* Text Content */}
              <div className={styles.textContainer}>
                <div className={styles.layerName}>
                  {layer.name}
                </div>
                {layer.description && (
                  <div className={styles.layerDescription}>
                    {layer.description}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        Selected: {layerData.find(layer => layer.id === selectedLayer)?.name || 'None'}
      </div>
    </div>
  );
};

export default LayerSidebarWithCSS;