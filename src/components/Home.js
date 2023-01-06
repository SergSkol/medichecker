import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from './Data';

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories) || [];

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
    }
  }, [dispatch, categories.length]);

  return (
    <div>
      <div>Header</div>
      <ul className="categoriesList">
        {categories.map((category) => (
          <li className="categoryItem" key={category.name}>
            {category.name}
            {category.count}
            <img alt="category" src={category.image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
