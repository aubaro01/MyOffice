import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap
//import 'unicons/css/line.css'; // Ícones

const Card = ({ icon, title, value }) => {
    return (
        <div className="card text-center p-3 m-2 shadow-sm">
            <i className={icon}></i>
            <h3 className="h5 mt-2">{title}</h3>
            <p className="lead">{value}</p>
        </div>
    );
};

export default Card;