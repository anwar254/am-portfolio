import React from 'react'
import  brand  from '../image/logo.png';

class Sidebar extends React.Component {
    render() {
        return(
            <div className="sidebar">
                <article className="am-sidebar">
                    <a href="/" className="am-sidebar_logo u-none@to-medium">
                        <img src={brand} alt="logo"/>
                    </a>
                    <p className="am-sidebar_tagline">
                        Building <br/>for the web
                    </p>
                </article>
            </div>
        )
    }
}

export default Sidebar;