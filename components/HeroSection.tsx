import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Section */}
                <div>
                    <span
                        className="border-2 border-[#03989E] px-4 py-3 rounded-full text-lg font-medium text-[#03989E] uppercase">Улыбайтесь!</span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mt-8">
                        Лечите зубы без <span className="text-[#03989E]">боли</span>, качественно и по <span className="text-[#03989E]">выгодным ценам! </span>
                    </h1>
                    <div className="mt-4 text-base sm:text-lg">
                        <p className="font-semibold text-lg sm:text-xl">
                            3-этапная профессиональная чистка за <span className="text-[#03989E]">4990</span>
                        </p>
                        <p className="text-lg font-semibold text-gray-600">
                            Рассрочка <span className="font-bold text-[#03989E]">0-0-12</span>
                        </p>
                        <p className="font-semibold text-lg sm:text-xl mt-3">
                            Лечение зубов от <span className="text-[#03989E]">7990</span> по АКЦИИ
                            <span className="text-[#03989E] font-bold"> 2+1 </span>
                            (лечите 2 зуба - 3-й в подарок!)
                        </p>
                        <p className="font-semibold text-lg sm:text-xl mt-3">
                            Брекеты по <span className="text-[#03989E]">34990</span>
                        </p>
                        <p className="font-semibold text-lg sm:text-xl mt-3">
                            Зубные коронки по <span className="text-[#03989E]">24990</span>
                        </p>
                        <p className="text-gray-500 text-sm sm:text-base mt-3">
                            Круглосуточно <span className="text-[#03989E] font-semibold">24/7</span>
                        </p>
                        <p className="text-gray-500 text-sm sm:text-base mt-3">
                            <span className="font-semibold text-[#03989E]">Бесплатная консультация</span>
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-6">
                        <a
                            href="tel:+77002674866"
                        >
                            <button
                                className="bg-[#03989E] text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition">
                                Позвонить
                            </button>
                        </a>
                        <a href="https://wa.me/+77002674866" target="_blank" rel="noopener noreferrer">
                            <button
                                className="border border-[#03989E] text-teal-500 px-6 py-3 rounded-lg hover:bg-teal-50 transition mt-4 sm:mt-0">
                                Написать в WhatsApp
                            </button>
                        </a>
                    </div>
                    <div className="flex space-x-8 mt-8 text-gray-700">
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