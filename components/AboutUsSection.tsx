import Image from "next/image";

export default function AboutUsSection() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-36 items-center">
                {/* Left Section: Image with Overlay */}
                <div className="relative">
                    <Image
                        src="/temp/team.svg"
                        alt="Our Team"
                        width={800}
                        height={361}
                        className="rounded-[35px] shadow-md"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-60 text-white flex justify-around items-center py-4 rounded-b-[35px]">
                        <div className="text-center">
                            <span className="block text-2xl font-bold">30+</span>
                            <span>Лучших докторов</span>
                        </div>
                        <div className="w-px h-12 bg-gray-300"></div>
                        <div className="text-center">
                            <span className="block text-2xl font-bold">15+</span>
                            <span>Лет практики</span>
                        </div>
                    </div>
                </div>

                {/* Right Section: About Us Text */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">О нас</h2>
                    <p className="text-teal-500 font-medium mt-2">Мы лучшая клиника!</p>
                    <ul className="mt-4 text-gray-600 space-y-2 list-disc pl-5">
                        <li>Мы лучшая клиника</li>
                        <li>Мы лучшая клиника</li>
                        <li>Мы лучшая клиника</li>
                        <li>Мы лучшая клиника</li>
                        <li>Мы лучшая клиника</li>
                    </ul>
                    <button className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition mt-6">
                        Позвонить
                    </button>
                </div>
            </div>
        </section>
    );
}