import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Section */}
                <div>
                    <span className="border-2 border-[#03989E] px-4 py-3 rounded-full text-lg font-medium text-[#03989E] uppercase">Улыбайтесь!</span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mt-8">
                        Ваша улыбка — наш <span className="text-[#03989E]">приоритет!</span>
                    </h1>
                    <p className="text-gray-600 mt-4 text-base sm:text-lg">
                        Наша стоматология вернула улыбку уже более 100000 пациентам.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-6">
                        <button
                            className="bg-[#03989E] text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition text-sm sm:text-base"
                        >
                            Позвонить
                        </button>
                        <button
                            className="border border-[#03989E] text-teal-500 px-6 py-3 rounded-lg hover:bg-teal-50 transition text-sm sm:text-base"
                        >
                            Написать в WhatsApp
                        </button>
                    </div>
                    <div className="flex space-x-8 mt-8 text-gray-700">
                        <div>
                            <span className="block text-xl sm:text-2xl font-bold">15+</span>
                            <span className="text-sm sm:text-base">Лет на рынке</span>
                        </div>
                        <div>
                            <span className="block text-xl sm:text-2xl font-bold">24/7</span>
                            <span className="text-sm sm:text-base">На связи</span>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="mr-8 flex justify-center md:justify-start">
                    <Image
                        src="/temp/happyPat.png"
                        alt="Happy patient"
                        width={600}
                        height={500}
                        className="w-full max-w-sm sm:max-w-md md:max-w-full"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}