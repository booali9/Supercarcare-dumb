import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapIcon } from 'lucide-react'
import { useNavigate } from "react-router-dom";

// Store data with coordinates
const storeData = [
  {
    id: 1,
    name: "Queens TireShop",
    address: "101 Queens Blvd",
    city: "Queens",
    state: "NY",
    zip: "11375",
    distance: 7257.3,
    lat: 40.7282,
    lng: -73.8458,
  },
  {
    id: 2,
    name: "Uptown TireShop",
    address: "456 Park Ave",
    city: "New York",
    state: "NY",
    zip: "10022",
    distance: 7259.1,
    lat: 40.7605,
    lng: -73.9695,
  },
  {
    id: 3,
    name: "Downtown TireShop",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
    distance: 7262.3,
    lat: 40.7128,
    lng: -74.0060,
  },
  {
    id: 4,
    name: "Brooklyn TireShop",
    address: "789 Atlantic Ave",
    city: "Brooklyn",
    state: "NY",
    zip: "11217",
    distance: 7262.3,
    lat: 40.6782,
    lng: -73.9442,
  },
]

// Custom colors
const colors = {
  primary: "#A1252E", // Red color as specified
}

// Button component
const Button = ({ 
  children, 
  variant = "default", 
  className = "", 
  style = {}, 
  onClick = () => {} 
}) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors"
  const variantStyles = {
    default: "bg-[#A1252E] text-white hover:bg-[#731B22]",
    // outline: "bg-transparent border border-gray-300 text-gray-700 hover:border-[#A1252E] hover:text-[#A1252E]"
    outline: "border border-gray-300 font-medium text-sm rounded-md py-2 px-4 hover:bg-gray-100 transition-colors"
  }
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

