import './App.css';
import React, {Fragment, useState, useRef, Suspense} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/gallery';
import SearchBar from './components/searchbar';
import AlbumView from './components/albumView';
import ArtistView from './components/artistView';
import { DataContext } from './context/dataContext'
import { SearchContext } from './context/searchContext'
import { createResource as fetchData} from './helper'
import Spinner from './spinner';

function App() {
  let [data,setData] = useState(null)
  let [message,setMessage] = useState('Search for Music!')
  let searchInput = useRef('')

  const API_URL = 'https://itunes.apple.com/search?term='

  const handleSearch = (e, term) => {
    e.preventDefault()
    setData(fetchData(term, 'album'))
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
        {message}
          <Router>
            <Routes>
              <Route path='/' element={
                <Fragment>
                    <SearchContext.Provider value={{
                      term: searchInput,
                      handleSearch: handleSearch
                    }}>
                      <SearchBar/>
                    </SearchContext.Provider>
                    <DataContext.Provider value={data}>
                      {renderGallery()}
                    </DataContext.Provider>
                </Fragment>
              } />
              <Route path='/album/:id' element={<AlbumView />} />
              <Route path ='/artist/:id' element={<ArtistView />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
