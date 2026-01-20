'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Logo and About */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-white">
                                <img src="/logo.jpg" alt="Le Toucan Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="font-serif text-2xl font-bold">Le Toucan</span>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            {t('home.subtitle')}
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/letoucannarbonne/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61578060914589" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-6">{t('nav.home')}</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">{t('nav.about')}</Link>
                            </li>
                            <li>
                                <Link href="/history" className="text-gray-300 hover:text-white transition-colors">{t('nav.history')}</Link>
                            </li>
                            <li>
                                <Link href="/restaurant" className="text-gray-300 hover:text-white transition-colors">{t('nav.restaurant')}</Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">{t('nav.gallery')}</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-300">
                                <MapPin className="shrink-0 mt-1" size={20} />
                                <span>{t('footer.address')}</span>
                            </li>
                            <li>
                                <a href="tel:+33680751161" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                    <Phone size={20} />
                                    <span>06 80 75 11 61</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:letoucan11@outlook.fr" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                    <Mail size={20} />
                                    <span>letoucan11@outlook.fr</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400 space-y-2">
                    <p>
                        © {new Date().getFullYear()} Le Toucan. {t('footer.rights')}
                    </p>
                    <p className="text-xs">
                        Built by{' '}
                        <a
                            href="https://thethriveclan.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors underline underline-offset-4"
                        >
                            The Thrive Clan
                        </a>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
