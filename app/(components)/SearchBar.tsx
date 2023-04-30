"use client"

import { useState } from "react"
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"

interface IState {
    input: {
        q: string
    }
}

const SearchBar = ({ value, type, placeholder }: { value?: string, type: "normal" | "mobile", placeholder?: string }) => {
    const router = useRouter()
    const [input, setInput] = useState<IState['input']>({
        q: value || ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value.toString()
        })
    }

    const deleteInput = () => {
        setInput({ q: "" })
    }

    return (
        <form method="GET" onSubmit={(e) => { e.preventDefault(); router.push(`/search?q=${input.q}`) }}
            className={`flex gap-4 px-4 align-middle items-center rounded-md bg-white drop-shadow`}>
            <label className="flex w-min">
                <FontAwesomeIcon className="text-gray1" icon={faSearch} />
            </label>
            <input
                className={` ${type === "mobile" ? "py-1 text-md" : "py-3 text-md md:text-lg"}
                bg-inherit focus:outline-none w-full rounded-md
                `}
                type="text"
                name="q"
                placeholder={placeholder}
                onChange={handleChange}
                value={input.q}
                id="search"
                aria-label="Search bar input"
            />
            <button onClick={() => deleteInput()} type={'button'} aria-label="Delete button"
                className={`${input.q.length === 0 ? "opacity-0 cursor-default" : "opacity-100 cursor-pointer"} flex`}>
                <FontAwesomeIcon className={`text-lg`} icon={faXmark} />
            </button>
        </form>
    )
}

export default SearchBar
