import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCategories } from './Data';
import categoriesTotalImg from './images/box.svg';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories.categories) || [];

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
    }
  }, [dispatch, categories.length]);

  const getTotalCount = (categories) => {
    const sum = categories.reduce((partialSum, a) => partialSum + a.count, 0);
    return sum;
  };

  const handleClick = (e) => {
    navigate(`/details/${e.name}`, { state: e });
  };

  return (
    <div>
      <h2 className="categoriesHeader">new labeled drugs per week</h2>
      <div className="categoriesTotalContainer">
        <img alt="total" src={categoriesTotalImg} />
        <h3 className="categoriesTotalCount">
          TOTAL NEW DRUGS
          <p>
            {getTotalCount(categories)}
            {' '}
            drugs
          </p>
        </h3>
      </div>
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
