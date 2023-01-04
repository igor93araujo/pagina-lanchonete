import React from 'react';
import Header from '../components/Header';
import Drinks from '../data/drinks'
import './pizza.css';

class Drink extends React.Component {
  render () {
    return (
    <div>
      <Header />
      <p>Bebidas</p>
      <section className='conteiner-Drinkss'>
        {
          Drinks.map((drink) => (
            <div className='drink'>
              <p>{drink.name}</p>
              <img src={drink.image} alt="imagemSand" />
              <p>{`R$ ${drink.preço},00`}</p>
              <p>+</p>
            </div>
          ))
      }
      </section>
      </div>
    )
  }
}

export default Drink;