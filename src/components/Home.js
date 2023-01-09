import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCategories } from './Data';
import categoriesTotalImg from './images/box.png';

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
    navigate(`/details/${e}`, { state: e });
  };

  return (
    <div>
      <div>New labeled products per week</div>
      <div className="categoriesTotal">
        <img alt="total" src={categoriesTotalImg} />
        NEW DRUGS
        <p>{getTotalCount(categories)}</p>
      </div>
      <ul className="categoriesList">
        {categories.map((category) => (
          <li className="categoryItem" key={category.id} onClick={() => handleClick(category.name)}>
            <img alt="category" src={category.image} />
            <p>{category.name}</p>
            <p>{category.count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
