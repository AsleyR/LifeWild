import React from 'react'
import SearchBar from '../(component)/SearchBar'
import LoadingResultCards from '../(component)/loading/LoadingResultCards'


const loading = () => {
    return (
        <div className="relative w-full h-full pt-[4rem] bg-gradient">
            <div className="mx-auto px-[2.5rem] md:px-0 md:max-w-2xl transition-all">
                <SearchBar type={'normal'} />
                <LoadingResultCards ammount={2} />
            </div>
        </div>
    )
}

export default loading