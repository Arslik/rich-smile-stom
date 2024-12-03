import Image from 'next/image';

export default function Footer() {
    const sections = [
        { label: "Услуги", id: "services-section" },
        { label: "О нас", id: "about-us-section" },
        { label: "Наши доктора", id: "doctors-carousel-section" },
        { label: "Почему мы?", id: "why-us-section" },
        { label: "Отзывы", id: "testimonials-section" },
        { label: "Контакты", id: "contact-info-section" },
    ];

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
                    <div className="flex flex-wrap items-center  justify-center space-x-4 sm:space-x-6">
                        {/* Social Media Icons */}
                        <a href="https://wa.me/+77002674866" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/temp/whatsapp-icon.svg"
                                alt="WhatsApp"
                                width={20}
                                height={20}
                            />
                        </a>
                        <a href="https://www.instagram.com/rich_smile_stom/" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/temp/instagram-icon.svg"
                                alt="Instagram"
                                width={20}
                                height={20}
                            />
                        </a>
                        <a
                            href="https://2gis.kz/almaty/firm/70000001090394350?m=76.904858%2C43.247647%2F13.08"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/temp/2gis-icon.svg"
                                alt="2GIS"
                                width={20}
                                height={20}
                            />
                        </a>
                        <a href="/contact">
                            <Image
                                src="/temp/phonee-icon.svg"
                                alt="Phone"
                                width={20}
                                height={20}
                            />
                        </a>
                        {/* Phone Number */}
                        <a
                            href="tel:+77002674866"
                            className="text-sm text-white font-medium block sm:inline"
                        >
                            +7 (700) 267-48-66
                        </a>
                    </div>
                </div>

                {/* Links Section */}
                <div className="text-center lg:text-left">
                    {sections.map((item) => (
                        <a
                            href={`#${item.id}`}
                            key={item.id}
                            className="text-white text-lg font-medium mb-4 hover:text-[#03989E] transition-colors"
                        >
                            <p>{item.label}</p>
                            <br/>
                        </a>

                    ))}
                </div>
            </div>

            {/* Divider Line */}
            <div className="mt-8 border-t border-[#03989E]"></div>
        </footer>
    );
}