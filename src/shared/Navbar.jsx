import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Search,
  Heart,
  ShoppingCart,
  User,
  SlidersHorizontal,
} from "lucide-react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const [selectedLocation, setSelectedLocation] = useState("Select Location");

  const categoryRef = useRef(null);
  const locationRef = useRef(null);

  const categories = [
    "Technology",
    "Books",
    "Fashion",
    "Electronics",
    "Beauty",
    "Groceries",
    "Sports",
    "Others",
  ];

  const locations = [
    "Dhanmondi",
    "Mirpur",
    "Gulshan",
    "Uttara",
    "Banani",
    "Mohakhali",
    "Farmgate",
  ];

  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredLocations = locations.filter((loc) =>
    loc.toLowerCase().includes(locationTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setShowCategory(false);
      }
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setShowLocation(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="shrink-0">
          <img src={logo} alt="sobjibari" className="w-[110px]" />
        </div>

        {/* Search area */}
        <div className="flex flex-1 w-full gap-3 items-center max-w-4xl">
          {/* Category Dropdown */}
          <div className="relative w-40" ref={categoryRef}>
            <button
              onClick={() => setShowCategory(!showCategory)}
              className="w-full px-3 py-2 border rounded bg-gray-100 flex justify-between items-center text-sm"
            >
              {selectedCategory}
              <ChevronDown className="w-4 h-4" />
            </button>
            {showCategory && (
              <div className="absolute top-full left-0 w-full mt-1 bg-white border rounded shadow z-50 max-h-60 overflow-y-auto">
                <div className="p-2 border-b">
                  <input
                    type="text"
                    placeholder="Search category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-2 py-1 border rounded text-sm"
                  />
                </div>
                <ul>
                  {filteredCategories.map((cat, idx) => (
                    <li
                      key={idx}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setShowCategory(false);
                        setSearchTerm("");
                      }}
                      className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Search input (now rectangular) */}
          <div className="flex flex-1 items-center border rounded overflow-hidden bg-white shadow-sm">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-grow px-4 py-2 text-sm focus:outline-none"
            />
            <button className="px-4 py-2 bg-green-600 text-white hover:bg-green-700">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Location dropdown - separate */}
        <div className="relative w-48" ref={locationRef}>
          <button
            onClick={() => setShowLocation(!showLocation)}
            className="w-full px-4 py-2 border rounded bg-gray-100 flex justify-between items-center text-sm"
          >
            {selectedLocation}
            <ChevronDown className="w-4 h-4" />
          </button>
          {showLocation && (
            <div className="absolute top-full left-0 w-full mt-1 bg-white border rounded shadow z-50 max-h-60 overflow-y-auto">
              <div className="p-2 border-b">
                <input
                  type="text"
                  placeholder="Search location..."
                  value={locationTerm}
                  onChange={(e) => setLocationTerm(e.target.value)}
                  className="w-full px-2 py-1 border rounded text-sm"
                />
              </div>
              <ul>
                {filteredLocations.map((loc, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setSelectedLocation(loc);
                      setShowLocation(false);
                      setLocationTerm("");
                    }}
                    className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Icons section */}
        <div className="flex items-center gap-4 text-gray-700">
          <button className="hover:text-green-600 flex flex-col items-center text-xs">
            <SlidersHorizontal className="w-5 h-5" />
            Compare
          </button>
          <button className="hover:text-green-600 flex flex-col items-center text-xs">
            <Heart className="w-5 h-5" />
            Wishlist
          </button>
          <button className="hover:text-green-600 flex flex-col items-center text-xs">
            <ShoppingCart className="w-5 h-5" />
            Cart
          </button>
          <button className="hover:text-green-600 flex flex-col items-center text-xs">
            <User className="w-5 h-5" />
            Account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
