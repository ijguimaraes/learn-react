import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from "react";
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItens = [...items, myNewItem];
    setAndSaveItems(listItens);
  }

  const handleSubmit = (e) => {
    //this method block the refresh page
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');

  }

  const handleChecked = (id) => {
      const listItens = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
      setAndSaveItems(listItens);
  };

  const handleDelete = (id) => {
      const listItens = items.filter((item) => item.id !== id);
      setAndSaveItems(listItens);
  };

  return (
    <div className="App">
      <Header/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      <Footer 
        itensCount={items.length}
      />
    </div>
  );
}

export default App;
