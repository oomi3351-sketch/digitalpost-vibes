import { categories } from "@/data/blogPosts";

type Props = {
  selected: string;
  onSelect: (cat: string) => void;
};

const CategoryFilter = ({ selected, onSelect }: Props) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selected === cat
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-secondary text-secondary-foreground hover:bg-primary/10"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
