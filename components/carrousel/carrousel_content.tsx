"use client";

import { useEffect, useRef, useState } from "react";

export interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;

  speed?: number;
  itemWidth?: number;

  autoPlay?: boolean;
  pauseOnHover?: boolean;
  loop?: boolean;
}

export default function Carousel<T>({
  items,
  renderItem,
  speed = 0.5,
  itemWidth = 130,
  autoPlay = true,
  pauseOnHover = true,
  loop = true,
}: CarouselProps<T>) {

  const [offset, setOffset] = useState(0);

  const isPaused = useRef(false);
  const isDragging = useRef(false);
  const raf = useRef<number | null>(null);

  // 🔁 duplicamos para loop infinito real
  const loopItems = loop ? [...items, ...items] : items;

  // 🚀 ANIMACIÓN CONTINUA (SIN RESET VISIBLE)
  useEffect(() => {
    if (!autoPlay || items.length === 0) return;

    const maxOffset = itemWidth * items.length;

    const animate = () => {
      if (!isPaused.current && !isDragging.current) {
        setOffset((prev) => {
          let next = prev + speed;

          // 🔥 clave: NO resetear a 0 visible
          if (loop && next >= maxOffset * 2) {
            next = next - maxOffset; // 👈 reset invisible
          }

          return next;
        });
      }

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [items, autoPlay, speed, itemWidth, loop]);

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={() => (isPaused.current = true)}
      onMouseLeave={() => (isPaused.current = false)}
    >
      <div
        className="flex gap-4"
        style={{
          transform: `translateX(-${offset}px)`,
          willChange: "transform",
        }}
      >
        {loopItems.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0"
            style={{ width: itemWidth }}
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
}