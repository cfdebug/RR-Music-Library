import './App.css';
import React, {Fragment, useEffect, useState, useRef} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/gallery';
import SearchBar from './components/searchbar';
import AlbumView from './components/albumView';
import ArtistView from './components/artistView';
import { DataContext } from './context/dataContext'
import { SearchContext } from './context/searchContext'


function App() {
  let [data,setData] = useState([])
  let [message,setMessage] = useState('Search for Music!')
  let searchInput = useRef('')

  const API_URL = 'https://itunes.apple.com/search?term='


  const handleSearch = (e, term) => {
    e.preventDefault()
    const fetchData = async () => {
      document.title = `${term} Music`
      const response = await fetch(API_URL + term)
      const resData = await response.json()
      if (resData.results.length > 0){
        setData(resData.results)
      } else {
        setMessage('Not Found')
      }
    }
    fetchData()
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
                      <Gallery/>
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
