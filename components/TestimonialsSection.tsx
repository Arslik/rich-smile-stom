export default function TestimonialsSection() {
    const testimonials = [
        { id: 1, name: "Павел Быстров", date: "16 ноября 2024", message: 'В клинике комфортно, уютно, вежливые администраторы, быстрое обслуживание. Выражаю благодарность доктору, Анвару Рустамовичу. Тактичен, грамотен, профессионален.' },
        { id: 2, name: "Захар", date: "24 ноября 2024", message: 'Анвар Рустамович, вы просто мой спаситель! Я думал, что умру от боли. Брат привез меня сюда с острой болью, так зуб у меня еще не болел. Мне сразу обезболили и нашли причину. Поставили виниры.' },
        { id: 3, name: "Ельдар Айтбаев", date: "27 ноября 2024", message: 'Клиника хорошая. Расположенно удобна. Приходил удалить зуб мудрости, удалили безболезненно. Инструменты стирильные,открывают при пациенте. Большое спасибо доктору Анвару Рустамовичу!' },
        { id: 4, name: "Акболат Рымбаев", date: "30 ноября 2024", message: 'Замечательная клиника, оборудование современное, специалисты отличные. По острой боли обращался сюда, Анвар Рустамович полечил зуб, теперь все замечательно.' },
        { id: 5, name: "Айгуль Меденова", date: "30 ноября 2024", message: 'Хочу выразить огромную благодарность доктору Мусаханову Эльмуруду Алишеровичу и всему персоналу клиники! Как человек, который очень боится боли, я с большим волнением пришла на прием, но была приятно удивлена высоким уровнем профессионализма и внимательности, с которыми здесь относятся к пациентам.' },
    ];

    return (
        <section id="testimonials-section" className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Отзывы</h2>
                <p className="text-gray-600 text-center mt-2">Что говорят наши пациенты</p>
                <div className="mt-8 overflow-x-scroll scrollbar-hide flex gap-6">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="flex-shrink-0 w-72 sm:w-80 md:w-96 bg-white shadow-md rounded-lg border border-gray-200 p-6"
                        >
                            <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                            <p className="text-sm text-gray-500">{testimonial.date}</p>
                            <p className="mt-3 text-gray-700">{testimonial.message}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}