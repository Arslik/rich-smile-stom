import Image from 'next/image';

export default function DentalHealthSection() {
    return (
        <section className="bg-[#03989E] py-16">
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
                        Доверьте нам здоровье <br/>
                        ваших зубов
                    </h2>
                    <p className="text-lg leading-relaxed mb-6">
                        Вы можете заранее подготовить ваш визит, если живете в другом городе.
                        <br/>
                        Мы подберем для вас индивидуальный план лечения, который займет максимально короткое время.
                    </p>
                    <p className="text-2xl font-semibold mb-4">+7 (700) 267-48-66</p>
                    <div className="flex flex-wrap gap-4 justify-start">
                        <a href="tel:+77002674866">
                            <button
                                className="mt-4 text-[#03989E] bg-white px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-lg hover:bg-teal-600 transition text-sm sm:text-base lg:text-lg w-full sm:w-auto">
                                Позвонить
                            </button>
                        </a>
                        <a
                            href="https://wa.me/+77002674866"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                className="border border-[#03989E] bg-white mt-4 text-[#03989E] px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-lg hover:bg-teal-50 transition text-sm sm:text-base lg:text-lg w-full sm:w-auto">
                                Написать в WhatsApp
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}