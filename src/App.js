import { useEffect, useState } from 'react';
import './App.css';
import Filt from './components/Filt';
import List from './components/List';
import Pagination from './components/Pagination';
import { fetch } from './http/orderAPI';

function App() {
  const [state, setState] = useState([])
  const [sort, setSort] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [sizePage, setSizePage] = useState(20)
  const [count, setCount] = useState(200)

  useEffect(() => {
    fetch(currentPage)
        .then(data => {
            setState(data.dataObjects)
            setSizePage(data.size)
            setCurrentPage(data.page)
            setCount(data.count)
        })
  }, [currentPage, sort])

  const paginate = pageNumber => setCurrentPage(pageNumber)
  
  return (
    <div className="App">
      <Filt setSort={setSort} page={currentPage} setState={setState}/>
      <List state={state}/>
      <Pagination 
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            sizePage={sizePage} 
            totalCountPage={count}
            paginate={paginate}
            state={state}
            />
    </div>
  );
}

export default App;
