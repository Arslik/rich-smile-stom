import Image from 'next/image';

export default function WhyUsSection() {
    const services = [
        {
            id: 1,
            title: 'Профессионализм и опыт',
            description: 'Наша команда состоит из высококвалифицированных стоматологов с многолетним опытом работы в различных областях стоматологии.',
            image: '/temp/service1.png',
        },
        {
            id: 2,
            title: 'Индивидуальный подход',
            description: 'Мы понимаем, что каждый пациент уникален, и всегда стремимся к индивидуальному подходу в лечении.',
            image: '/temp/service2.png',
        },
        {
            id: 3,
            title: 'Современное оборудование и технологии',
            description: 'Мы используем только передовые стоматологические технологии и оборудование.',
            image: '/temp/service3.png',
        },
        {
            id: 4,
            title: 'Безболезненные процедуры',
            description: 'Мы заботимся о вашем комфорте и минимизируем болевые ощущения при любых манипуляциях.',
            image: '/temp/service1.png',
        },
        {
            id: 5,
            title: 'Чистота и безопасность',
            description: 'Мы строго соблюдаем санитарные нормы и гарантируем полную безопасность для наших пациентов.',
            image: '/temp/service1.png',
        },
        {
            id: 6,
            title: 'Доступные цены и гибкая система оплаты',
            description: 'Мы предлагаем конкурентоспособные цены на все виды стоматологических услуг.',
            image: '/temp/service1.png',
        },
        {
            id: 7,
            title: 'Положительные отзывы пациентов',
            description: 'Наша клиника гордится множеством довольных пациентов, которые доверяют нам свою улыбку.',
            image: '/temp/service1.png',
        },
    ];

    return (
        <section id="why-us-section" className="bg-white py-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Почему выбирают нас?</h2>
                </div>

                {/* Horizontal Scrollable Cards */}
                <div className="flex overflow-x-scroll mt-8 gap-6 scrollbar-hide">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="flex-shrink-0 bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-72 text-center"
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
                            <p className="text-sm text-gray-600 mt-2">{service.description}</p>
                        </div>
                    ))}
                </div>

                {/* Equal Sized Buttons */}
                <div className="flex flex-wrap gap-4 justify-center">
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