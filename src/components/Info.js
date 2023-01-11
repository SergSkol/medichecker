import React from 'react';

import { useNavigate } from 'react-router-dom';
import backIcon from './images/chevron-left-solid.svg';

const Info = () => {
  const navigate = useNavigate();

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
      <div className="infoText">
        <p>We hope this app is usefull for you.</p>
        <p>You can support the project, and then find more useful features.</p>
        <p>Each $5 could make the project better.</p>
        <p>How to support:</p>
        <p>#Paypal: look for sps676@gmail.com</p>
        <p>#Card account: 4441 1144 4494 1361</p>

      </div>
    </div>
  );
};

export default Info;
