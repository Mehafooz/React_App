import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { clearAllItems } from "../utils/cartSlice"

const LOCATIONIQ_TOKEN = "pk.b7c2cf53d11e045150652b0b13ad29a1";

const LocationSearchBox = ({ onLocationSelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    const saved = localStorage.getItem("user_location");
    if (saved) {
      const parsed = JSON.parse(saved);
      setQuery(parsed.address);
      onLocationSelect(parsed);
    }
  }, [onLocationSelect]);

  const searchLocation = async () => {
    dispatch(clearAllItems())

    if (!query || query.trim().length < 3) {
      setResults([]);
      return;
    }

    try {
      const res = await fetch(
        `https://api.locationiq.com/v1/autocomplete?key=${LOCATIONIQ_TOKEN}&q=${encodeURIComponent(
          query
        )}&limit=5&format=json&countrycodes=in`
      );
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error("LocationIQ error:", err);
      setResults([]);
    }
  };

  const handleSelect = (place) => {
    const selected = {
      lat: place.lat,
      lon: place.lon,
      address: place.display_name,
    };

    setQuery(place.display_name);
    setResults([]);

    localStorage.setItem("user_location", JSON.stringify(selected));
    localStorage.setItem(
      "user_location_cords",
      `lat=${selected.lat}&lng=${selected.lon}`
    );

    onLocationSelect(selected);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchLocation();
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md gap-2">
        <span className="text-orange-500">📍</span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search for your location"
          className="w-full focus:outline-none text-sm text-gray-800"
        />
        <button
          onClick={searchLocation}
          className="text-black  bg-orange-200 px-3 py-1 text-xs rounded-full hover:bg-orange-400"
        >
          Search
        </button>
      </div>

      {results.length > 0 && (
        <ul className="absolute z-10 bg-white border mt-2 w-full rounded-lg shadow max-h-60 overflow-auto">
          {results.map((place, index) => (
            <li
              key={`place-${index}-${place.place_id}`}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => handleSelect(place)}
            >
              {place.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationSearchBox;
