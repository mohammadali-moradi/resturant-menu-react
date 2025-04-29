import React, { useState } from 'react';
import menus from './data';
import Categories from './Components/Categories';
import Menu from './Components/Menu';

const allCategories = ['all', ...new Set(menus.map(menu => menu.category))]


function App() {

  // console.log(filteredCategory)

  const [allMenus, setAllMenus] = useState(menus)
  const [categories, setCategories] = useState(allCategories)

  const filteredMenus = (category) => {
    if ( category === 'all') {
      setAllMenus(menus)
      return
    }
    let fiterMenus = menus.filter(menu => menu.category === category)
    setAllMenus(fiterMenus)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filteredMenus={filteredMenus} />
        <Menu allMenus={allMenus}></Menu>
      </section>
    </main>
  );
}

export default App;
