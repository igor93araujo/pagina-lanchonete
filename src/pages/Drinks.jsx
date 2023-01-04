import React from 'react';
import Header from '../components/Header';
import Drinks from '../data/drinks'
import './drink.css';
import '../App.css';

class Drink extends React.Component {
  render () {
    return (
    <div className='conteiner-full'>
      <Header />
      <div>
      <p>Bebidas</p>
      <section className='conteiner-products'>
        {
          Drinks.map((drink) => (
            <div className='item'>
              <p>{drink.name}</p>
              <img src={drink.image} alt="imagemSand" />
              <p>{`R$ ${drink.preço},00`}</p>
              <p>+</p>
            </div>
          ))
      }
      </section>
      </div>
      </div>
    )
  }
}

export default Drink;