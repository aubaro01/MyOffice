import React from 'react';

const SummaryCard = ({ title, value, color }) => {
  return (
    <div className={`card bg-${color} text-white p-4`}>
      <h3>{title}</h3>
      <p className="fs-2">{value}</p>
    </div>
  );
};

export default SummaryCard;