import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getDetails } from './Data';
import backIcon from './images/chevron-left-solid.svg';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const details = useSelector((state) => state.details[location.state]) || [];

  useEffect(() => {
    if (details.length === 0) {
      dispatch(getDetails(location.state));
    }
  }, [dispatch, details.length, location.state]);

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
        {' '}
        <img alt="category" src={location.state.image} />
        {location.state}

        <ul className="detailsList">
          {details.map((detail) => (
            <li className="detailItem" key={detail.name}>
              <p>
                Name:
                {detail.name}
              </p>
              <p>
                Ingridients:
                {detail.AI}
              </p>
              <p>
                Purpose:
                {detail.purpose}
              </p>
              <p>
                Indications:
                {detail.indications}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default Details;
