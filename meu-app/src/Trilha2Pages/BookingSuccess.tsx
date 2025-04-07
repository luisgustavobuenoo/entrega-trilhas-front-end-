import React from 'react';
import { Link } from 'react-router-dom';

const BookingSuccess: React.FC = () => {
  return (
    <div>
      <h1>Reserva Confirmada!</h1>
      <p>Seu quarto foi reservado com sucesso.</p>
      <Link to="/">Voltar para a Home</Link>
    </div>
  );
};

export default BookingSuccess;
