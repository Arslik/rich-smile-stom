import Image from 'next/image';

export default function DentalHealthSection() {
    return (
        <section className="bg-teal-500 py-16">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
                {/* Image Section */}
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <Image
                        src="/temp/dental-xray.png" // Replace with actual image path
                        alt="Dental X-ray"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="lg:w-1/2 text-white">
                    <h2 className="text-4xl font-bold leading-snug mb-4">
                        Доверьте нам здоровье <br />
                        ваших зубов
                    </h2>
                    <p className="text-lg leading-relaxed mb-6">
                        Вы можете заранее подготовить ваш визит, если живете в другом городе.
                        <br />
                        Мы подберем для вас индивидуальный план лечения, который займет максимально короткое время.
                    </p>
                    <p className="text-2xl font-semibold mb-4">+7 (775) 569-94-28</p>
                    <a
                        href="tel:+77755699428"
                        className="inline-block px-6 py-3 text-teal-500 bg-white rounded-lg font-semibold hover:bg-gray-100 transition"
                    >
                        Позвонить
                    </a>
                </div>
            </div>
        </section>
    );
}