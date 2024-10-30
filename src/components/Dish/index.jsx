import { useState } from 'react';
import { Container } from './styles';
import { ButtonMain } from '../ButtonMain';
import { CiHeart } from 'react-icons/ci';
import { ButtonAdd } from '../ButtonAdd';

export function Dish({ imageSrc, title, price, description }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [quantity, setQuantity] = useState(1); // Inicializando quantity como 1

  const handleFavoriteClick = () => {
    setIsFavorited((prevState) => !prevState);
  };

  return (
    <Container $isFavorited={isFavorited}>
      <div className="card">
        <CiHeart
          className='ci-heart'
          onClick={handleFavoriteClick}
        />
        <img src={imageSrc} alt={title} />
        <h3>{title}</h3>
        <p className="price">R${(price * quantity).toFixed(2)}</p> 
        <p className="description">{description}</p>
        <div className='buttons'>
          <ButtonAdd quantity={quantity} setQuantity={setQuantity} />
          <ButtonMain title="incluir" />
        </div>
      </div>
    </Container>
  );
}
