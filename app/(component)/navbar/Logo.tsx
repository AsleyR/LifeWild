import Image from "next/image"
import Link from "next/link"

const Logo = () => {
    return (
        <Link className="flex cursor-pointer" href={'/'}>
            <Image
                className="block"
                src={'/images/w-logo.png'}
                alt="LifeWild Logo"
                width={130}
                height={130}
            />
        </Link>
    )
}

export default Logo
