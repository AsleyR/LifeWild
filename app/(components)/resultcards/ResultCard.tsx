import { ResultCardType } from "@/app/libs/types/ResultCard.type";
import Link from "next/link";
import ResultImage from "./ResultImage";

export default function ResultCard({ data }: { data: ResultCardType }) {

    return (
        <Link key={`${data.title}-link`} href={`/article/${data.cardId}`}
            className={`
        grid grid-cols-[auto_auto] gap-2 md:gap-12 bg-white drop-shadow rounded-md 
        cursor-pointer hover:scale-105 active:scale-95 transition-all
        oveflow-hidden h-[176px] min-w-0 items-center
        `}>
            <div className="pl-6 py-6">
                <h1 className="font-bold text-lg md:text-2xl">{data.title}</h1>
                <h2 className="italic text-base md:text-sm">{data.scientificName}</h2>
            </div>
            <div className="flex h-[176px] justify-end w-full">
                <ResultImage image={data.imagePath} />
            </div>
        </Link>
    )
}
