import React from 'react'

class Loader extends React.Component {
    render() {
        return(
            <div className="globload">
                <div id="logo-loading" className="spinner animated fadeIn">
                    <svg width="40" height="40" viewBox="0 0 40 40">
                        <polygon points="0 0 0 40 40 40 40 0" className ="rect"></polygon>
                    </svg>
                </div>
            </div>
        )
    }
}

export default Loader;