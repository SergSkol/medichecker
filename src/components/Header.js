import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import categoriesTotalImg from './images/box.svg';
import info from './images/info.svg';

const Header = () => {
  const getTotalCount = (categories) => categories.reduce((partSum, a) => partSum + a.count, 0);

  const categories = useSelector((state) => state.categories.categories) || [];

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/info/');
  };

  return (
    <div>
      <div className="categoriesHeaderContainer">
        <h2 className="categoriesHeader">new labeled drugs per week</h2>
        <button type="button" onClick={() => handleClick()}><img src={info} alt="info" /></button>
      </div>

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
