import React from 'react';
import Header from '../components/Header';
import Sandwiches from '../data/sandwiches.js'

class Hamburguer extends React.Component {
  render () {
    return (
    <div>
      <Header />
      <p>Hambúrgueres</p>
      <section className='conteiner-burguers'>
        {
          Sandwiches.map((sandwich) => {
            <div className='sandwich'>
              <img src={sandwich.image} alt="imagemSand" />
            </div>
          }
          )
        }
      </section>
      </div>
    )
  }
}

export default Hamburguer;