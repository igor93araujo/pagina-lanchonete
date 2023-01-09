import React from 'react';
import Header from '../components/Header';
import '../App.css';

class Carrinho extends React.Component {
  render () {
    const {cartCounter, cartTotal,compras, removeFromCartList,removeAll} = this.props;
    return (
      <div className='conteiner-full'>
      <Header cartCounter = {cartCounter} cartTotal = { cartTotal }/>
      
        {compras.length === 0 ? <p className='noItems'>Não há itens no carrinho.</p>
      :
      
      <div className='conteiner-products'>
      {
        compras.map((obj) => (
          <div className='item'>
              <p>{obj.name}</p>
              <img src={obj.img} alt="objImage" />
              <p>{`Ingredientes: ${obj.ingredients}`}</p>
              <span>R$</span>
              <span>{obj.price}</span>
              <span>,00</span>
              <button
                type='button'
                onClick={()=>removeFromCartList(obj)}
              >Remover do carrinho</button>
            </div>
        ))
      }
      </div>}
      <button
      type='button'
      onClick={()=>removeAll()
      }
      className='button'
      >Remover Tudo</button>
      </div>
    )
  }
}

export default Carrinho;