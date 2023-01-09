import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import backIcon from './images/chevron-left-solid.svg';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="detailsPage">
      <header className="detailsHeader">
        <button
          type="button"
          className="detailsBackBtn"
          onClick={() => navigate(-1)}
        >
          <img alt="back" src={backIcon} />
          back to categories
        </button>
      </header>
      <div className="detailsInfo">
        Name =
        {' '}
        {location.state}
      </div>
    </div>
  );
};

export default Details;
