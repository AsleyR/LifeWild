const LoadingResultCard = () => {
    return (
        <div className={`
        grid grid-cols-[auto_auto] gap-12 bg-white drop-shadow rounded-md 
        cursor-pointer hover:scale-105 active:scale-95 transition-all
        h-[176px] w-full
        `}>
            <div className="pl-6 py-6 animate-pulse">
                <div className="bg-gray1 h-[30px] w-[120px] rounded-sm"></div>
                <div className="bg-gray1 h-[20px] w-[80px] rounded-sm mt-1"></div>
                <div className="flex flex-col py-3">
                    <div className="bg-gray1 h-[30px] w-[160px] sm:w-[320px] md:w-[430px] rounded-t-sm rounded-br-sm"></div>
                    <div className="bg-gray1 h-[30px] w-[140px] sm:w-[280px] md:w-[400px] rounded-b-sm"></div>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="bg-gray1 h-[176px] w-[8rem] rounded-r-md"></div>
            </div>
        </div>
    )
}

export default LoadingResultCard