"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselImage = {
  src: string;
  alt: string;
};

type CarouselProps = {
  images: CarouselImage[];
  className?: string;
  aspectRatio?: string;
};

export default function Carousel({
  images,
  className = "",
  aspectRatio = "aspect-[16/9]",
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const hasMultiple = images.length > 1;

  const goTo = (index: number) => {
    if (!images.length) return;
    const safeIndex = (index + images.length) % images.length;
    setCurrent(safeIndex);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!hasMultiple) return;
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (distance > swipeThreshold) {
      next();
    } else if (distance < -swipeThreshold) {
      prev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!hasMultiple) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [current, hasMultiple]);

  if (!images?.length) return null;

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`relative overflow-hidden rounded-2xl bg-neutral-100 ${aspectRatio}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex h-full transition-transform duration-300 ease-out"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${current * (100 / images.length)}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative h-full w-full shrink-0"
              style={{ width: `${100 / images.length}%` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          ))}
        </div>

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/55 px-2 py-2 text-white shadow md:block cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/55 px-2 py-2 text-white shadow md:block cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-sm text-white">
              {current + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((_, index) => {
            const active = index === current;
            return (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  active ? "w-6 bg-black" : "w-2.5 bg-black/30"
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}