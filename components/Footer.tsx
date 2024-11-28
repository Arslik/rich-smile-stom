import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-[#03989E] py-16">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center lg:items-start">
                {/* Logo Section */}
                <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
                    <div className="mb-4">
                        <Image
                            src="/logo.svg" // Replace with actual logo path
                            alt="Dental Logo"
                            width={100}
                            height={100}
                        />
                    </div>
                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="text-[#03989E] hover:text-teal-300 transition"
                            aria-label="Facebook"
                        >
                            <FaFacebookF size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-[#03989E] hover:text-teal-300 transition"
                            aria-label="Instagram"
                        >
                            <FaInstagram size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-[#03989E] hover:text-teal-300 transition"
                            aria-label="YouTube"
                        >
                            <FaYoutube size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-[#03989E] hover:text-teal-300 transition"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>
                </div>

                {/* Links Section */}
                <div className="text-center lg:text-left">
                    <h3 className="text-white text-lg font-semibold mb-4">О нас</h3>
                    <ul className="space-y-2 text-[#03989E]">
                        <li>
                            <a href="#" className="hover:text-teal-300 transition">
                                Свяжитесь с нами
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-teal-300 transition">
                                Услуги
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-teal-300 transition">
                                Команда
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Divider Line */}
            <div className="mt-8 border-t border-[#03989E]"></div>
        </footer>
    );
}