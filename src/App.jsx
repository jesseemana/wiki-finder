import { useState } from 'react';
import { List } from './components/List';
import { Search } from './components/Search';

function App() {
  const [ searchValue, setSearchValue ] = useState( '' );

  return (
    <div className="App">
      <Search searchValue={ searchValue } setSearchValue={ setSearchValue } />
      <List searchTerm={ searchValue } />
    </div>
  )
}

export default App
