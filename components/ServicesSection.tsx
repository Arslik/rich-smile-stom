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
            description: "Услуги в ортодонтии.",
            image: "/temp/orthopedics.png",
            link: "Подробнее",
            whatsappText: "Написать в WhatsApp",
        },
        {
            title: "Хирургия",
            description: "Услуги в ортодонтии.",
            image: "/temp/surgery.png",
            link: "Подробнее",
            whatsappText: "Написать в WhatsApp",
        },
    ];

    return (
        <section id="services-section" className="bg-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="flex flex-row sm:flex-row items-center justify-between mb-8 space-y-4 sm:space-y-0">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">Услуги</h2>
                        <p className="text-gray-600">Популярные услуги</p>
                    </div>
                    <button className="bg-[#03989E] text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition">
                        Позвонить
                    </button>
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
                                href="#"
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