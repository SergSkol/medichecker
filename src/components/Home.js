import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCategories } from './Data';
import Header from './Header';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories.categories) || [];

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
    }
  }, [dispatch, categories.length]);

  const handleClick = (e) => {
    navigate(`/details/${e.name}`, { state: e });
  };

  return (
    <div>
      <Header />
      <h4 className="categoriesSubHeader">STATS BY ROUTE</h4>
      <section className="categoriesList">
        {categories.map((category) => (
          <button
            className="categoryItem"
            key={category.id}
            type="button"
            onClick={() => handleClick(category)}
            onKeyDown={() => handleClick(category)}
          >
            <img alt="category" src={category.image} />
            <h3>{category.name}</h3>
            <h3>
              {category.count}
              {' '}
              drugs
            </h3>
          </button>
        ))}
      </section>
    </div>
  );
};

export default Home;
