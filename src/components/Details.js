import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getDetails } from './Data';
import DetailsList from './DetailsList';
import backIcon from './images/chevron-left-solid.svg';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const details = useSelector((state) => state.details[location.state.name]) || [];
  const [searchDetails, applySearchDetails] = useState('');

  useEffect(() => {
    if (details.length === 0) {
      dispatch(getDetails(location.state.name));
    }
  }, [dispatch, details.length, location.state.name]);

  const foundDetails = details.filter(
    (detail) => detail.name[0].toLowerCase().includes(searchDetails.toLowerCase()),
  );

  const handleSearch = (e) => {
    e.preventDefault();
    applySearchDetails(e.target.value);
  };

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

      <div className="detailsSearch">
        <h4 className="detailsSubHeader">DRUGS BREAKDOWN</h4>
        <input type="text" value={searchDetails} onChange={handleSearch} placeholder="search for drug" />
      </div>

      {searchDetails.length ? (
        <DetailsList details={foundDetails} />
      ) : (
        <DetailsList details={details} />
      )}

    </div>
  );
};

export default Details;
