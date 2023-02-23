import { useState } from 'react';
import { List } from './components/List';
import { Search } from './components/Search';
import { useDebounce } from './hooks/useDebounce';

function App() {
  const [ searchValue, setSearchValue ] = useState( '' );

  const debouncedSearchValue = useDebounce( searchValue, 2000 );

  return (
    <div className="App">
      <Search searchValue={ searchValue } setSearchValue={ setSearchValue } />
      <List searchTerm={ debouncedSearchValue } />
    </div>
  )
}

export default App
