import Image from "next/image";

export default function DoctorsCarousel() {
    const doctors = [
        { id: 1, name: "Доктор 1", description: "Лучший доктор!", image: "/temp/doctor1.png" },
        { id: 2, name: "Доктор 2", description: "Лучший доктор!", image: "/temp/doctor1.png" },
        { id: 3, name: "Доктор 3", description: "Лучший доктор!", image: "/temp/doctor1.png" },
        { id: 4, name: "Доктор 4", description: "Лучший доктор!", image: "/temp/doctor1.png" },
        { id: 5, name: "Доктор 5", description: "Лучший доктор!", image: "/temp/doctor1.png" },
        { id: 6, name: "Доктор 6", description: "Лучший доктор!", image: "/temp/doctor1.png" },
    ];

    return (
        <section id="doctors-carousel-section" className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Наши доктора</h2>
                <p className="text-gray-600 text-center mt-2">Познакомьтесь с нашими лучшими специалистами</p>
                <div className="mt-8 overflow-x-scroll scrollbar-hide flex gap-6">
                    {doctors.map((doctor) => (
                        <div
                            key={doctor.id}
                            className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-lg shadow-lg border border-gray-200 text-center p-6"
                        >
                            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    width={96}
                                    height={96}
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
                            <p className="text-gray-600 mt-1">{doctor.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}