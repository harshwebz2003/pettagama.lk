"use client";

import React from 'react';
import { motion } from "framer-motion";

function FloatingPaths({ position }: { position?: number }) {
    // Generate infinity-shaped paths
    const paths = Array.from({ length: 36 }, (_, i) => {
        // Parameters for the infinity shape
        const scale = 200 + i * 10; // Base scale that increases with each path
        const offsetX = 348; // Center X position (half of viewBox width)
        const offsetY = 158; // Center Y position (half of viewBox height)
        
        // Create a figure-8 / infinity path using cubic bezier curves
        const d = `
            M ${offsetX - scale} ${offsetY}
            C ${offsetX - scale} ${offsetY - scale * 0.5}, 
              ${offsetX - scale * 0.5} ${offsetY - scale * 0.5}, 
              ${offsetX} ${offsetY}
            C ${offsetX + scale * 0.5} ${offsetY + scale * 0.5}, 
              ${offsetX + scale} ${offsetY + scale * 0.5}, 
              ${offsetX + scale} ${offsetY}
            C ${offsetX + scale} ${offsetY - scale * 0.5}, 
              ${offsetX + scale * 0.5} ${offsetY - scale * 0.5}, 
              ${offsetX} ${offsetY}
            C ${offsetX - scale * 0.5} ${offsetY + scale * 0.5}, 
              ${offsetX - scale} ${offsetY + scale * 0.5}, 
              ${offsetX - scale} ${offsetY}
        `.replace(/\s+/g, ' ').trim();
        
        return {
            id: i,
            d,
            color: `rgba(41,171,226,${0.1 + i * 0.03})`,
            width: 0.5 + i * 0.03,
        };
    });

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-sky-500"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path, index) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.15 + path.id * 0.02}
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 1, 0],
                            opacity: [0, 0.7, 0.7, 0],
                        }}
                        transition={{
                            duration: 15 + index * 0.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: index * 0.2,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Pettagama.lk",
    titleBackground = true,
    backgroundStyle = "gradient",
    subtitle = "Everything You Need For Your Creativity",
    showGradientOrb = true,
    children,
}: {
    title?: string;
    titleBackground?: boolean;
    backgroundStyle?: "glass" | "gradient" | "solid" | "glow";
    subtitle?: string;
    showGradientOrb?: boolean;
    children?: React.ReactNode;
}) {
    const words = title.split(" ");

    const getBackgroundClasses = () => {
        switch (backgroundStyle) {
            case "glass":
                return "bg-white/40 border border-sky-200/60 shadow-2xl backdrop-blur-xl";
            case "gradient":
                return "bg-gradient-to-br from-white/80 via-sky-50/60 to-white/40 backdrop-blur-xl border border-sky-200/50 shadow-2xl";
            case "solid":
                return "bg-white/95 backdrop-blur-md shadow-2xl";
            case "glow":
                return "bg-white/60 backdrop-blur-2xl border border-sky-300/40 shadow-2xl shadow-sky-400/20";
            default:
                return "";
        }
    };

    return (
        <div className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden hero-logo-bg py-16 sm:py-24">
            {/* Animated gradient orb */}
            {showGradientOrb && (
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full pointer-events-none"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400/25 via-blue-400/20 to-teal-300/25 blur-3xl" />
                </motion.div>
            )}

            <div className="absolute inset-0">
                <FloatingPaths position={1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="max-w-5xl mx-auto space-y-6"
                >
                    {/* Title container with background */}
                    <motion.div
                        className={`
                            inline-block 
                            ${titleBackground ? `p-6 sm:p-10 md:p-12 rounded-3xl ${getBackgroundClasses()}` : ''}
                            relative w-full
                        `}
                        whileHover={titleBackground ? { scale: 1.01 } : {}}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {/* Decorative elements for glass effect */}
                        {titleBackground && backgroundStyle === "glass" && (
                            <>
                                <div className="absolute -top-px -left-px -right-px h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
                                <div className="absolute -bottom-px -left-px -right-px h-px bg-gradient-to-r from-transparent via-sky-300/30 to-transparent" />
                            </>
                        )}

                        {/* Main title */}
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none">
                            {words.map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className="inline-block mr-3 last:mr-0"
                                >
                                    {word.split("").map((letter, letterIndex) => (
                                        <motion.span
                                            key={`${wordIndex}-${letterIndex}`}
                                            initial={{ y: 80, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                delay:
                                                    wordIndex * 0.1 +
                                                    letterIndex * 0.03,
                                                type: "spring",
                                                stiffness: 150,
                                                damping: 25,
                                            }}
                                            className="inline-block text-transparent bg-clip-text 
                                                bg-gradient-to-br from-[#0277BD] via-[#29ABE2] to-[#01579B]
                                                drop-shadow-sm"
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </span>
                            ))}
                        </h1>

                        {/* Subtitle */}
                        {subtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="mt-4 text-sm sm:text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto"
                            >
                                {subtitle}
                            </motion.p>
                        )}

                        {/* Additional Content / Action buttons inserted here */}
                        {children && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                className="mt-6"
                            >
                                {children}
                            </motion.div>
                        )}

                        {/* Animated underline */}
                        <motion.div
                            className="mt-6 mx-auto h-1 bg-gradient-to-r from-transparent via-[#29ABE2] to-transparent"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
