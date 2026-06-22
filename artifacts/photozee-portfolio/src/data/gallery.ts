export interface GalleryItem {
  id: string;
  title: string;
  category: "photos" | "reels" | "videos";
  imageUrl?: string;
  youtubeId?: string;
  thumbnail?: string;
  description: string;
}

export const gallery: GalleryItem[] = [
  {
    id: "g1",
    title: "The Golden Hour",
    category: "photos",
    imageUrl: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80",
    description: "A breathtaking moment captured just as the sun set over the horizon."
  },
  {
    id: "g2",
    title: "First Dance",
    category: "photos",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    description: "The couple sharing an intimate first dance surrounded by loved ones."
  },
  {
    id: "g3",
    title: "Ceremony Magic",
    category: "photos",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    description: "The beautiful exchanging of vows."
  },
  {
    id: "g4",
    title: "Details Matter",
    category: "photos",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    description: "Intricate details from the wedding decor."
  },
  {
    id: "g5",
    title: "Quiet Confidence",
    category: "photos",
    imageUrl: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=800&q=80",
    description: "A quiet moment of reflection before the ceremony."
  },
  {
    id: "g6",
    title: "Bridal Portrait",
    category: "photos",
    imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80",
    description: "A stunning portrait capturing the bride's natural elegance."
  },
  {
    id: "g7",
    title: "The Reception",
    category: "photos",
    imageUrl: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80",
    description: "The vibrant energy of a wedding reception."
  },
  {
    id: "g8",
    title: "From Above",
    category: "photos",
    imageUrl: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80",
    description: "An awe-inspiring drone shot of the venue."
  },
  {
    id: "g9",
    title: "Tears of Joy",
    category: "photos",
    imageUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
    description: "Raw emotions during the speeches."
  },
  {
    id: "g10",
    title: "The Send Off",
    category: "photos",
    imageUrl: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?auto=format&fit=crop&w=800&q=80",
    description: "A sparkler exit to remember."
  },
  {
    id: "v1",
    title: "Sarah & John — Cinematic Film",
    category: "videos",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    description: "A gorgeous cinematic retelling of Sarah and John's big day."
  },
  {
    id: "v2",
    title: "Priya & Rahul — Highlight Reel",
    category: "videos",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80",
    description: "High energy, beautiful moments, and pure joy."
  },
  {
    id: "v3",
    title: "Corporate Gala 2023",
    category: "videos",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    description: "A sleek and professional event recap."
  },
  {
    id: "r1",
    title: "Pre-Wedding Teaser",
    category: "reels",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    description: "A quick glimpse into a stunning pre-wedding shoot."
  },
  {
    id: "r2",
    title: "Venue Drone Tour",
    category: "reels",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    description: "Sweeping aerial views of our favorite venue."
  },
  {
    id: "r3",
    title: "Behind the Scenes",
    category: "reels",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=800&q=80",
    description: "A sneak peek at our creative process."
  }
];
