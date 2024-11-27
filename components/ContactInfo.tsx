import Image from "next/image";

export default function ContactInfo() {
    return (
        <section className="bg-gray-50 py-12">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
                {/* Working Hours */}
                <div className="flex items-start space-x-4">
                    <div>
                        <Image
                            src="/temp/clock-icon.svg"
                            alt="Working Hours Icon"
                            width={27}
                            height={27}
                        />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Часы работы</h3>
                        <p className="text-gray-600">Пн–Пт</p>
                        <p className="text-gray-600">(9:00 до 21:00)</p>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="flex items-start space-x-4">
                    <div>
                        <Image
                            src="/temp/phone-icon.svg"
                            alt="Phone Icon"
                            width={27}
                            height={27}
                        />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Наш номер</h3>
                        <p className="text-gray-600">+77771231234</p>
                        <p className="text-gray-600">richstom@gmail.com</p>
                    </div>
                </div>

                {/* Call and WhatsApp Buttons */}
                <div className="flex space-x-4">
                    <button className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition">
                        Позвонить
                    </button>
                    <button
                        className="border border-teal-500 text-teal-500 px-6 py-3 rounded-lg hover:bg-teal-50 transition">
                        Написать в WhatsApp
                    </button>
                </div>
            </div>
        </section>
    );
}