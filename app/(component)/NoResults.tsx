const NoResults = ({ value }: { value?: string }) => {
    if (!value) {
        <div className="font-bold text-2xl text-center mt-[1rem]">
            <p>No Results found.</p>
        </div>
    }

    return (
        <div className="font-bold text-2xl text-center mt-[1rem]">
            <p>No Results found for '<span>{value}</span>'.</p>
        </div>
    )
}

export default NoResults