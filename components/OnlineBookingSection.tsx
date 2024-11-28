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
                    <a
                        href="#"
                        className="inline-block px-6 py-3 text-white bg-[#03989E] rounded-lg font-semibold hover:bg-teal-500 transition border-2 border-white"
                    >
                        НАПИСАТЬ
                    </a>
                </div>

                {/* Right Section */}
                <div className="lg:w-1/2 flex flex-col items-center lg:items-end justify-center text-center lg:text-right">
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
                            +7 (777) 123-12-34
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}