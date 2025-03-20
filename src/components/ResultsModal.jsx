import React from 'react';

const ResultsModal = ({ data, columns, onClose }) => {
  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="modal__header">
          <h2 className="modal__title">Detalles del Cálculo</h2>
        </div>
        <div className="modal__content--scroll">
          <table className="results-table">
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th key={index}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, i) => (
                    <td key={i}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResultsModal;