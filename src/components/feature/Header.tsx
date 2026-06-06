import { useState } from 'react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  filters: string[];
  activeFilters: string[];
  onApply: (selected: string[]) => void;
  onClear: () => void;
}

export default function FilterModal({ isOpen, onClose, title, filters, activeFilters, onApply, onClear }: FilterModalProps) {
  const [selected, setSelected] = useState<string[]>(activeFilters);

  if (!isOpen) return null;

  const toggle = (filter: string) => {
    setSelected((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  const handleApply = () => {
    onApply(selected);
    onClose();
  };

  const handleClear = () => {
    setSelected([]);
    onClear();
  };

  return (
    <div
      className="fixed inset-0 z-[150] flex items-center justify-center p-4"
      style={{ animation: 'fade-in 0.25s ease-out' }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div
        className="relative bg-white rounded-3xl p-6 md:p-8 w-full max-w-md shadow-2xl"
        style={{ animation: 'scale-in 0.3s ease-out' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-heading font-bold text-xl text-foreground-900">{title}</h3>
            <p className="text-foreground-400 text-xs mt-0.5">Select one or more filters</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-background-100 hover:bg-background-200 flex items-center justify-center transition-colors duration-200 cursor-pointer"
            aria-label="Close filter"
          >
            <i className="ri-close-line text-foreground-600 text-lg"></i>
          </button>
        </div>

        {/* Filter Options */}
        <div className="flex flex-wrap gap-2 mb-8 max-h-[50vh] overflow-y-auto">
          {filters.map((filter) => {
            const isActive = selected.includes(filter);
            return (
              <button
                key={filter}
                onClick={() => toggle(filter)}
                className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-primary-500 text-white'
                    : 'bg-background-100 text-foreground-500 hover:bg-background-200 border border-background-200/70'
                }`}
              >
                {isActive && <i className="ri-check-line mr-1.5 text-xs"></i>}
                {filter}
              </button>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleClear}
            className="px-5 py-2.5 rounded-full text-sm font-medium text-foreground-500 hover:text-foreground-700 hover:bg-background-100 transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5"
          >
            <i className="ri-close-circle-line"></i>
            Clear Filters
          </button>
          <button
            onClick={handleApply}
            className="flex-1 px-6 py-2.5 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-heading font-semibold text-sm transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
          >
            <i className="ri-filter-3-line"></i>
            Apply Filters
            {selected.length > 0 && (
              <span className="ml-1 px-2 py-0.5 rounded-full bg-white/20 text-[10px]">{selected.length}</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
