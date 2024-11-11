import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container } from "./styles";
import MacarronMobile from "../../assets/saboresinigualaveis.png"
import { Dish } from "../../components/Dish";
import { useState } from "react";

import Salada from '../../assets/salada.png'
import Shrimp from '../../assets/shrimp.png'
import Parma from '../../assets/parma.png'
import molla from '../../assets/molla.png'
import pinkMacarron from '../../assets/pinkMacaron.png'
import peachyPastrie from '../../assets/peachyPastrie.png'
import prugnaPie from '../../assets/prugnaPie.png'
import tea from '../../assets/tea.png'
import passionFruitJuice from '../../assets/passionFruitJuice.png'
import coffee from '../../assets/coffee.png'

export function Home() {
  const [dishQuantity, setDishQuantity] = useState(0)

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
            quantity={dishQuantity}
            setQuantity={setDishQuantity}
          />
          <Dish 
            imageSrc={Shrimp} 
            title="Camarão" 
            price={79.97}
            description={"Massa fresca com camarões e pesto"}
            quantity={dishQuantity}
            setQuantity={setDishQuantity}
          />
          <Dish 
            imageSrc={Parma} 
            title="Torradas de Parma" 
            price={25.97}
            description={"Presunto de parma e rúcula em um pao com fermentação natural"}
            quantity={dishQuantity}
            setQuantity={setDishQuantity}
          />
          <Dish 
            imageSrc={molla} 
            title="Salada Molla" 
            price={44.97} 
            description={"Tomates cereja, folhas verdes, pepino e molho rose"}
            quantity={dishQuantity}
            setQuantity={setDishQuantity}
          />
          <Dish 
            imageSrc={Shrimp} 
            title="Camarão" 
            price={79.97}
            description={"Massa fresca com camarões e pesto"}
            quantity={dishQuantity}
            setQuantity={setDishQuantity}
          />
        </div>

        <h4>Sobremesas</h4>
          <div className="dessert">
            <Dish 
              imageSrc={pinkMacarron} 
              title="Macarons" 
              price={24.50} 
              description={"Farinha de amêndoas, manteiga, claras e açúcar"}
              quantity={dishQuantity}
              setQuantity={setDishQuantity}
            />
            <Dish 
              imageSrc={peachyPastrie} 
              title="Peachy Pastrie" 
              price={29.50}
              description={"Delicioso folheado de pêssego com folhas de hortelã"}
              quantity={dishQuantity}
              setQuantity={setDishQuantity}
            />
            <Dish 
              imageSrc={prugnaPie}
              title="Prugna pie" 
              price={32.50}
              description={"Torta de ameixa com massa amanteigada, polvilho em açúcar"}
              quantity={dishQuantity}
              setQuantity={setDishQuantity}
            />
          </div>
        <h4>Bebidas </h4>
          <div className="drinks">
            <Dish 
              imageSrc={coffee} 
              title="Expresso" 
              price={7.90} 
              description={"Café cremoso feito na temperatura e pressões perfeitas"}
              quantity={dishQuantity}
              setQuantity={setDishQuantity}
            />
            <Dish 
              imageSrc={passionFruitJuice} 
              title="Suco de maracujá" 
              price={12.90}
              description={"Suco de maracujá gelado, cremoso, docinho"}
              quantity={dishQuantity}
              setQuantity={setDishQuantity}
            />
            <Dish 
              imageSrc={tea}
              title="Tè d'autunno" 
              price={19.90}
              description={"Chá de anis, canela e limão. Sinta o outono italiano"}
              quantity={dishQuantity}
              setQuantity={setDishQuantity}
            />
          </div>

        <Footer/>
      </main>
    </Container>
  )
}