import React from 'react';

const Card = ({ icon, title, value }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="me-3">
            <i className={icon} style={{ fontSize: '2rem', color: '#6c757d' }}></i>
          </div>
          <div>
            <h5 className="card-title mb-1">{title}</h5>
            <p className="card-text fs-4 fw-bold">{value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;