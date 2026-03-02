"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const flashRef = useRef<HTMLDivElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);
    const [imagesPreloaded, setImagesPreloaded] = useState(false);

    const frameCount = 192; // 0 to 191
    const imagesRef = useRef<HTMLImageElement[]>([]);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const images: HTMLImageElement[] = [];

        for (let i = 0; i < frameCount; i++) {
            const img = new window.Image();
            const paddedIndex = String(i).padStart(5, "0");
            img.src = `/heroimage/frame_${paddedIndex}.jpg`;
            images.push(img);

            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    imagesRef.current = images;
                    setImagesPreloaded(true);
                }
            };
            img.onerror = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    imagesRef.current = images;
                    setImagesPreloaded(true);
                }
            };
        }
    }, []);

    useEffect(() => {
        if (!imagesPreloaded || !canvasRef.current || !containerRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        if (!context) return;

        const images = imagesRef.current;

        // Draw the first frame immediately
        drawFrame(0);

        const handleScroll = () => {
            if (!containerRef.current) return;
            const containerBounds = containerRef.current.getBoundingClientRect();

            const containerTop = containerBounds.top;
            const scrollableDistance = containerBounds.height - window.innerHeight;

            let scrollFraction = -containerTop / scrollableDistance;
            scrollFraction = Math.max(0, Math.min(1, scrollFraction));

            const frameIndex = Math.floor(scrollFraction * (frameCount - 1));

            requestAnimationFrame(() => {
                drawFrame(frameIndex);

                if (flashRef.current) {
                    if (scrollFraction > 0.9) {
                        const opacity = (scrollFraction - 0.9) * 10;
                        flashRef.current.style.opacity = Math.min(1, opacity).toString();
                    } else {
                        flashRef.current.style.opacity = "0";
                    }
                }

                if (scrollIndicatorRef.current) {
                    // Fade out quickly in the first 15% of the scroll
                    const indicatorOpacity = 1 - (scrollFraction * 6.66);
                    scrollIndicatorRef.current.style.opacity = Math.max(0, indicatorOpacity).toString();
                }
            });
        };

        const handleResize = () => {
            if (!containerRef.current) return;
            const containerBounds = containerRef.current.getBoundingClientRect();
            const containerTop = containerBounds.top;
            const scrollableDistance = containerBounds.height - window.innerHeight;
            let scrollFraction = -containerTop / scrollableDistance;
            scrollFraction = Math.max(0, Math.min(1, scrollFraction));
            const frameIndex = Math.floor(scrollFraction * (frameCount - 1));
            drawFrame(frameIndex);
        };

        function drawFrame(index: number) {
            if (!context || !canvas || !images[index] || !images[index].complete) return;
            const img = images[index];

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, x, y, img.width * scale, img.height * scale);
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [imagesPreloaded]);

    return (
        <div ref={containerRef} className="relative h-[300vh] w-full bg-brand-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {!imagesPreloaded && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 text-white font-mono uppercase tracking-widest text-sm bg-brand-black">
                        Loading Cinematic Experience...
                    </div>
                )}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                    ref={flashRef}
                    className="absolute inset-0 bg-white pointer-events-none transition-opacity duration-100 opacity-0"
                />

                {imagesPreloaded && (
                    <div
                        ref={scrollIndicatorRef}
                        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none mix-blend-overlay"
                    >
                        <span className="text-[12vw] leading-none tracking-tighter uppercase font-black text-white/40 drop-shadow-2xl text-center whitespace-nowrap">
                            Scroll Down
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
