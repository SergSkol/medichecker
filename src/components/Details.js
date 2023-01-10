import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getDetails } from './Data';
import backIcon from './images/chevron-left-solid.svg';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const details = useSelector((state) => state.details[location.state.name]) || [];

  useEffect(() => {
    if (details.length === 0) {
      dispatch(getDetails(location.state.name));
    }
  }, [dispatch, details.length, location.state.name]);

  return (
    <div className="detailsPage">
      <div className="detailsHeader">
        <button
          type="button"
          className="detailsBackBtn"
          onClick={() => navigate(-1)}
        >
          <img alt="back" src={backIcon} />
          <h2>back to categories</h2>
        </button>
      </div>
      <div className="detailsTotalContainer">
        {' '}
        <img alt="category" src={location.state.image} />
        <h3 className="detailsTotalCount">
          {location.state.name}
          <p>
            {details.length}
            {' '}
            drugs
          </p>
        </h3>
      </div>
      <h4 className="detailsSubHeader">DRUGS BREAKDOWN</h4>
      <ul className="detailsList">
        {details.map((detail) => (
          <li className="detailItem" key={detail.id}>
            <p className="detailItemInfo">
              Name:
              <br />
              {detail.name}
            </p>
            <p className="detailItemInfo">
              Ingridients:
              <br />
              {detail.AI}
            </p>
            <p className="detailItemInfo">
              Purpose:
              <br />
              {detail.purpose}
            </p>
            <p className="detailItemInfo">
              Indications:
              <br />
              {detail.indications}
            </p>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Details;
