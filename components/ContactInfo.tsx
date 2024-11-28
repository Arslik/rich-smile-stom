import Image from "next/image";

export default function ContactInfo() {
    return (
        <section className="bg-gray-50 py-12">
            <div className="container mx-auto flex flex-col space-y-6 lg:flex-row lg:space-y-0 items-center justify-between">
                {/* Working Hours */}
                <div className="flex flex-col sm:flex-row items-center sm:space-x-4 text-center sm:text-left">
                    <div>
                        <Image
                            src="/temp/clock-icon.svg"
                            alt="Working Hours Icon"
                            width={35}
                            height={35}
                        />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mt-4 sm:mt-0">Часы работы</h3>
                        <p className="text-gray-600">Пн–Пт</p>
                        <p className="text-gray-600">(9:00 до 21:00)</p>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row items-center sm:space-x-4 text-center sm:text-left">
                    <div>
                        <Image
                            src="/temp/phone-icon.svg"
                            alt="Phone Icon"
                            width={35}
                            height={35}
                        />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mt-4 sm:mt-0">Наш номер</h3>
                        <p className="text-gray-600">+77771231234</p>
                        <p className="text-gray-600">richstom@gmail.com</p>
                    </div>
                </div>

                {/* Call and WhatsApp Buttons */}
                <div className="space-x-4 ">
                    <button className="bg-[#03989E] text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition">
                        Позвонить
                    </button>
                    <button
                        className="border border-[#03989E] text-teal-500 px-6 py-3 rounded-lg hover:bg-teal-50 transition mt-4 sm:mt-0">
                        Написать в WhatsApp
                    </button>
                </div>
            </div>
        </section>
    );
}