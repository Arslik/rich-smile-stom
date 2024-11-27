import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Section */}
                <div>
                    <span className="text-sm font-medium text-teal-500 uppercase">Улыбайтесь!</span>
                    <h1 className="text-4xl font-bold text-gray-800 mt-4">
                        Ваша улыбка — наш <span className="text-teal-500">приоритет!</span>
                    </h1>
                    <p className="text-gray-600 mt-4">
                        Наша стоматология вернула улыбку уже более 100000 пациентам.
                    </p>
                    <div className="flex space-x-4 mt-6">
                        <button className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition">
                            Позвонить
                        </button>
                        <button
                            className="border border-teal-500 text-teal-500 px-6 py-3 rounded-lg hover:bg-teal-50 transition">
                            Написать в WhatsApp
                        </button>
                    </div>
                    <div className="flex space-x-8 mt-8 text-gray-700">
                        <div>
                            <span className="block text-2xl font-bold">15+</span>
                            <span>Лет на рынке</span>
                        </div>
                        <div>
                            <span className="block text-2xl font-bold">24/7</span>
                            <span>На связи</span>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="relative flex flex-col md:flex-row items-center md:items-start">
                    {/* Main Image */}
                    <Image
                        src="/temp/happyPatient.svg"
                        alt="Happy patient"
                        width={450}
                        height={513}
                        className="rounded-[35px] shadow-md"
                    />

                    {/* Supporting Images */}
                    <div className="flex flex-col space-y-4 md:ml-4 md:space-y-4 mt-4 md:mt-0">
                        {["checkup.svg", "braces.svg", "cleaning.svg"].map((img) => (
                            <div
                                key={img}
                                className="w-[103px] h-[112px]"
                            >
                                <Image
                                    src={`/temp/${img}`}
                                    alt={img}
                                    width={103}
                                    height={112}
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}