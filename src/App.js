import './App.css';
import React, {useEffect, useState, Suspense} from 'react'
import Gallery from './components/gallery';
import SearchBar from './components/searchbar';
import { createResource as fetchData} from './helper'
import Spinner from './spinner';

function App() {
  let [data,setData] = useState(null)
  let [message,setMessage] = useState('Search for Music!')
  let [search, setSearch] = useState('')

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
    if(search){
      setData(fetchData(search))
  }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
}

const renderGallery = () => {
  if(data){
    return(
      <Suspense fallback={<Spinner />}>
        <Gallery data={data} />
      </Suspense>
    )
  }
}

  return (
    <div className="App">
      <SearchBar handleSearch = {handleSearch} />
      {message}
      {renderGallery()}
    </div>
  );
}

export default App;
