import React from 'react';
import Header from '../components/Header';
import Pizzas from '../data/pizzas'
import './pizza.css';
import '../App.css';

class Pizza extends React.Component {
  state = {
    product: ''
  }

  handleclick= ({target}) =>{
   this.setState({
    product: target.value
   })
  }
  render () {
    const { product } = this.state
    return (
    <div className='conteiner-full'>
      <Header />
      <div>
        <input type="text" value={product} id='product' name='product' onChange={this.handleclick}/>
        <button onAuxClick={this.handleclick}>Pesquisar</button>
      <p>Pizzas</p>
      <section className='conteiner-products'>
        {
          Pizzas.filter((pedido)=> pedido.name.toLowerCase().includes(product.toLowerCase())).map((pizza) => (
            <div className='item'>
              <p>{pizza.name}</p>
              <img src={pizza.image} alt="imagemSand" />
              <p>{`Ingredientes: ${pizza.ingredients}`}</p>
              <p>{`R$ ${pizza.preço},00`}</p>
              <button type='button'>+</button>
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