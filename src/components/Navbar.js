import React, { Component } from 'react'
import logo from '../images/IMG_20230612_135459.png'
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state = {
    isOpen: false
  }

  handelToggel = () => {
    this.state({ isOpen: !this.state.isOpen })
  }
  render() {
    return (
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/'>
              <img src={logo} alt='Beach Resort' width="200" />
            </Link>
            <button type='button' className='nav-btn' onClick={this.state.handelToggel}>
              <FaAlignRight className='nav-icon' />
            </button>
          </div>
          <ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>

            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>

          </ul>
        </div>

      </nav>
    )
  }
}
