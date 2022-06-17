import React, { useState } from 'react'

const Pagination = ({ sizePage, totalCountPage, paginate, currentPage, setCurrentPage, state }) => {
    const pageNumbers = []
    const [pageNumberLimit, setPageNumberLimit] = useState(5)
    const [maxPage, setMaxPage] = useState(7)
    const [minPage, setMinPage] = useState(0)
    const total = Math.ceil(totalCountPage / sizePage)
    for(let i = 1; i <= total; i++){
        pageNumbers.push(i)
    }
    const renderPageNumbers = pageNumbers.map(number => {
        if(number < maxPage + 1 && number > minPage){
            return(
                <div className='item-pagination' key={number}>
                    <a className={currentPage == number ? 'number active' : 'number'} href='!#' onClick={() => paginate(number)}>
                        {number}
                    </a>
                </div>
            )
        }else {
            return null
        }
    })

    let pageIncrementBtn = null
    if(currentPage < total - pageNumberLimit + 1){
        pageIncrementBtn = <a className='number'>...</a>
    }
    let pageDecrementBtn = null
    if(currentPage > pageNumberLimit){
        pageDecrementBtn = <a className='number'>...</a>
    }

    if(currentPage + 2 > maxPage){
        setMaxPage(maxPage + pageNumberLimit)
        setMinPage(minPage + pageNumberLimit)
    }
    const handleNext = () => {
        setCurrentPage(prev => prev === total ? prev : prev + 1)
    }
    const handlePrev = () => {
        setCurrentPage(prev => prev === 1 ? prev : prev - 1)

        if((currentPage - 1) % pageNumberLimit == 0 ){
            setMaxPage(maxPage - pageNumberLimit)
            setMinPage(minPage - pageNumberLimit)
        }
    }
    return(
        <div>
            <ul className='pagination'> 
                <span className='foc-page'>page {currentPage} of {total} ({totalCountPage})</span>
                <button onClick={handlePrev} >←</button>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
                <button onClick={handleNext}>→</button>
            </ul>
        </div>
    )
}

export default Pagination