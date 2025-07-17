import { Search, Filter, Sparkles } from "lucide-react";
import { SearchFilters } from "../types";

interface SearchBarProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  onAISuggestions: () => void;
  isLoadingSuggestions: boolean;
  searchInputRef?: React.RefObject<HTMLInputElement>;
}

const SearchBar = ({
  filters,
  onFiltersChange,
  onAISuggestions,
  isLoadingSuggestions,
  searchInputRef,
}: SearchBarProps) => {
  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "under-500k", label: "Under 500K" },
    { value: "500k-1m", label: "500K - 1M" },
    { value: "over-1m", label: "Over 1M" },
  ];

  const categories = [
    "All Categories",
    "Language",
    "Programming",
    "Marketing",
    "Design",
    "Business",
    "Data Science",
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none z-10" />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search for courses, instructors, or topics..."
            value={filters.query}
            onChange={(e) =>
              onFiltersChange({ ...filters, query: e.target.value })
            }
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          />
        </div>

        {/* Price Filter */}
        <div className="relative min-w-[140px]">
          <select
            value={filters.priceRange}
            onChange={(e) =>
              onFiltersChange({
                ...filters,
                priceRange: e.target.value as SearchFilters["priceRange"],
              })
            }
            className="input-field appearance-none pr-10 w-full"
          >
            {priceRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
          <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
        </div>

        {/* Category Filter */}
        <div className="relative min-w-[180px]">
          <select
            value={filters.category}
            onChange={(e) =>
              onFiltersChange({ ...filters, category: e.target.value })
            }
            className="input-field appearance-none pr-10 w-full"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
        </div>

        {/* AI Suggestions Button */}
        <button
          onClick={onAISuggestions}
          disabled={isLoadingSuggestions}
          className={`bg-hero-button hover:from-primary-600 hover:to-secondary-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 whitespace-nowrap ${
            isLoadingSuggestions ? "opacity-75 cursor-not-allowed" : ""
          }`}
        >
          <Sparkles
            className={`w-5 h-5 ${isLoadingSuggestions ? "animate-spin" : ""}`}
          />
          {isLoadingSuggestions ? "Generating..." : "AI Suggestions"}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
