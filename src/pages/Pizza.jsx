import React from 'react';
import Header from '../components/Header';
import Pizzas from '../data/pizzas'
import './pizza.css';
import '../App.css';

class Pizza extends React.Component {
  state = {
    product: ''
  }

  handleChange= ({target}) =>{
    this.setState({
     product: target.value
    })
   }

  render () {
    const { product } = this.state
    return (
    <div className='conteiner-full'>
      <Header />
      <div className='conteiner-header-products'>
      <input
        type="text"
        value={product}
        id='product'
        name='product'
        onChange={this.handleChange}
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
              <p>{`R$ ${pizza.preço},00`}</p>
              <button>Adicionar ao carrinho</button>
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