// Helper function to replace cn utility
const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const Location = ({ onNext, onBack }) => {
  const [view, setView] = useState("list")
  const [selectedStore, setSelectedStore] = useState(null)
  const mapCanvasRef = useRef(null)
  
  const navigate = useNavigate();

  const userLocation = {
    lat: 40.7128, // New York City coordinates as default
    lng: -74.0060,
  }

  // Handle continue button click
  const handleContinue = () => {
    if (selectedStore && onNext) {
      navigate('/services')
    }
  }

  // Draw a simple map visualization on canvas
  useEffect(() => {
    if (view === "map" && mapCanvasRef.current) {
      const canvas = mapCanvasRef.current
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      // Set canvas dimensions
      const setCanvasDimensions = () => {
        const parent = canvas.parentElement
        if (parent) {
          canvas.width = parent.clientWidth
          canvas.height = parent.clientHeight
        }
      }

      setCanvasDimensions()
      window.addEventListener('resize', setCanvasDimensions)

      // Clear canvas
      ctx.fillStyle = '#f8f9fa'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      ctx.strokeStyle = '#e9ecef'
      ctx.lineWidth = 1

      // Horizontal grid lines
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical grid lines
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Calculate relative positions for stores
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const scale = 5000 // Scale factor to convert geo coordinates to pixels

      // Draw user location
      ctx.fillStyle = '#4285F4'
      ctx.beginPath()
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2)
      ctx.fill()

      // Draw "You are here" text
      ctx.fillStyle = '#333'
      ctx.font = '12px Arial'
      ctx.fillText('You are here', centerX + 15, centerY + 5)

      // Draw stores
      storeData.forEach((store) => {
        // Calculate relative position from user location
        const dx = (store.lng - userLocation.lng) * scale
        const dy = (userLocation.lat - store.lat) * scale * 1.5 // Adjust for map projection
        
        const x = centerX + dx
        const y = centerY + dy

        // Draw store marker
        ctx.fillStyle = selectedStore === store.id ? '#8B1E27' : colors.primary
        ctx.beginPath()
        ctx.arc(x, y, selectedStore === store.id ? 8 : 6, 0, Math.PI * 2)
        ctx.fill()

        // Draw store name
        ctx.fillStyle = '#333'
        ctx.font = '12px Arial'
        ctx.fillText(store.name, x + 12, y + 4)
      })

      return () => {
        window.removeEventListener('resize', setCanvasDimensions)
      }
    }
  }, [view, selectedStore])

  const handleBack = () => {
    navigate("/tire-info");
  };

  return (
    <div className="min-h-screen   bg-white">
      <div className="max-w-4xl mx-auto mt-5 mb=5 p-6 border border-gray-300  rounded-lg bg-white shadow-md">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 
              className="text-2xl font-bold" 
              style={{ color: colors.primary }}
            >
              Select a Store
            </h1>
            <p className="text-gray-600 text-sm">
              Choose the most convenient location for your tire service
            </p>
          </div>
          <Button variant="outline" onClick={handleBack}>
            Back
          </Button>
        </div>

        {/* View Toggle */}
        <div className="grid grid-cols-2 gap-2 mb-6 rounded-md overflow-hidden border border-gray-200">
          <button
            onClick={() => setView("list")}
            className={classNames(
              "py-3 px-4 text-center transition-all duration-200",
              view === "list" 
                ? "bg-gray-100 text-gray-800 font-medium" 
                : "text-gray-600 hover:bg-gray-50"
            )}
          >
            List View
          </button>
          <button
            onClick={() => setView("map")}
            className={classNames(
              "py-3 px-4 text-center transition-all duration-200",
              view === "map" 
                ? "bg-gray-100 text-gray-800 font-medium" 
                : "text-gray-600 hover:bg-gray-50"
            )}
          >
            Map View
          </button>
        </div>

        <AnimatePresence mode="wait">
          {view === "list" ? (
            <motion.div
              key="list-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {storeData.map((store) => (
                <motion.div
                  key={store.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: store.id * 0.1 }}
                  className="p-4 rounded-lg flex justify-between items-start border border-gray-200 hover:border-[#A1252E] transition-colors"
                >
                  <div>
                    <h3 className="text-gray-800 font-medium text-lg">{store.name}</h3>
                    <p className="text-gray-600 text-sm">{store.address}</p>
                    <p className="text-gray-600 text-sm">{store.city}, {store.state} {store.zip}</p>
                    <p 
                      className="text-sm mt-1" 
                      style={{ color: colors.primary }}
                    >
                      {store.distance.toFixed(1)} miles away
                    </p>
                  </div>
                  <Button 
                    onClick={() => setSelectedStore(store.id)}
                    style={{ 
                      backgroundColor: selectedStore === store.id 
                        ? "#8B1E27" // Darker shade when selected
                        : colors.primary 
                    }}
                  >
                    Select
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="map-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {/* Canvas Map Container */}
              <div 
                className="rounded-lg overflow-hidden border border-gray-200 hover:border-[#A1252E] transition-colors relative"
                style={{ height: "400px" }}
              >
                <canvas 
                  ref={mapCanvasRef} 
                  className="w-full h-full"
                />
                <div className="absolute bottom-4 right-4 bg-white p-2 rounded-md shadow-sm">
                  <div className="flex items-center text-xs text-gray-600 mb-1">
                    <div className="w-3 h-3 rounded-full bg-[#4285F4] mr-1"></div>
                    Your Location
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.primary }}></div>
                    <span className="ml-1">Store Location</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white p-2 rounded-md shadow-sm text-xs text-gray-600">
                  <p>This is a simplified map visualization.</p>
                  <p>For a real Google Map, you need an API key.</p>
                </div>
              </div>

              {/* Nearest Stores Section */}
              <h3 className="text-gray-800 text-lg mt-6 mb-2">Nearest Stores:</h3>
              
              {storeData.slice(0, 3).map((store) => (
                <motion.div
                  key={store.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: store.id * 0.1 }}
                  className="p-4 rounded-lg flex justify-between items-center border border-gray-200 hover:border-[#A1252E] transition-colors"
                >
                  <div>
                    <h3 className="text-gray-800 font-medium">{store.name}</h3>
                    <p 
                      className="text-sm" 
                      style={{ color: colors.primary }}
                    >
                      {store.distance.toFixed(1)} miles away
                    </p>
                  </div>
                  <Button 
                    onClick={() => setSelectedStore(store.id)}
                    style={{ 
                      backgroundColor: selectedStore === store.id 
                        ? "#8B1E27" // Darker shade when selected
                        : colors.primary 
                    }}
                  >
                    Select
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom action button */}
        <div className="mt-8 flex justify-end">
          <Button 
            onClick={handleContinue}
            className={`  ${!selectedStore ? "opacity-50 cursor-not-allowed" : "hover:bg-[#731B22]"}`}
            disabled={!selectedStore}
          >
            Continue
          </Button>
        </div>

        <div className="text-center text-gray-600 text-sm mt-8">
          All locations offer free WiFi and comfortable waiting areas
        </div>
      </div>
    </div>
  )
}

export default Location