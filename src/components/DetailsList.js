import React from 'react';
import PropTypes from 'prop-types';

const DetailsList = ({ details }) => (
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
);

DetailsList.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default DetailsList;
