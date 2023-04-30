export default function HeroTitle({ title }: { title: string }) {
    return (
        <div className="">
            <h1 className='font-black text-4xl md:text-5xl'>{title}</h1>
        </div>
    )
}