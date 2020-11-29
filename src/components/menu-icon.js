import React from 'react'

class MenuIcon extends React.Component {
    componentDidMount(){
        const wrapperMenu = document.querySelector('.wrapper-menu');

        wrapperMenu.addEventListener('click', function(){
            wrapperMenu.classList.toggle('open');  
        })
    }
    render() {
        return(
            <div className="menu-icon animated slideInRight" id="menu_button">
                <div className="wrapper-menu">
                    <div className="line-menu half start"></div>
                    <div className="line-menu"></div>
                    <div className="line-menu half end"></div>
                </div>
            </div>
        )
    }
}

export default MenuIcon;