import Image from "next/image";

export default function Header(){
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className="flex items-center">
                    <Image src={"/logo.svg"} alt={"Rich smile stom"} width={70} height={70}/>
                </div>
                <nav className="hidden md:flex space-x-6">
                    {["Услуги", "Акции", "Почему мы?", "Специалисты", "Новости", "Контакты"].map((item) => (
                        <a
                            href={`#${item}`}
                            key={item}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}