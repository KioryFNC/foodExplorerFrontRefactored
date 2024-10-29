import React from 'react';
import { Container } from './styles';
import { FiMinus, FiPlus } from 'react-icons/fi';

export function ButtonAdd({ quantity, setQuantity, ...rest }) {
  const decrement = () => {
    if (quantity > 1) { // Impede que a quantidade fique abaixo de 1
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Container type="button" {...rest}>
      <button onClick={decrement}><FiMinus /></button>
      <span style={{ margin: '0 10px' }}>{quantity}</span>
      <button onClick={increment}><FiPlus /></button>
    </Container>
  );
}
