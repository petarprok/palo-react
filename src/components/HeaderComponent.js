import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

export default class HeaderComponent extends React.Component {
    render() {
        return (
            <div className={'container' + (this.props.sticky ? ' sticky' : '')}>
                <div className='custom-navbar'>
                    <nav className='navbar navbar-expand-lg'>
                        <a className='navbar-brand' href='/'>Palo Alto</a>

                        <button className='navbar-toggler' type='button' data-toggle='collapse'
                                data-target='#navbarTogglerDemo02' aria-controls='navbarTogglerDemo02'
                                aria-expanded='false'
                                aria-label='Toggle navigation'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 26' width='36' height='26'>
                                <g id='header'>
                                    <path className='shp0' fill='#5c6bc0'
                                          d='M0 0L36 0L36 2L0 2L0 0ZM0 12L36 12L36 14L0 14L0 12ZM10 24L36 24L36 26L10 26L10 24Z'/>
                                </g>
                            </svg>
                        </button>

                        <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
                            <ul className='nav ml-auto'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/'>Home</Link>
                                </li>

                                <li className='nav-item'>
                                    <Link className='nav-link' to='/single-hard'>Single hard coded</Link>
                                </li>

                                <li className='nav-item'>
                                    <a className='nav-link' href='/'>Archive</a>
                                </li>

                                <li className='nav-item'>
                                    <a className='nav-link' href='/'>Contact</a>
                                </li>

                                <li className='nav-item'>
                                    <a className='nav-link' href='/'>Archive</a>
                                </li>

                                <li className='nav-item dropdown'>
                                    <a className='nav-link dropdown-toggle' href='/' id='navbarDropdown'
                                       role='button'
                                       data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                        Dropdown
                                    </a>
                                    <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                        <a className='dropdown-item' href='/'>Action</a>
                                        <a className='dropdown-item' href='/'>Another action</a>
                                        <a className='dropdown-item nav-link dropdown-toggle' href='/'
                                           id='navbarDropdownSubmenu' role='button'
                                           data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>another
                                            dropdown</a>

                                        <div className='dropdown-menu' aria-labelledby='navbarDropdownSubmenu'>
                                            <a className='dropdown-item' href='/'>sub item</a>
                                            <a className='dropdown-item' href='/'>sub item 2</a>
                                        </div>
                                    </div>
                                </li>

                                <li className='nav-item navbar-search-icon'>
                                    <FontAwesomeIcon icon={faSearch}/>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
