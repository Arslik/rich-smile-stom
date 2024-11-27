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
        <section className="bg-white py-16">
            <div className="container mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">Услуги</h2>
                        <p className="text-gray-600">Популярные услуги</p>
                    </div>
                    <button className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition">
                        Позвонить
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-lg shadow-md border border-gray-200 p-6"
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <div>
                                    <Image
                                        src="/temp/tooth-icon.svg"
                                        alt="Service Icon"
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                            </div>
                            <p className="text-gray-600">
                                {service.description}{" "}
                                <a href="#" className="text-teal-500 hover:underline">
                                    {service.link}
                                </a>
                            </p>
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={400}
                                height={250}
                                className="rounded-lg mt-4"
                            />
                            <a
                                href="#"
                                className="text-teal-500 font-medium hover:underline mt-4 inline-block"
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