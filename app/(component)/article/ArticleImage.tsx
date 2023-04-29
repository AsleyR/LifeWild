import { LifeWildType } from "@/app/libs/types/LifeWild.types"
import Image from "next/image"

const ArticleImage = ({ imagePath }: { imagePath: LifeWildType['referencePhoto'] }) => {
    return (
        <div className="bg-[#ebebeb] border-2 border-gray-100 flex order-first md:order-none md:col-span-1 justify-self-end h-[300px] w-full md:w-[300px] drop-shadow rounded-md">
            <Image className="max-w-full w-full h-full object-contain"
                width={500} height={500} src={imagePath} alt="" />
        </div>
    )
}

export default ArticleImage