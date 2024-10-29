import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container } from "./styles";
import MacarronMobile from "../../assets/saboresinigualaveis.png"
import { Dish } from "../../components/Dish";
import { useState } from "react";

import Salada from '../../assets/salada.png'
import Shrimp from '../../assets/shrimp.png'


export function Home() {
  const [saladQuantity, setSaladQuantity] = useState(0)
  const [shrimpQuantity, setShrimpQuantity] = useState(0)

  return (
    <Container>
      <Header/>
      <main>
        <div className="macaron"> 
          <img src={MacarronMobile} alt="macaron" />

          <div className="macaronText">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>
      
        <h4>Refeições</h4>
        <div className="starterDishes">
          <Dish 
            imageSrc={Salada} 
            title="Salada Ravanello" 
            price={49.97} 
            description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"}
            quantity={saladQuantity}
            setQuantity={setSaladQuantity}
          />
          <Dish 
            imageSrc={Shrimp} 
            title="Camarão" 
            price="49,97"

          />
          <Dish 
            imageSrc={Salada} 
            title="Salada Ravanello" 
            price="49,97"
            
          />
        </div>

        <h4>Pratos Principais</h4>
        <Dish/>
        <h4>Bebidas </h4>
        <Dish/>

        <Footer/>
      </main>
    </Container>
  )
}