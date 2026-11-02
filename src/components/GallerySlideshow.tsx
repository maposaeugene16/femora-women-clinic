"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import WhatsAppButton from "./WhatsAppButton";
import { site } from "@/config/site";

export default function GallerySlideshow() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const thumbnailRowRef = useRef<HTMLDivElement>(null);

  const total = galleryImages.length;
  const active = galleryImages[current];

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-play timer (5.5s)
  useEffect(() => {
    if (!isPlaying || lightboxOpen) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPlaying, lightboxOpen, nextSlide]);

  // Auto scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailRowRef.current) {
      const activeEl = thumbnailRowRef.current.children[current] as HTMLElement | undefined;
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [current]);

  // Close lightbox on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section id="gallery" className="mx-auto mt-24 max-w-6xl px-5">
      {/* SECTION HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-sand/80 px-3.5 py-1 text-xs font-semibold text-deep border border-line">
            <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
            Interactive Clinical Showcase
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-ink font-serif leading-tight">
            Dr. Selena’s Clinical Care &amp; Services
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
            Explore authentic medical consultations, specialized feminine treatments, regulated medicines, and nationwide discreet care provided by Dr. Selena.
          </p>
        </div>

        {/* Global Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsPlaying((p) => !p)}
            className="flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-2 text-xs font-medium text-deep shadow-xs hover:border-brand transition cursor-pointer"
            title={isPlaying ? "Pause Slideshow" : "Resume Slideshow"}
          >
            {isPlaying ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
                <span>Pause</span>
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
                <span>Play</span>
              </>
            )}
          </button>
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink shadow-xs transition hover:bg-deep hover:text-white cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink shadow-xs transition hover:bg-deep hover:text-white cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* DUAL-PANEL SHOWCASE CONTAINER */}
      <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
          
          {/* LEFT STORY PANEL (5 cols on lg) */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-line/70 bg-gradient-to-b from-paper/40 to-white">
            <div>
              {/* Header Badge & Counter */}
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-line/60">
                <span className="rounded-full bg-deep px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                  {active.category}
                </span>
                <div className="flex items-center gap-1.5 font-mono text-xs text-muted">
                  <span className="font-bold text-deep text-sm">0{current + 1}</span>
                  <span>/</span>
                  <span>0{total}</span>
                </div>
              </div>

              {/* Tagline / Context */}
              {active.tagline && (
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-brand">
                  {active.tagline}
                </p>
              )}

              {/* Title */}
              <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-ink font-medium leading-tight">
                {active.title}
              </h3>

              {/* Caption */}
              <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
                {active.caption}
              </p>

              {/* Clinical Feature Highlights */}
              <ul className="mt-6 space-y-2 text-xs sm:text-sm text-ink/90 font-medium">
                <li className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>100% Confidential Doctor-Patient Privilege</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Available Across All 17 Nationwide Locations</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Strictly Regulated by HPCZ &amp; MCAZ Guidelines</span>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-line/60 flex flex-wrap items-center gap-3">
              <WhatsAppButton
                productName={active.title}
                label="Consult Dr. Selena on WhatsApp"
                variant="solid"
                className="!text-xs sm:!text-sm !py-2.5 !px-5 shadow-sm"
              />
              <button
                onClick={() => setLightboxOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-full border border-deep/20 bg-sand/40 px-4 py-2.5 text-xs font-semibold text-deep hover:bg-deep hover:text-white transition cursor-pointer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" y1="3" x2="14" y2="10"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
                <span>View Full Size</span>
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL STAGE (7 cols on lg) */}
          <div
            className="lg:col-span-7 relative group cursor-pointer bg-black/95 overflow-hidden flex items-center justify-center min-h-[380px] lg:min-h-[520px]"
            onClick={() => setLightboxOpen(true)}
          >
            <div className="relative h-full w-full aspect-[4/3] lg:aspect-auto">
              <Image
                key={active.url}
                src={active.url}
                alt={active.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-contain p-2 sm:p-4 transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            {/* Visual Overlays */}
            <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 pointer-events-none">
              <span className="rounded-full bg-deep/85 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white shadow-md border border-white/10">
                Dr. Selena · Femora Women’s Clinic
              </span>
            </div>

            <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 text-xs text-white/90 flex items-center gap-2 group-hover:bg-brand group-hover:border-transparent transition">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
              <span>Click to Enlarge</span>
            </div>
          </div>
        </div>
      </div>

      {/* INTERACTIVE FILMSTRIP / THUMBNAIL NAVIGATOR */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-3 px-1 text-xs text-muted font-medium">
          <span>Jump to Service ({total} Available):</span>
          <span>Click any thumbnail to preview</span>
        </div>

        <div
          ref={thumbnailRowRef}
          className="flex items-center gap-3 overflow-x-auto pb-4 scroll-smooth no-scrollbar"
        >
          {galleryImages.map((img, idx) => {
            const isActive = idx === current;
            return (
              <button
                key={img.id}
                onClick={() => {
                  setCurrent(idx);
                  setIsPlaying(false);
                }}
                className={`group relative shrink-0 overflow-hidden rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "border-brand ring-2 ring-brand/50 shadow-md scale-[1.02] bg-sand/60"
                    : "border-line bg-white hover:border-deep/50 hover:shadow-xs opacity-75 hover:opacity-100"
                } w-44 sm:w-52 p-2`}
              >
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black/10">
                  <Image
                    src={img.url}
                    alt={img.title}
                    fill
                    sizes="220px"
                    className="object-cover transition group-hover:scale-105"
                  />
                  <div className="absolute top-1.5 left-1.5 rounded-md bg-deep/90 px-1.5 py-0.5 text-[10px] font-mono font-bold text-gold">
                    0{idx + 1}
                  </div>
                </div>
                <div className="mt-2 px-1">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-brand">
                    {img.category}
                  </p>
                  <p className="mt-0.5 font-serif text-xs font-semibold text-ink line-clamp-1">
                    {img.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md animate-fadeIn"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative flex flex-col max-w-5xl max-h-[92vh] w-full rounded-2xl overflow-hidden bg-deep border border-white/20 shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
              <div>
                <span className="text-xs font-mono text-gold uppercase tracking-wider">
                  0{current + 1} of 0{total} · {active.category}
                </span>
                <h4 className="font-serif text-lg sm:text-xl text-white font-medium">
                  {active.title}
                </h4>
              </div>
              <button
                onClick={() => setLightboxOpen(false)}
                aria-label="Close modal"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition text-white cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="relative flex-1 min-h-[350px] sm:min-h-[500px] w-full bg-black/80 flex items-center justify-center p-3 sm:p-6">
              <div className="relative h-full w-full">
                <Image
                  src={active.url}
                  alt={active.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Prev/Next on Lightbox */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white cursor-pointer transition"
                aria-label="Previous image"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white cursor-pointer transition"
                aria-label="Next image"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-deep flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <p className="text-xs sm:text-sm text-white/80 max-w-xl text-center sm:text-left">
                {active.caption}
              </p>
              <WhatsAppButton
                productName={active.title}
                label="Ask Dr. Selena About This"
                className="!bg-gold !text-ink hover:!bg-white !text-xs font-semibold !py-2.5 !px-5 shrink-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
