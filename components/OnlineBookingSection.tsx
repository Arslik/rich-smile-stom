export default function OnlineBookingSection() {
    return (
        <section className="bg-[#03989E] py-20">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center text-white">
                {/* Left Section */}
                <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
                        Записаться онлайн
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed mb-6">
                        Чтобы записаться к нам на бесплатный приём, напишите нам в WhatsApp
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
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

                {/* Right Section */}
                <div
                    className="lg:w-1/2 flex flex-col items-center lg:items-end justify-center text-center lg:text-right">
                    <div className="mb-6">
                        <p className="text-lg font-medium mb-2">
                            <span className="block text-[24px] md:text-[30px] font-bold">Адрес:</span>
                        </p>
                        <p className="text-base md:text-lg">г. Алматы</p>
                    </div>
                    <div className="mb-6">
                        <p className="text-lg font-medium mb-2">
                            <span className="block text-[24px] md:text-[30px] font-bold">Часы работы:</span>
                        </p>
                        <p className="text-base md:text-lg">Круглосуточно</p>
                    </div>
                    <div>
                        <p className="text-[28px] md:text-[35px] font-bold">
                            +7 (700) 267-48-66
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}