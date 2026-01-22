'use client';

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

export default function Gallery() {
    const { t } = useLanguage();
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    // Placeholder Collection
    const curatedImages = [
        { url: 'placeholder', title: 'Atmospheric Shots', span: 'md:col-span-2 md:row-span-2' },
        { url: 'placeholder', title: 'Event Photography', span: 'md:col-span-1 md:row-span-2' },
        { url: 'placeholder', title: 'Food & Drink', span: 'md:col-span-1 md:row-span-1' },
        { url: 'placeholder', title: 'Portrait Series', span: 'md:col-span-1 md:row-span-1' },
        { url: 'placeholder', title: 'Architecture', span: 'md:col-span-2 md:row-span-1' },
        { url: 'placeholder', title: 'Street Scenes', span: 'md:col-span-1 md:row-span-1' },
        { url: 'placeholder', title: 'Night Photography', span: 'md:col-span-1 md:row-span-1' },
        { url: 'placeholder', title: 'Details & Textures', span: 'md:col-span-1 md:row-span-1' },
        { url: 'placeholder', title: 'Community Moments', span: 'md:col-span-1 md:row-span-1' },
    ];

    return (
        <main className="min-h-screen" style={{ background: 'var(--surface-light)' }}>
            <Navbar />

            <Hero
                title=""
                video="/lantre-swords.mp4"
                videoFit="contain"
                bgColor="#260602"
                showGradient={false}
                image="/le-toucan-narbonne (18).png"
            />

            <section className="py-24">
                <div className="container-custom">
                    <div className="text-center mb-20">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-accent font-bold uppercase tracking-[0.3em] text-xs"
                        >
                            {t('gallery.collection')}
                        </motion.span>
                        <h2 className="section-title mt-4">{t('gallery.title')}</h2>
                        <div className="w-24 h-1 bg-primary/10 mx-auto mt-8"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                        {curatedImages.map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                onClick={() => img.url !== 'placeholder' && setSelectedImg(img.url)}
                                className={`group relative rounded-[2.5rem] overflow-hidden ${img.url !== 'placeholder' ? 'cursor-pointer' : ''} shadow-soft transition-all duration-700 hover:shadow-2xl ${img.span}`}
                                style={{ background: 'var(--surface)' }}
                            >
                                {img.url === 'placeholder' ? (
                                    <div className="w-full h-full bg-gradient-to-br from-accent/10 to-primary/10 flex flex-col items-center justify-center text-center p-6 transition-transform duration-1000 group-hover:scale-105">
                                        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                                            <span className="text-2xl text-accent/60">📷</span>
                                        </div>
                                        <p className="text-accent/70 font-serif text-sm italic">{img.title}</p>
                                        <p className="text-accent/50 text-xs mt-2 uppercase tracking-wider">Coming Soon</p>
                                    </div>
                                ) : (
                                    <img
                                        src={img.url}
                                        alt={img.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                )}
                                {/* Soft Overlay */}
                                {img.url !== 'placeholder' && (
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                                        <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <Maximize2 size={32} className="mx-auto mb-4 opacity-80" />
                                            <p className="font-serif text-xl italic">{img.title}</p>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <p className="text-gray-400 italic font-serif">
                            "{t('gallery.quote')}"
                        </p>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
                        onClick={() => setSelectedImg(null)}
                    >
                        <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
                            <X size={40} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImg}
                            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
