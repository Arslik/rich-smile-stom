import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

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
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Наши доктора</h2>
                <p className="text-gray-600 text-center mt-2">Наши доктора</p>
                <div className="mt-8">
                    <Carousel>
                        <CarouselContent className="flex gap-4 sm:gap-6 md:gap-8">
                            {doctors.map((doctor) => (
                                <CarouselItem
                                    key={doctor.id}
                                    className="flex-none w-full sm:w-1/2 md:w-1/3 bg-white rounded-lg shadow-lg border border-gray-200 text-center p-6"
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
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}