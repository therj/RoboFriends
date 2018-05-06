import React from 'react'

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="br4 pa3 ba bn-l outline-transparent b--green bg-lightest-blue w-50 tc f2 mb3 "
        type="search"
        name=""
        id=""
        placeholder="Search..."
        onChange={searchChange}
      />{' '}
    </div>
  )
}
export default SearchBox
