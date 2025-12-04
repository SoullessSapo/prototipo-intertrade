import React, { useEffect, useRef } from 'react';
import Layout from '../components/layout/Layout';
import { 
  Search, 
  Menu, 
  Navigation, 
  MapPin, 
  Plus, 
  Minus, 
  Crosshair, 
  Layers,
  Share2,
  Star,
  Clock,
  Phone,
  Globe
} from 'lucide-react';

const Tracking = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    let map;
    async function initMap() {
      // Check if google is defined (script loaded)
      if (!window.google) return;

      const { Map } = await window.google.maps.importLibrary("maps");
      
      map = new Map(mapRef.current, {
        center: { lat: 51.905444, lng: 4.486627 }, // Rotterdam
        zoom: 13,
        mapId: 'DEMO_MAP_ID', // Required for some features, placeholder is fine
        disableDefaultUI: true, // We are building custom UI
      });

      // Optional: Add a marker
      const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");
      new AdvancedMarkerElement({
        map: map,
        position: { lat: 51.905444, lng: 4.486627 },
        title: "Rotterdam Port",
      });
    }

    initMap();
  }, []);

  return (
    <Layout title="Shipment Tracking">
      <div className="relative h-[calc(100vh-8rem)] w-full bg-gray-200 rounded-xl overflow-hidden border border-gray-300">
        
        {/* Map Container */}
        <div ref={mapRef} id="map" className="absolute inset-0 w-full h-full"></div>

        {/* Google Maps Style Search Box */}
        <div className="absolute top-4 left-4 z-10 w-96 bg-white rounded-lg shadow-md flex flex-col">
          <div className="flex items-center p-2 border-b border-gray-100">
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
              <Menu className="w-5 h-5" />
            </button>
            <input 
              type="text" 
              placeholder="Search Google Maps" 
              className="flex-1 px-3 py-1 outline-none text-gray-700 placeholder-gray-500"
              defaultValue="MSC GULSUN - Container #8829"
            />
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
              <Search className="w-5 h-5" />
            </button>
            <div className="w-px h-6 bg-gray-200 mx-1"></div>
            <button className="p-2 hover:bg-gray-100 rounded-full text-blue-600">
              <Navigation className="w-5 h-5 fill-current" />
            </button>
          </div>
          
          {/* Selected Item Detail Panel */}
          <div className="p-0">
            <div className="h-48 bg-gray-200 relative">
               <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Port" />
               <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
                 <h2 className="text-2xl font-bold">Rotterdam Port</h2>
                 <p className="text-sm opacity-90">Destination • 4.8 <Star className="w-3 h-3 inline fill-current text-amber-400" /> (12k)</p>
               </div>
            </div>
            <div className="p-4 space-y-4">
               <div className="flex justify-between">
                 <button className="flex flex-col items-center gap-1 text-blue-600">
                   <div className="w-10 h-10 rounded-full border border-blue-600 flex items-center justify-center hover:bg-blue-50">
                     <Navigation className="w-5 h-5 fill-current" />
                   </div>
                   <span className="text-xs font-medium">Directions</span>
                 </button>
                 <button className="flex flex-col items-center gap-1 text-blue-600">
                   <div className="w-10 h-10 rounded-full border border-blue-600 flex items-center justify-center hover:bg-blue-50">
                     <Star className="w-5 h-5" />
                   </div>
                   <span className="text-xs font-medium">Save</span>
                 </button>
                 <button className="flex flex-col items-center gap-1 text-blue-600">
                   <div className="w-10 h-10 rounded-full border border-blue-600 flex items-center justify-center hover:bg-blue-50">
                     <Share2 className="w-5 h-5" />
                   </div>
                   <span className="text-xs font-medium">Share</span>
                 </button>
               </div>

               <div className="space-y-3 pt-2">
                 <div className="flex items-start gap-3 text-sm text-gray-600">
                   <MapPin className="w-5 h-5 mt-0.5 text-gray-400" />
                   <span>Wilhelminakade 909, 3072 AP Rotterdam, Netherlands</span>
                 </div>
                 <div className="flex items-start gap-3 text-sm text-gray-600">
                   <Clock className="w-5 h-5 mt-0.5 text-gray-400" />
                   <span className="text-emerald-600 font-medium">Open 24 hours</span>
                 </div>
                 <div className="flex items-start gap-3 text-sm text-gray-600">
                   <Globe className="w-5 h-5 mt-0.5 text-gray-400" />
                   <a href="#" className="text-blue-600">portofrotterdam.com</a>
                 </div>
                 <div className="flex items-start gap-3 text-sm text-gray-600">
                   <Phone className="w-5 h-5 mt-0.5 text-gray-400" />
                   <span>+31 10 252 1010</span>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Map Controls (Bottom Right) */}
        <div className="absolute bottom-8 right-4 flex flex-col gap-2 z-10">
          <button className="bg-white p-2 rounded shadow-md hover:bg-gray-50 text-gray-600">
            <Crosshair className="w-6 h-6" />
          </button>
          <div className="bg-white rounded shadow-md flex flex-col">
            <button className="p-2 hover:bg-gray-50 text-gray-600 border-b border-gray-100">
              <Plus className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-gray-50 text-gray-600">
              <Minus className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Map Layers (Bottom Left) */}
        <div className="absolute bottom-8 left-4 z-10">
          <button className="bg-white p-3 rounded-lg shadow-md hover:bg-gray-50 flex items-center gap-2 text-gray-700">
            <Layers className="w-5 h-5" />
            <span className="font-medium text-sm">Layers</span>
          </button>
        </div>

      </div>
    </Layout>
  );
};

export default Tracking;
