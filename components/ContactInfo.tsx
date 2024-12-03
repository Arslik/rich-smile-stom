import Image from "next/image";

export default function ContactInfo() {
    return (
        <section id="contact-info-section" className="bg-gray-50 py-12">
            <div className="container mx-auto flex flex-col space-y-6 lg:flex-row lg:space-y-0 items-center justify-between">
                {/* Working Hours */}
                <div className="flex flex-col sm:flex-row items-center sm:space-x-4 text-center sm:text-left">
                    <div>
                        <Image
                            src="/temp/clock-icon.svg"
                            alt="Working Hours Icon"
                            width={35}
                            height={35}
                        />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mt-4 sm:mt-0">Часы работы</h3>
                        <p className="text-gray-600">Ежедневно</p>
                        <p className="text-gray-600">Круглосуточно</p>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row items-center sm:space-x-4 text-center sm:text-left">
                    <div>
                        <Image
                            src="/temp/phone-icon.svg"
                            alt="Phone Icon"
                            width={35}
                            height={35}
                        />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mt-4 sm:mt-0">Наш номер</h3>
                        <p className="text-gray-600">+77002674866</p>
                    </div>
                </div>

                {/* Call and WhatsApp Buttons */}
                <div className="flex flex-wrap gap-4 justify-center sm:justify-end">
                    <a href="tel:+77002674866">
                        <button
                            className="bg-[#03989E] mt-4 text-white px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-lg hover:bg-teal-600 transition text-sm sm:text-base lg:text-lg w-full sm:w-auto">
                            Позвонить
                        </button>
                    </a>
                    <a
                        href="https://wa.me/+77002674866"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            className="border border-[#03989E] mt-4 text-teal-500 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-lg hover:bg-teal-50 transition text-sm sm:text-base lg:text-lg w-full sm:w-auto">
                            Написать в WhatsApp
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}