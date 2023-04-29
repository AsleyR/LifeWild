export default function Footer() {
    return (
        <footer className="absolute bottom-0 inset-x-0 flex flex-col md:flex-row justify-center items-center gap-0 md:gap-1 text-base text-gray-500 text-center bg-[#f2f2f2] py-4 px-2 md:py-2 text-tgray">
            <p>Made by <a className="underline hover:text-blue-400 transition-all" href="https://github.com/AsleyR/LifeWild" target={'_blank'}>Asley R.</a> 2023.</p>
            <p>Licensed under <a className="underline hover:text-blue-400 transition-all" href="https://github.com/AsleyR/LifeWild/blob/main/LICENSE" target={'_blank'}>GPL-3.0</a>.</p>
        </footer>
    )
}