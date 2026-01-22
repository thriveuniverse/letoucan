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
                title="Echoes from the Vaults"
                video="/lantre-histoire.mp4"
            />

            <section className="py-24" style={{ background: 'var(--surface)' }}>
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="section-title text-center mb-16">Echoes from the Vaults</h2>

                            <div className="prose prose-lg prose-primary max-w-none">
                                {/* Introduction */}
                                <p className="text-gray-700 leading-relaxed mb-12 text-xl first-letter:text-7xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-primary">
                                    Deep beneath Narbonne's Bourg quarter, in the cool stone embrace of L'Antre's cellars, history doesn't just linger—it whispers. These vaults, born from the 13th century, have seen trade flourish, secrets buried, and shadows flee. What follows isn't dusty facts, but the kind of local tales that locals swap over a pint: half-legend, half-lure, all intrigue. Pull up a stool. Listen close. The stones might just tell you more.
                                </p>

                                {/* 13th Century Section */}
                                <h3 className="text-3xl font-serif font-bold text-primary mb-6 mt-16">13th Century: Shadows of the Forge (The Hidden Birth)</h3>
                                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                                    Around 1250, the Maison Consulaire du Bourg rises from the limestone—like a fortress for merchants and consuls in the river-hugging chaos of the Bourg. Amid the hammers and mortar, the first whispers stir: hidden passages snaking below, carved for sly reasons. Tunnels to shuttle spices and silks to the Aude's edge (that wild vein now tamed as the Canal de la Robine), or bolt-holes against floods, raids, or the odd heated guild spat.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                                    Then comes the Crusade's chill wind—the Albigensian storm of 1209–1229. Rumor has it a rogue consul, thumbing his nose at the archbishops, tucked a band of Cathar "perfects" into these very vaults. Outcasts with banned scrolls and a firebrand faith, hunkered down with pilfered bread and herbs, plotting their dash to the Pyrenees. The cellars' damp grip? Ideal for ghosts-in-waiting. No proof, mind—just the kind of yarn that makes you eye the shadows funny.
                                </p>

                                {/* 13th–14th Centuries Section */}
                                <h3 className="text-3xl font-serif font-bold text-primary mb-6 mt-16">13th–14th Centuries: The Buried Gamble (Trade's Wild Heart)</h3>
                                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                                    As drapes and dyes flood the markets, a canny consul (maybe that same Crusade-defier) plays a long game. He slips a lone gold coin—stamped from the counts of Toulouse's coffers—into the foundations, a "luck charm" to lock in endless coin for his kin and the quarter. Unearth it, the tale teases, and riches rain down... but so does the itch of endless roads, mirroring those footloose traders who chased deals from dawn to dusk.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                                    It's treasure-map bait, pure and simple—a nod to the Bourg's gambler's soul, where every bolt of cloth hid a risk. Still, folks wonder: is that glint underfoot the key to fortune... or just another restless curse?
                                </p>

                                {/* Medieval to Early Modern Section */}
                                <h3 className="text-3xl font-serif font-bold text-primary mb-6 mt-16">Medieval to Early Modern: The Restless Murmurs (Echoes That Won't Quit)</h3>
                                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                                    Generations grind on, and the grand hall upstairs hums with consul clashes and guild growls. But the stones? They hoard it all. Come a hushed evening—equinox winds rattling the Aude—some swear they catch snatches of old Occitan drifting up: sharp barters over wool, thunderous votes on tariffs, or the low rumble of deals done in the dark. Like the walls hit replay when no one's looking.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                                    Civic fire never fully snuffed; it simmers, waiting for a gust. Next time you're nursing a brew down here, strain an ear. Might be history's hangover... or just the vaults reminding you who's really in charge.
                                </p>

                                {/* Across the Ages Section */}
                                <h3 className="text-3xl font-serif font-bold text-primary mb-6 mt-16">Across the Ages: The Endless Veins (Tunnels to the Edge)</h3>
                                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                                    What kicks off as quick-draw river runs balloons into saga stuff: souterrains sprawling wild, threading the Bourg's underbelly like forgotten roots. One thread hooks these cellars (or kin nearby, say the basilique Saint-Paul-Serge) straight to Fontfroide Abbey, 15 klicks into the Corbières' jagged teeth. Fugitives' highway, maybe—Cathars dodging torches, wayward monks dodging vows, or some haughty "roi" (noble pinch-hitter in Revolution rags or religious rifts) vanishing into the night.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                                    The Robine canal's flank? A sneaky on-ramp in the telling, wedding ancient water-ways to midnight mules or desperate drifts. No soul's braved the full haul (or lived to brag), but the pull endures: these depths once wired Narbonne's pulse to the untamed beyond. What's down there now? Spices long rotted... or a path we ain't mapped yet?
                                </p>

                                {/* Conclusion */}
                                <p className="text-gray-700 leading-relaxed mb-12 text-lg italic border-l-4 border-primary pl-6">
                                    There you have it—the vaults' rough-hewn playlist, scraped from Narbonne's underbelly. Not gospel, just grit that sticks. If the whispers call, they're louder with a glass in hand. What's your take—which tale's got you glancing at the floor?
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20" style={{ background: 'var(--surface-light)' }}>
                <div className="container-custom text-center">
                    <div className="max-w-2xl mx-auto p-12 rounded-3xl shadow-xl relative" style={{ background: 'var(--surface)' }}>
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-serif text-2xl font-bold italic">
                            🍺
                        </div>
                        <h3 className="text-2xl font-serif text-primary mb-4">Ready for More Tales?</h3>
                        <p className="text-gray-600 italic mb-6">
                            These vaults hold more secrets than we've shared. Come visit L'Antre and hear the stories firsthand over a craft beer.
                        </p>
                        <a href="/about" className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-light transition-all transform hover:scale-105 shadow-lg">
                            Learn More About Us
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
