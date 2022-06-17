import React, { useState } from 'react'
import { fetchSearch } from '../http/orderAPI'


const Filt = ({setSort, page}) => {
    const [code, setCode] = useState()

    const search = () => {
        fetchSearch(page, code)
            .then(data => {
                setSort(data)
            })
    }
    return(
        <div className='filt'>
            <button onClick={() => setSort('asc')}>По возрастанию</button>
            <button onClick={() => setSort('desc')}>По убывания</button>
            <div className='search'>
                <input onChange={e => setCode(e.target.value)}/>
                <button onClick={() => search}>Поиск</button>
            </div>
        </div>
    )
}

export default Filt