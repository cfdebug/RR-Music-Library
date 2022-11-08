import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import Gallery from './components/gallery';
import SearchBar from './components/searchbar';

function App() {
  let [data,setData] = useState([])
  let [message,setMessage] = useState('Search for Music!')
  let [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      document.title = `${search} Music`
      const response = await fetch('https://itunes.apple.com/search?term=Theory%20of%20a%20Deadman')
      const resData = await response.json()
      if (resData.results.length > 0){
        setData(resData.results)
      } else {
        setMessage('Not Found')
      }
      console.log(resData)
    }
    fetchData()
  }, [search])

  return (
    <div className="App">
      <SearchBar />
      {message}
      <Gallery />
    </div>
  );
}

export default App;
