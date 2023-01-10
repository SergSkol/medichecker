import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Categories = ({ categories }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/details/${e.name}`, { state: e });
  };

  return (
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
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default Categories;
