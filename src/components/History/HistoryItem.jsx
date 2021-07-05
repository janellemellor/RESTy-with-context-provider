import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ url, method }) => (
  <section>
    <p>{method}</p>
    <p>{url}</p>
  </section>
); 

HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};

export default HistoryItem;
