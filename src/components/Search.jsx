export const Search = ( { searchValue, setSearchValue } ) => {
  return (
    <input
        className="search-input"
        value={ searchValue }
        onChange={(e) => setSearchValue(e.target.value) }
        type="text"
        placeholder="search"
        autoFocus
    />
  )
}
