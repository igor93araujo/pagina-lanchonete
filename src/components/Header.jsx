import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link 
            to='/hamburguer'
          >
            Hamburgueres
          </Link>
          <Link
            to='/pizza'
          >
            Pizzas
          </Link>
          <Link
            to='/drink'
          >
            Bebidas
          </Link>
        </nav>
      </header>
    )
  }
}
