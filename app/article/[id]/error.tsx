"use client";

interface ErrorProp {
    error: Error;
    reset: () => void;
}

const error = ({ error, reset }: ErrorProp) => {
    return (
        <div className="">
            <h1 className="font-bold text-2xl">Something went wrong!</h1>
            <button className="text-2xl" onClick={() => reset()}>Reset page.</button>
        </div>
    )
}

export default error
