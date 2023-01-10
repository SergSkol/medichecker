import React from 'react';
import { useSelector } from 'react-redux';
import categoriesTotalImg from './images/box.svg';

const Header = () => {
  const getTotalCount = (categories) => categories.reduce((partSum, a) => partSum + a.count, 0);

  const categories = useSelector((state) => state.categories.categories) || [];

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
    </div>
  );
};

export default Header;
