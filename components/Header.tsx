'use client';
import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const sections = [
        { label: "Услуги", id: "services-section" },
        { label: "О нас", id: "about-us-section" },
        { label: "Наши доктора", id: "doctors-carousel-section" },
        { label: "Почему мы?", id: "why-us-section" },
        { label: "Отзывы", id: "testimonials-section" },
        { label: "Контакты", id: "contact-info-section" },
    ];

    return (
        <header className="bg-white shadow-sm top-0 z-40">
            <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
                {/* Logo */}
                <div className="flex items-center">
                    <Image src={"/logo.svg"} alt={"Rich Smile Stom"} width={70} height={70} />
                </div>

                {/* Navigation Links (Hidden on small screens) */}
                <nav className="hidden md:flex space-x-6">
                    {sections.map((item) => (
                        <a
                            href={`#${item.id}`}
                            key={item.id}
                            className="text-gray-600 hover:text-[#03989E] transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    >
                        {/* Hamburger Icon */}
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {menuOpen ? (
                                // Close Icon
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                // Hamburger Icon
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {menuOpen && (
                <nav className="bg-white shadow-md md:hidden">
                    <ul className="flex flex-col space-y-2 py-4 px-6">
                        {sections.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className="block text-gray-600 hover:text-[#03989E] transition-colors"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}