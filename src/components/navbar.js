import React from 'react'
import MenuIcon from './menu-icon';
// import PropTypes from 'prop-types';

class Navbar extends React.Component {

    componentDidMount(){
        const hamburger = document.querySelector('#menu_button');
        const menuLinks = document.getElementsByClassName('link');        
        // console.log

        hamburger.addEventListener( 'click' , this.toggleMenu);
        
        for(var i = 0; i < menuLinks.length; ++i) {
            var menuLink = menuLinks[i];
            menuLink.addEventListener( 'click' , this.toggleMenu);
        }
    }

    toggleMenu(e) {
        e.preventDefault();
        const nav = document.querySelector('#main-app');
        const linkWrapper = document.querySelector('.wrapper-menu');

        if(nav.classList.contains('menu-open')){
            nav.classList.remove('menu-open');
            linkWrapper.classList.remove('open');
        }else{
            nav.classList.add('menu-open');
        }     
    }

    render() {
        return(
            <div className="am-navigation">
                <header className="am-header">
                    <div className="am-site-brand">
                        <h1 className="site-title slideInLeft animated2">
                        <span>I'm</span>
                        <div class="dropping-texts">
                            <div>a Tech Trainer</div>
                            <div>a UI/UX Designer</div>
                            <div>a Photographer</div>
                            <div>a Videographer</div>
                        </div>
                        </h1>
                    </div>

                    <nav className="am-nav-main">
                        <div className="am-nav-toggle">
                            <div className="am-menu-container">
                                <MenuIcon />
                            </div>
                            <div className="menu-container">
                                <ul className="menu">
                                    <li className="menu-link"><a className="link" href="#"><span>Home</span></a></li>
                                    <li className="menu-link"><a className="link" href="#"><span>About</span></a></li>
                                    <li className="menu-link"><a className="link" href="#"><span>Work</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Navbar;