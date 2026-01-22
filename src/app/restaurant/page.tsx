'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Phone, Mail, Star } from "lucide-react";

export default function Restaurant() {
    const { t, language } = useLanguage();

    const menuSections = [
        {
            title: language === 'fr' ? 'À PARTAGER' : 'TO SHARE',
            items: [
                { name: 'Planche de charcuteries', price: '13€', desc: language === 'fr' ? 'Sélection de charcuteries artisanales' : 'Selection of artisanal cold meats' },
                { name: 'Planche de fromages', price: '13€', desc: language === 'fr' ? 'Fine sélection de fromages locaux' : 'Fine selection of local cheeses' },
                { name: 'Planche mixte', price: '20€', desc: language === 'fr' ? 'Le meilleur des deux mondes' : 'The best of both worlds' },
            ]
        },
        {
            title: language === 'fr' ? 'ENTRÉES (6€)' : 'STARTERS (6€)',
            items: [
                { name: 'Oeuf mimosa', price: '6€', desc: language === 'fr' ? 'Un grand classique revisité' : 'A great classic revisited' },
                { name: 'Hareng pomme à l\'huile', price: '6€', desc: language === 'fr' ? 'Tradition brasserie' : 'Brasserie tradition' },
                { name: 'Pâté en croute', price: '6€', desc: language === 'fr' ? 'Maison et savoureux' : 'Homemade and flavorful' },
                { name: 'Soupe à l\'oignon', price: '6€', desc: language === 'fr' ? 'Gratinée au fromage' : 'Gratinated with cheese' },
                { name: 'Camembert au four', price: '6€', desc: language === 'fr' ? '+6€ avec charcuterie' : '+6€ with cold meats' },
                { name: 'Pied de cochon', price: '6€', desc: language === 'fr' ? 'Pour les amateurs' : 'For enthusiasts' },
            ]
        },
        {
            title: language === 'fr' ? 'SALADES (17€)' : 'SALADS (17€)',
            items: [
                { name: 'Salade de chèvre chaud', price: '17€', desc: language === 'fr' ? 'Samousas chèvre, miel, noix' : 'Goat cheese samosas, honey, walnuts' },
                { name: 'La végé du Toucan', price: '17€', desc: language === 'fr' ? 'Falafels, tomates, chou rouge, carottes' : 'Falafels, tomatoes, red cabbage, carrots' },
                { name: 'Salade César', price: '17€', desc: language === 'fr' ? 'Anchois, poulet panés, croûtons, parmesan, oeufs' : 'Anchovies, breaded chicken, croutons, parmesan, eggs' },
            ]
        },
        {
            title: language === 'fr' ? 'PLATS' : 'MAINS',
            items: [
                { name: 'Plat du jour', price: '14,90€', desc: language === 'fr' ? 'Cuisiné frais chaque matin' : 'Cooked fresh every morning' },
                { name: 'Le burger du Toucan', price: '16€', desc: language === 'fr' ? 'Bœuf local, comté, oignons confits' : 'Local beef, Comté cheese, candied onions' },
                { name: 'Saucisse aligot', price: '16€', desc: language === 'fr' ? 'Un incontourable de l\'Aubrac' : 'A must-have from Aubrac' },
                { name: 'Tête de veau sauce Gribiche', price: '18€', desc: language === 'fr' ? 'Un classique de la gastronomie française' : 'A classic of French gastronomy' },
                { name: 'Brandade de morue', price: '18€', desc: language === 'fr' ? 'Recette traditionnelle languedocienne' : 'Traditional Languedoc recipe' },
                { name: 'Cassoulet', price: '20€', desc: language === 'fr' ? 'Le roi de la cuisine locale' : 'The king of local cuisine' },
                { name: 'Viande / Poisson du jour', price: 'Ardoise', desc: language === 'fr' ? 'Selon le marché et l\'inspiration' : 'Depending on market and inspiration' },
            ]
        },
        {
            title: language === 'fr' ? 'DESSERTS (6€)' : 'DESSERTS (6€)',
            items: [
                { name: 'Dessert du jour', price: '6€', desc: language === 'fr' ? 'Douceur du moment' : 'Sweetness of the moment' },
                { name: 'Coulant au chocolat', price: '6€', desc: language === 'fr' ? 'Cœur fondant' : 'Molten heart' },
                { name: 'Crème brûlée', price: '6€', desc: language === 'fr' ? 'Vanille Bourbon' : 'Bourbon vanilla' },
                { name: 'Crème caramel', price: '6€', desc: language === 'fr' ? 'Comme chez grand-mère' : 'Just like at grandma\'s' },
                { name: 'Poire Belle-Hélène', price: '6€', desc: language === 'fr' ? 'Chocolat chaud' : 'Hot chocolate' },
                { name: 'Baba au rhum', price: '8€', desc: language === 'fr' ? 'Généreux et parfumé (Hors menu)' : 'Generous and fragrant (Outside menu)' },
            ]
        },
        {
            title: language === 'fr' ? 'TOUCANITO (10€)' : 'LITTLE TOUCAN (10€)',
            items: [
                { name: 'Steack haché frites ou légumes', price: '10€', desc: language === 'fr' ? 'Réservé aux enfants de moins de 12 ans' : 'Reserved for children under 12' },
            ]
        }
    ];

    const foodImages = [
        "/food-fish.jpg",
        "/food-drinks.png",
        "/food-board.png",
        "/food-eggs.jpg"
    ];

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Dynamic Food Header */}
            <section className="relative h-[60vh] overflow-hidden bg-primary flex items-center justify-center">
                <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-1 opacity-60">
                    {foodImages.map((img, i) => (
                        <div key={i} className="relative h-full w-full overflow-hidden">
                            <img src={img} alt="Speciale" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" />
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">{t('restaurant.title')}</h1>
                        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto italic">
                            "{t('restaurant.quote')}"
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Booking & Formulas */}
            <section className="py-16" style={{ background: 'var(--surface-light)' }}>
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Booking Info */}
                        <div className="lg:col-span-2 p-8 rounded-3xl shadow-xl border" style={{ background: 'var(--surface)', borderColor: 'var(--accent-dark)' }}>
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-primary mb-4">{t('restaurant.booking')}</h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {t('restaurant.bookingText')}
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:+33680751161" className="btn-primary flex items-center justify-center gap-2">
                                    <Phone size={18} /> 06 80 75 11 61
                                </a>
                                <a href="mailto:contact@sitename.com" className="btn-outline flex items-center justify-center gap-2">
                                    <Mail size={18} /> {t('restaurant.email')}
                                </a>
                            </div>
                        </div>

                        {/* Formulas Card */}
                        <div className="bg-primary text-white p-8 rounded-3xl shadow-xl flex flex-col items-center text-center justify-center border-4 border-accent/20">
                            <Star className="text-accent mb-4" size={32} />
                            <h3 className="text-2xl font-serif font-bold mb-4">{t('restaurant.lunchFormulas')}</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-accent font-bold uppercase tracking-widest text-xs mb-1">{t('restaurant.formula1')}</p>
                                    <p className="text-3xl font-serif font-bold">18,90€</p>
                                </div>
                                <div className="w-12 h-[1px] bg-white/20 mx-auto"></div>
                                <div>
                                    <p className="text-accent font-bold uppercase tracking-widest text-xs mb-1">{t('restaurant.formula2')}</p>
                                    <p className="text-3xl font-serif font-bold">21,90€</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu Sections Grid */}
            <section className="py-16" style={{ background: 'var(--surface)' }}>
                <div className="container-custom">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {menuSections.map((section, idx) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="break-inside-avoid p-8 rounded-3xl border shadow-sm hover:shadow-md transition-shadow"
                                style={{ background: 'var(--surface-light)', borderColor: 'var(--accent-dark)' }}
                            >
                                <h3 className="text-2xl font-serif text-primary mb-6 border-b-2 border-primary/10 pb-2">
                                    {section.title}
                                </h3>
                                <div className="space-y-6">
                                    {section.items.map((item) => (
                                        <div key={item.name} className="group">
                                            <div className="flex justify-between items-baseline mb-1">
                                                <span className="font-bold text-gray-800 group-hover:text-primary transition-colors">{item.name}</span>
                                                <span className="font-bold text-primary shrink-0 ml-4">{item.price}</span>
                                            </div>
                                            <p className="text-sm text-gray-500 italic">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto italic">
                            {t('restaurant.disclaimer')}
                        </p>
                        <div className="mt-8 flex justify-center opacity-30">
                            <img src="/logo.jpg" alt="Logo" className="w-12 h-12 grayscale rounded-full" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
