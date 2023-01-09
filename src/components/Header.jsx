import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default class Header extends Component {


  render() {
    return (
      <header>
        <nav>
          <Link 
            to='/hamburguer'
          >
            <p>Hamburgueres</p>
          </Link>
          <Link
            to='/pizza'
          >
            <p>Pizzas</p>
          </Link>
          <Link
            to='/drink'
          >
            <p>Bebidas</p>
          </Link>
          <Link
            to='/carrinho'
          >
            <p>Carrinho: <spam>{`${this.props.cartCounter} ite${this.props.cartCounter!== 1 ? 'ns' : 'm'}`}</spam></p>
            <p>Valor total: {`R$ ${ this.props.cartTotal },00`}</p>
          </Link>
        </nav>
      </header>
    )
  }
}
