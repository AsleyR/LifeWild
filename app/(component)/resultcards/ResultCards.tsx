"use client";

import { ResultCardType } from "@/app/libs/types/ResultCard.type";
import ResultCard from "./ResultCard";

export default function ResultCards({ props }: { props: ResultCardType[] }) {

    return (
        <section className="flex flex-col gap-3 mt-3">
            {
                props.map((card) => {
                    return (
                        <ResultCard key={`${card.title}-card`} data={card} />
                    )
                })
            }
        </section>
    )
}
