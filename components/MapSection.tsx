export default function MapSection() {
    return (
        <section className="bg-[#03989E]">
            {/* Map Section */}
            <div className="w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.207240428109!2d76.94483191121796!3d43.2470782710039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836fed2a665ab1%3A0x72f25e58e2a6b486!2sRich%20smile!5e0!3m2!1sru!2skz!4v1733244564253!5m2!1sru!2skz"
                    width="100%"
                    height="400"
                    loading="lazy"
                    className="rounded-lg"
                ></iframe>
            </div>
        </section>
    );
}