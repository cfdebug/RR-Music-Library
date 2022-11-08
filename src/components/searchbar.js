import React, {useState} from 'react'

const SearchBar = (props) => {
    let [searchTerm, setSearchTerm] = useState('')

    return(
    <div>
        <form>
            <input type='text' placeholder='Enter a search term here' />
            <input type='submit' />
        </form>
    </div>
    )
}

export default SearchBar