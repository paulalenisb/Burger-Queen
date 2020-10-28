import React from 'react';
import NavWaiter from '../navBar/NavBarWaiter';
import TypeMenu from '../menu/TypeMenu';
import Breakfast from '../menu/Breakfast';
import Order from '../order/Order';

/* import LunchDinner from '../menu/LunchDinner'; */
import Footer from '../navBar/Footer';
import '../../styles/viewsCss/Waiter.css';



export default function Waiter () {

  return(
    <div className='Waiter'>
      <NavWaiter />
      <div className='Waiter-section'>
        <section className='Menu-section'>
          <TypeMenu />
          <Breakfast />
        </section>
        <section className='Order-section'>
          <Order />
        </section>
      </div>
      <Footer />
    </div>
  )
}

