'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function About() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen">
            <Navbar />

            <Hero
                title={t('nav.about')}
                image="/duncan-hero.jpg"
            />

            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="section-title">{t('about.title')}</h2>
                            <div className="prose prose-lg prose-primary">
                                {t('about.content').split('\n\n').map((paragraph: string, i: number) => (
                                    <p key={i} className="text-gray-700 leading-relaxed mb-6 text-lg">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="sticky top-32 flex flex-col items-center lg:items-end"
                        >
                            <div className="relative w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                                <img
                                    src="/duncan-profile.jpg"
                                    alt="Duncan Boyer"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                            </div>
                            <div className="mt-6 p-6 bg-primary text-white rounded-xl shadow-xl lg:-mr-8 relative z-10 max-w-xs transform lg:-translate-x-8">
                                <p className="font-serif italic text-lg">
                                    "{t('about.quote')}"
                                </p>
                                <p className="mt-2 font-bold">— Duncan Boyer</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
