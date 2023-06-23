import Image from "next/image"

const SectionBox = ({ imagePath }: { imagePath: string }) => {

    return (
        <div className="flex items-center justify-center border-4 outline-[6px] w-[2rem] h-[2rem] bg-inherit border-lwgreen rounded-md">
            <Image className="w-[1.2rem] h-full"
                width={200} height={200} src={imagePath} alt="" />
        </div>
    )
}

export default SectionBox