import React from 'react'
import SearchBar from '../(components)/SearchBar'
import LoadingResultCards from '../(components)/loading/LoadingResultCards'


const loading = () => {
    return (
        <div className="w-full min-w-0 h-full pt-[8rem] bg-gradient">
            <div className="mx-auto px-[2.5rem] md:px-0 md:max-w-2xl transition-all min-w-0">
                <SearchBar type={'normal'} />
                <LoadingResultCards ammount={2} />
            </div>
        </div>
    )
}

export default loading