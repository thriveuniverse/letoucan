'use client';

import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function History() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen">
            <Navbar />

            <Hero
                title={t('nav.history')}
                video="/4-fontaines-enfants-jouent.mp4"
                image="https://images.unsplash.com/photo-1597075484447-fd08929e74b3?auto=format&fit=crop&q=80"
            />

            <section className="py-24">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="section-title text-center mb-16">{t('history.title')}</h2>

                            <div className="prose prose-lg prose-primary max-w-none">
                                {t('history.content').split('\n\n').map((paragraph: string, i: number) => {
                                    // Add a drop cap to the first paragraph
                                    if (i === 0) {
                                        return (
                                            <p key={i} className="text-gray-700 leading-relaxed mb-8 text-xl first-letter:text-7xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-primary">
                                                {paragraph}
                                            </p>
                                        );
                                    }

                                    // RIOTS SECTION: Add the animated protest video
                                    if (i === 2) {
                                        return (
                                            <React.Fragment key={i}>
                                                <div className="my-12 flex justify-center">
                                                    <div className="w-full max-w-2xl flex flex-col gap-3">
                                                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black">
                                                            <video
                                                                autoPlay
                                                                loop
                                                                muted
                                                                playsInline
                                                                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
                                                            >
                                                                <source src="/protest-1907.mp4" type="video/mp4" />
                                                            </video>
                                                            <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                                                                <span className="text-[10px] text-white/80 uppercase tracking-widest font-medium">{t('history.riotLabel')}</span>
                                                            </div>
                                                        </div>
                                                        <p className="text-[10px] text-right text-gray-400 font-medium uppercase tracking-wider">
                                                            {t('history.archiveSource')}
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                                                    {paragraph}
                                                </p>
                                            </React.Fragment>
                                        );
                                    }

                                    // CINEMA SECTION: Add the film still images
                                    if (i === 3) {
                                        return (
                                            <React.Fragment key={i}>
                                                <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <div className="flex flex-col gap-4">
                                                        <img src="/mes-petites-amoureuses.jpeg" className="w-full h-64 object-cover rounded-2xl shadow-lg border-4 border-white" alt="Mes Petites Amoureuses Film Still" />
                                                        <p className="text-xs text-center text-gray-400 italic">{t('history.filmStill1')}</p>
                                                    </div>
                                                    <div className="flex flex-col gap-4">
                                                        <img src="/film-eustache.jpeg" className="w-full h-64 object-cover rounded-2xl shadow-lg border-4 border-white md:mt-12" alt="Narbonne Cinema History" />
                                                        <p className="text-xs text-center text-gray-400 italic">{t('history.filmStill2')}</p>
                                                    </div>
                                                </div>
                                                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                                                    {paragraph}
                                                </p>
                                            </React.Fragment>
                                        );
                                    }

                                    return (
                                        <p key={i} className="text-gray-700 leading-relaxed mb-8 text-lg">
                                            {paragraph}
                                        </p>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Fun Fact Section */}
            <section className="py-20 bg-primary/5">
                <div className="container-custom text-center">
                    <div className="max-w-2xl mx-auto p-12 bg-white rounded-3xl shadow-xl relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-serif text-2xl font-bold italic">
                            ?
                        </div>
                        <h3 className="text-2xl font-serif text-primary mb-4">{t('history.didYouKnow')}</h3>
                        <p className="text-gray-600 italic">
                            {t('history.funFact')}
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
