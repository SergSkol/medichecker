import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from './Data';
import Header from './Header';
import Categories from './Categories';

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories) || [];
  const [searchCategory, applySearchCategory] = useState('');

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
    }
  }, [dispatch, categories.length]);

  const foundCategories = categories.filter(
    (category) => category.name.toLowerCase().includes(searchCategory.toLowerCase()),
  );

  const handleSearch = (e) => {
    e.preventDefault();
    applySearchCategory(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="categoriesSearch">
        <h4 className="categoriesSubHeader">STATS BY ROUTE</h4>
        <input type="text" value={searchCategory} onChange={handleSearch} placeholder="search for route" />
      </div>
      {searchCategory.length ? (
        <Categories categories={foundCategories} />
      ) : (
        <Categories categories={categories} />
      )}
    </div>
  );
};

export default Home;
