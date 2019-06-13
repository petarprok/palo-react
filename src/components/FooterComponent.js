import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'

export default class FooterComponent extends React.Component {
    render() {
        return (
            <div className='footer-container'>
                <div className='container'>
                    <p className='footer-page-name'>Palo Alto</p>

                    <div className='footer-navigation-container'>
                        <ul>
                            <li><a className='active' href='/'>home</a></li>
                            <li><a href='/'>about</a></li>
                            <li><a href='/'>archive</a></li>
                            <li><a href='/'>contact</a></li>
                            <li className='search'><FontAwesomeIcon icon={faSearch} color='#ffffff'/></li>
                        </ul>
                    </div>

                    <hr className='divider'/>

                    <p className='text-divider'>
                        Nunc placerat dolor at lectus hendrerit dignissim. Ut tortor sem, consectetur nec hendrerit ut,
                        ullamcorper ac odio. Donec viverra ligula at quam tincidunt imperdiet. Nulla mattis tincidunt
                        auctor.
                    </p>

                    <hr className='second-divider'/>

                    <p className='copy-write'>
                        &copy; 2015 - Palo Alto. All Rights Reserved. Designed & Developed by <a href='/'>PixelBuddha Team</a>
                    </p>

                    <div className='footer-social-icons'>
                        <span><FontAwesomeIcon icon={faFacebook} color='#ffffff'/></span>
                        <span><FontAwesomeIcon icon={faTwitter} color='#ffffff'/></span>
                        <span><FontAwesomeIcon icon={faInstagram} color='#ffffff'/></span>
                        <span><FontAwesomeIcon icon={faPinterest} color='#ffffff'/></span>
                    </div>
                </div>
            </div>
        )
    }
}
