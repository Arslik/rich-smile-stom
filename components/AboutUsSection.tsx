import Image from "next/image";

export default function AboutUsSection() {
    return (
        <section id="about-us-section" className="bg-gray-50 py-16">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 items-center px-4 sm:px-6 lg:px-8">
                {/* Left Section: Image with Rounded Corners and Shadow */}
                <div className="relative">
                    <Image
                        src="/temp/team.svg"
                        alt="Our Team"
                        width={800}
                        height={361}
                        className="rounded-3xl shadow-lg w-full h-auto"
                    />
                </div>

                {/* Right Section: About Us Text */}
                <div className="text-center lg:text-left">
                    <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">О клинике</h2>
                    <p className="text-lg font-medium text-gray-700 mt-4">
                        Круглосуточная стоматология Rich Smile Dental Clinic предоставляет полный спектр стоматологических
                        услуг по доступным ценам.
                        Преимуществом лечения в нашей клинике является оснащение современным оборудованием для лечения и
                        терапии зубной полости рта.
                    </p>
                    <ul className="mt-6 text-gray-600 space-y-3 text-lg lg:pl-0">
                        <li><span className="text-[#03989E] font-bold">•</span> Хирургия</li>
                        <li><span className="text-[#03989E] font-bold">•</span> Терапия</li>
                        <li><span className="text-[#03989E] font-bold">•</span> Ортопедия</li>
                        <li><span className="text-[#03989E] font-bold">•</span> Ортодонтия</li>
                        <li><span className="text-[#03989E] font-bold">•</span> Детская стоматология</li>
                        <li><span className="text-[#03989E] font-bold">•</span> Имплантология</li>
                        <li><span className="text-[#03989E] font-bold">•</span> Эстетическая стоматология</li>
                    </ul>
                    <p className="text-lg font-medium text-gray-700 mt-4">
                        Всё это Вы найдёте обращаясь к высококлассным профессионалам своего дела Rich Smile Dental Clinic!
                        Мы предлагаем передовые процедуры с использованием инновационных технологий для Вашей красивой улыбки!
                    </p>
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
            </div>
        </section>
    );
}