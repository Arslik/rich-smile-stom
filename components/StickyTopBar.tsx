import Image from "next/image";

export default function StickyTopBar() {
    return (
        <div className="bg-[#03989E] text-white sticky top-0 z-50">
            <div className="container mx-auto flex flex-wrap items-center justify-between py-2 px-4">
                {/* Location */}
                <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                    <Image
                        src="/temp/location-icon.svg"
                        alt="Location Icon"
                        width={20}
                        height={20}
                    />
                    <span className="text-sm">г.Алматы,</span>
                </div>

                {/* Availability */}
                <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                    <Image
                        src="/temp/clock.svg"
                        alt="Clock Icon"
                        width={20}
                        height={20}
                    />
                    <span className="text-sm">Круглосуточно</span>
                </div>

                {/* Social Media + Contact */}
                <div className="flex flex-wrap items-center  justify-center space-x-4 sm:space-x-6">
                    {/* Social Media Icons */}
                    <a href="https://wa.me/+77087638667" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/temp/whatsapp-icon.svg"
                            alt="WhatsApp"
                            width={20}
                            height={20}
                        />
                    </a>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
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
                        href="tel:+77755699428"
                        className="text-sm font-medium block sm:inline"
                    >
                        +7 (775) 569-94-28
                    </a>
                </div>
            </div>
        </div>
    );
}