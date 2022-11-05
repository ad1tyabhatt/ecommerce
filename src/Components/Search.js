import React from 'react'

function Search() {
  return (
    <div className='search'>
    <form>
      <label htmlFor="search">
        <input type="text" name="search" id="searchbar" placeholder='search' />
      </label>
    </form>
    </div>
  )
}

export default Search