interface FilterSidebarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
}

export function FilterSidebar({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange
}: FilterSidebarProps) {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="mb-4">Filtros</h3>

      <div className="mb-6">
        <h4 className="mb-3">Categoría</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              value="Todas"
              checked={selectedCategory === 'Todas'}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-4 h-4"
            />
            <span>Todos los carros</span>
          </label>
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="w-4 h-4"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-3">Precio máximo (USD por día)</h4>
        <div className="space-y-3">
          <input
            type="range"
            min="30"
            max="250"
            value={priceRange[1]}
            onChange={(e) => onPriceChange([30, parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>US${priceRange[0]}</span>
            <span>US${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
