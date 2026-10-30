"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";

export default function GallerySlideshow() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = galleryImages.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const active = galleryImages[current];

  return (
    <section id="gallery" className="mx-auto mt-24 max-w-6xl px-5">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Our Practice & Team
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl text-ink font-serif">
            Doctors, Nurses & Clinical Environment
          </h2>
          <p className="mt-2 text-sm text-muted max-w-xl">
            A glimpse into our professional medical staff, authentic regulated medicines, and modern clinical care facilities serving Bulawayo.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink transition hover:bg-deep hover:text-white shadow-xs cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink transition hover:bg-deep hover:text-white shadow-xs cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* MAIN SLIDE CONTAINER */}
      <div
        className="relative overflow-hidden rounded-3xl border border-line bg-deep text-white shadow-xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="relative aspect-[16/9] max-h-[540px] w-full min-h-[360px]">
          <Image
            src={active.url}
            alt={active.title}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
            className="object-cover transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {/* Slide Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-xl">
              <span className="inline-block rounded-full bg-gold/90 px-3 py-1 text-xs font-bold text-ink uppercase tracking-wider mb-2">
                {active.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                {active.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-white/80 leading-relaxed">
                {active.caption}
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 text-xs font-mono">
              <span className="text-gold font-bold">{current + 1}</span>
              <span className="text-white/50">/</span>
              <span className="text-white/80">{total}</span>
            </div>
          </div>
        </div>
      </div>

      {/* THUMBNAIL DOTS / SELECTORS */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {galleryImages.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => setCurrent(idx)}
            className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition cursor-pointer ${
              idx === current
                ? "bg-deep text-gold shadow-xs ring-2 ring-gold/50"
                : "bg-white text-muted border border-line hover:border-deep hover:text-ink"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                idx === current ? "bg-gold" : "bg-muted/40"
              }`}
            />
            <span className="hidden sm:inline">{img.title}</span>
            <span className="sm:hidden">{img.category}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
