import React from 'react';
import Header from '../components/Header';
import Pizzas from '../data/pizzas'
import './pizza.css';
import '../App.css';

class Pizza extends React.Component {
  render () {
    const { product, cartCounter, cartTotal, handleChange, addToCart, removeToCart } = this.props
    return (
    <div className='conteiner-full'>
      <Header cartCounter = {cartCounter} cartTotal = { cartTotal }/>
      <div className='conteiner-header-products'>
      <input
        type="text"
        value={product}
        id='product'
        name='product'
        onChange={handleChange}
        placeholder="Filtre um sabor"
        />
      <p>Pizzas</p>
      <section className='conteiner-products'>
        {
          Pizzas
          .filter((item)=> item.name.toLowerCase().includes(product.toLowerCase()))
          .map((pizza) => (
            <div className='item'>
              <p>{pizza.name}</p>
              <img src={pizza.image} alt="imagemSand" />
              <p>{`Ingredientes: ${pizza.ingredients}`}</p>
              <span>R$</span>
              <span>{pizza.preço}</span>
              <span>,00</span>
              <button
                type='button'
                onClick={addToCart}
              >Adicionar ao carrinho</button>
               <button
                type='button'
                onClick={()=>removeToCart(pizza)}
              >Remover do carrinho</button>
            </div>
          ))
      }
      </section>
      </div>
      </div>
    )
  }
}

export default Pizza;