import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MapComponent from "@/components/MapComponent";
import { 
  Layers, 
  MapPin, 
  Search, 
  Filter,
  Download,
  Info,
  Satellite,
  TreePine,
  Home,
  Plus,
  Minus
} from "lucide-react";

const MapPage = () => {
  const [activeLayer, setActiveLayer] = useState("forest-cover");
  
  const layers = [
    { id: "forest-cover", name: "Forest Cover", icon: TreePine, color: "bg-green-500" },
    { id: "settlements", name: "Settlements", icon: Home, color: "bg-blue-500" },
    { id: "ifr-claims", name: "IFR Claims", icon: MapPin, color: "bg-orange-500" },
    { id: "cfr-claims", name: "CFR Claims", icon: MapPin, color: "bg-purple-500" },
    { id: "satellite", name: "Satellite View", icon: Satellite, color: "bg-gray-500" },
  ];

  const mapControls = [
    { id: "zoom-in", icon: Plus, label: "Zoom In" },
    { id: "zoom-out", icon: Minus, label: "Zoom Out" },
    { id: "search", icon: Search, label: "Search Location" },
    { id: "filter", icon: Filter, label: "Filter Data" },
    { id: "download", icon: Download, label: "Export Map" },
    { id: "info", icon: Info, label: "Map Information" },
  ];

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-80 bg-background border-r flex flex-col">
        {/* Header */}
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-primary mb-2">Interactive WebGIS</h1>
          <p className="text-sm text-muted-foreground">
            Multi-layer forest mapping and FRA data visualization
          </p>
        </div>

        {/* Layer Control */}
        <div className="p-4 border-b">
          <h2 className="font-semibold mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            Map Layers
          </h2>
          <div className="space-y-2">
            {layers.map((layer) => (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${
                  activeLayer === layer.id
                    ? "bg-primary/10 border-primary text-primary"
                    : "hover:bg-muted/50"
                }`}
              >
                <div className={`w-4 h-4 rounded ${layer.color}`} />
                <layer.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{layer.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Map Stats */}
        <div className="p-4 border-b">
          <h2 className="font-semibold mb-3">Current View Statistics</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total Claims</span>
              <Badge variant="secondary">1,247</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Approved</span>
              <Badge variant="default">892</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Pending</span>
              <Badge variant="outline">245</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Forest Area</span>
              <span className="text-sm font-medium">12,450 ha</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-4 flex-1">
          <h2 className="font-semibold mb-3">Quick Actions</h2>
          <div className="space-y-2">
            {mapControls.map((control) => (
              <Button
                key={control.id}
                variant="outline"
                size="sm"
                className="w-full justify-start"
              >
                <control.icon className="w-4 h-4 mr-2" />
                {control.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 relative">
        {/* Interactive Leaflet Map */}
        <div className="w-full h-full">
          <MapComponent 
            width="100%" 
            height="100%" 
            className="rounded-none border-0"
          />
        </div>
        
        {/* Current Layer Badge Overlay */}
        <div className="absolute top-4 left-4 z-[1000]">
          <Badge variant="outline" className="bg-background/95 backdrop-blur">
            Current Layer: {layers.find(l => l.id === activeLayer)?.name}
          </Badge>
        </div>

        {/* Top Controls */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button variant="forest" size="sm">
            <Satellite className="w-4 h-4 mr-2" />
            Satellite View
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>

        {/* Bottom Info Panel */}
        <div className="absolute bottom-4 left-4 right-4">
          <Card className="bg-background/95 backdrop-blur">
            <CardContent className="p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Coordinates:</span>
                  <div className="font-mono">23.2599°N, 77.4126°E</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Zoom Level:</span>
                  <div className="font-mono">12</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Scale:</span>
                  <div className="font-mono">1:50,000</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Last Updated:</span>
                  <div>2024-01-15</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MapPage;