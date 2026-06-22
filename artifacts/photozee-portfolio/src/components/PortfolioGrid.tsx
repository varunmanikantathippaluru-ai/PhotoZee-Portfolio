import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Maximize2 } from "lucide-react";
import { gallery } from "@/data/gallery";
import Lightbox from "./Lightbox";

interface PortfolioGridProps {
  limit?: number;
  showFilters?: boolean;
}

export default function PortfolioGrid({ limit, showFilters = true }: PortfolioGridProps) {
  const [filter, setFilter] = useState<"all" | "photos" | "videos" | "reels">("all");
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const filters = [
    { id: "all", label: "All Work" },
    { id: "photos", label: "Photography" },
    { id: "videos", label: "Cinematography" },
    { id: "reels", label: "Reels & Shorts" },
  ];

  const filteredGallery = gallery.filter((item) => filter === "all" || item.category === filter);
  const displayItems = limit ? filteredGallery.slice(0, limit) : filteredGallery;

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = displayItems.findIndex(item => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % displayItems.length;
    setSelectedItem(displayItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = displayItems.findIndex(item => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + displayItems.length) % displayItems.length;
    setSelectedItem(displayItems[prevIndex]);
  };

  return (
    <div>
      {showFilters && (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id as any)}
              className={`relative px-6 py-2 font-medium transition-colors ${
                filter === f.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter === f.id && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 border-b-2 border-primary"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {f.label}
            </button>
          ))}
        </div>
      )}

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {displayItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              className={`relative group rounded-lg overflow-hidden cursor-pointer bg-card border border-border ${
                item.category === "reels" ? "aspect-[9/16]" : "aspect-[4/3]"
              }`}
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.imageUrl || item.thumbnail}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = "https://images.unsplash.com/photo-1519225421980-716e6f8cce58?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-primary uppercase tracking-wider">{item.category}</p>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 scale-50 group-hover:scale-100">
                  {item.category === "photos" ? <Maximize2 size={24} /> : <Play size={24} className="ml-1" />}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Lightbox 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
