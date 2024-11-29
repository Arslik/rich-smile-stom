import Image from 'next/image';

export default function WhyUsSection() {
    const services = [
        {
            id: 1,
            title: 'Лучший сервис',
            description: 'Лучший сервис Лучший сервис Лучший сервис',
            image: '/temp/service1.png',
        },
        {
            id: 2,
            title: 'Лучший сервис',
            description: 'Лучший сервис Лучший сервис Лучший сервис',
            image: '/temp/service2.png',
        },
        {
            id: 3,
            title: 'Лучший сервис',
            description: 'Лучший сервис Лучший сервис Лучший сервис',
            image: '/temp/service3.png',
        },
        {
            id: 4,
            title: 'Лучший сервис',
            description: 'Лучший сервис Лучший сервис Лучший сервис',
            image: '/temp/service1.png',
        },
    ];

    return (
        <section id="why-us-section" className="bg-white py-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Почему мы?</h2>
                    <p className="text-gray-600 mt-2">Почему нам верят?</p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 text-center"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={400}
                                height={250}
                                className="rounded-lg mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">
                                {service.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                        </div>
                    ))}
                </div>

                {/* WhatsApp Button */}
                <div className="text-center mt-8">
                    <a
                        href="https://wa.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 text-white bg-[#03989E] rounded-lg hover:bg-teal-600 transition"
                    >
                        Написать в WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
