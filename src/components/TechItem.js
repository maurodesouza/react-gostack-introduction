import React from 'react';
import PropTypes from 'prop-types';

const TechItem = ({ tech, onDelete }) => (
  <li>{tech}
    <button type="button" onClick={onDelete}> Remover </button>
  </li>
)

TechItem.defaultProps = {
  tech: 'Oculto'
}

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default TechItem;