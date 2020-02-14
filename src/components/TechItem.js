import React from 'react';

const TechItem = ({ tech, onDelete }) => (
  <li>{tech}
    <button type="button" onClick={onDelete}> Remover </button>
  </li>
)

export default TechItem;