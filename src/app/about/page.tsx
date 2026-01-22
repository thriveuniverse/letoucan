'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Beer, Leaf, Users, Sparkles } from "lucide-react";

export default function About() {
    const { t } = useLanguage();

    const sections = [
        {
            icon: <Leaf className="text-accent" size={40} />,
            title: t('about.section1.title'),
            content: t('about.section1.content')
        },
        {
            icon: <Sparkles className="text-accent" size={40} />,
            title: t('about.section2.title'),
            content: t('about.section2.content')
        },
        {
            icon: <Users className="text-accent" size={40} />,
            title: t('about.section3.title'),
            content: t('about.section3.content')
        }
    ];

    return (
        <main className="min-h-screen">
            <Navbar />

            <Hero
                title={t('nav.about')}
                subtitle={t('about.heroSubtitle')}
                video="/join-us.mp4"
                image="https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80"
            />

            {/* Main Manifesto Section */}
            <section className="py-24" style={{ background: 'var(--surface)' }}>
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <Beer className="text-primary mx-auto mb-6" size={64} />
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                                {t('about.mainTitle')}
                            </h2>
                            <p className="text-xl text-gray-600 italic leading-relaxed">
                                {t('about.mainQuote')}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="prose prose-lg max-w-none"
                        >
                            <p className="text-xl text-gray-700 leading-relaxed mb-8 first-letter:text-7xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-primary">
                                {t('about.intro')}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Three Pillars Section */}
            <section className="py-24" style={{ background: 'var(--surface-light)' }}>
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {sections.map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, duration: 0.6 }}
                                className="p-8 rounded-3xl shadow-xl border"
                                style={{ background: 'var(--surface)', borderColor: 'var(--accent-dark)' }}
                            >
                                <div className="mb-6 bg-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center">
                                    {section.icon}
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                                    {section.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {section.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vault Tribe CTA Section */}
            <section className="py-24 bg-primary text-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                                {t('about.ctaTitle')}
                            </h2>
                            <p className="text-xl text-gray-200 leading-relaxed mb-8">
                                {t('about.ctaText')}
                            </p>
                            <p className="text-lg text-gray-300 mb-10">
                                {t('about.ctaSubtext')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/history"
                                    className="btn-primary inline-flex items-center justify-center gap-2"
                                    style={{ background: 'var(--surface)', color: 'var(--primary)' }}
                                >
                                    <Beer size={20} /> {t('about.ctaButton1')}
                                </a>
                                <a
                                    href="https://instagram.com/letoucannarbonne"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-outline inline-flex items-center justify-center gap-2"
                                    style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                                >
                                    {t('about.ctaButton2')}
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
