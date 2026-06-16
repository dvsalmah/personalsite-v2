import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ProjectCarouselProps {
  images: string[];
  title: string;
}

/** Carousel gambar project — digunakan di PM & FE layout (DRY) */
export function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  if (images.length === 1) {
    return (
      <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#1E293B] aspect-video w-full relative">
        <img src={images[0]} alt={`${title} visual`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      </div>
    );
  }

  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-800 bg-[#1E293B] relative">
      <div className="aspect-video w-full relative">
        <img
          src={images[current]}
          alt={`${title} visual ${current + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#F1A7C6] hover:bg-[#F1A7C6]/80 text-slate-900 border-none rounded-full flex items-center justify-center transition-colors"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#F1A7C6] hover:bg-[#F1A7C6]/80 text-slate-900 border-none rounded-full flex items-center justify-center transition-colors"
      >
        <ChevronRight size={16} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === current ? "bg-[#F1A7C6] w-4" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
