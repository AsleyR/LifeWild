"use client";

import { usePathname, useParams } from "next/navigation";
import SearchBar from "../SearchBar";
import Link from "next/link";

export default function NavOptions() {
    const params = useParams()
    const pathname = usePathname()

    return (
        <div className={`justify-self-end`}>
            {pathname === `/article/${params.id}` ? <SearchBar type={"mobile"} placeholder="Search" /> :
                <Link className="hover:text-gray1" href={'/search'}>
                    <p className="tracking-[0.05rem]">Explore</p>
                </Link>
            }
        </div>
    )
}
