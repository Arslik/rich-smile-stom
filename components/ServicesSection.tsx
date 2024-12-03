import Image from "next/image";

export default function ServicesSection() {
    const services = [
        {
            title: "Ортодонтия",
            description: "Услуги в ортодонтии.",
            image: "/temp/orthodontics.png",
            link: "Подробнее",
            whatsappText: "Написать в WhatsApp",
        },
        {
            title: "Ортопедия",
            description: "Услуги в ортопедии.",
            image: "/temp/orthopedics.png",
            link: "Подробнее",
            whatsappText: "Написать в WhatsApp",
        },
        {
            title: "Хирургия",
            description: "Услуги в хирургии.",
            image: "/temp/surgery.png",
            link: "Подробнее",
            whatsappText: "Написать в WhatsApp",
        },
    ];

    return (
        <section id="services-section" className="bg-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row items-center justify-between mb-8 space-y-4 sm:space-y-0">
                    <div className="text-center sm:text-left">
                        <h2 className="text-3xl font-bold text-gray-800">Услуги</h2>
                        <p className="text-gray-600">Популярные услуги</p>
                    </div>
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

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-lg shadow-md border border-gray-200 p-6 flex flex-col"
                        >
                            {/* Service Title and Icon */}
                            <div className="flex items-center space-x-3 mb-4">
                                <Image
                                    src="/temp/tooth-icon.svg"
                                    alt="Service Icon"
                                    width={30}
                                    height={30}
                                    className="flex-shrink-0"
                                />
                                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                            </div>

                            {/* Service Description */}
                            <p className="text-gray-600">
                                {service.description}{" "}
                                <a href="#" className="text-[#03989E] hover:underline">
                                    {service.link}
                                </a>
                            </p>

                            {/* Service Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={400}
                                height={250}
                                className="rounded-lg mt-4 w-full h-auto"
                            />

                            {/* WhatsApp Link */}
                            <a
                                href="https://wa.me/+77002674866"
                                className="text-[#03989E] font-medium hover:underline mt-4 inline-block"
                            >
                                {service.whatsappText} →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}