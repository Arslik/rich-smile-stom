import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export default function TestimonialsSection() {
    const testimonials = [
        { id: 1, name: "Angela Qebek", date: "4 сентября 2024", message: 'Хочу выразить огромную благодарность доктору Мусаханову Эльмуруду Алишеровичу и всему персоналу клиники! Как человек, который очень боится боли, я с большим волнением пришла на прием, но была приятно удивлена высоким уровнем профессионализма и внимательности, с которыми здесь относятся к пациентам.' },
        { id: 2, name: "Angela Qebek", date: "4 сентября 2024", message: 'Хочу выразить огромную благодарность доктору Мусаханову Эльмуруду Алишеровичу и всему персоналу клиники! Как человек, который очень боится боли, я с большим волнением пришла на прием, но была приятно удивлена высоким уровнем профессионализма и внимательности, с которыми здесь относятся к пациентам.' },
        { id: 3, name: "Angela Qebek", date: "4 сентября 2024", message: 'Хочу выразить огромную благодарность доктору Мусаханову Эльмуруду Алишеровичу и всему персоналу клиники! Как человек, который очень боится боли, я с большим волнением пришла на прием, но была приятно удивлена высоким уровнем профессионализма и внимательности, с которыми здесь относятся к пациентам.' },
        { id: 4, name: "Angela Qebek", date: "4 сентября 2024", message: 'Хочу выразить огромную благодарность доктору Мусаханову Эльмуруду Алишеровичу и всему персоналу клиники! Как человек, который очень боится боли, я с большим волнением пришла на прием, но была приятно удивлена высоким уровнем профессионализма и внимательности, с которыми здесь относятся к пациентам.' },
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Отзывы</h2>
                <p className="text-gray-600 text-center mt-2">Что говорят наши пациенты</p>
                <div className="mt-8">
                    <Carousel>
                        <CarouselContent className="flex gap-4 sm:gap-6 md:gap-8">
                            {testimonials.map((testimonial) => (
                                <CarouselItem
                                    key={testimonial.id}
                                    className="flex-none w-full sm:w-1/2 md:w-1/3 bg-white shadow-md rounded-lg border border-gray-200 p-6"
                                >
                                    <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                                    <p className="mt-3 text-gray-700">{testimonial.message}</p>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}