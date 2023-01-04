import React from 'react';
import Header from '../components/Header';
import Sandwiches from '../data/sandwiches.js'
import '../App.css';

class Hamburguer extends React.Component {
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
      <p>Hambúrgueres</p>
      <section className='conteiner-products'>
        {
          Sandwiches
          .filter((item)=> item.name.toLowerCase().includes(product.toLowerCase()))
          .map((sandwich) => (
            <div className='item'>
              <p>{sandwich.name}</p>
              <img src={sandwich.image} alt="imagemSand" />
              <p>{`Ingredientes: ${sandwich.ingredients}`}</p>
              <p>{`R$ ${sandwich.preço},00`}</p>
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

export default Hamburguer;