import React, {useContext} from 'react'
import { SearchContext } from '../context/searchContext'

const SearchBar = () => {

    const {term, handleSearch} = useContext(SearchContext)

    return(
    <div>
        <form>
            
            <input ref={term} type='text' placeholder='Enter a search term here' />
            
            <input type='submit' onClick={(e) => handleSearch(e, term.current.value)}/>
        </form>
    </div>
    )
}

export default SearchBar
