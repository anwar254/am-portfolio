import React from 'react'
import Sidebar from './sidebar';
import HeroImg from '../image/08.png';

class Hero extends React.Component {
    render() {
        return(
            <div className="hero-container">
                {this.props.children}
                <section className="am-hero-section">
                    <div className="am-hero_content">
                        <Sidebar />
                        <div className="hero-wrapper">
                            <div className="hero-content hero-left">
                                <div className="content">
                                    <h1 style={{marginBottom: `20px`}} className="page-title title-xl">
                                        Ui/UX Designer from Nairobi
                                    </h1>
                                    <p style={{marginBottom: `20px`}}> the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                                <a href="" className="am-more reveal-text">
                                    <h2 className="fo-mask delay-200"><span>Read More</span></h2>
                                </a>
                            </div>
                            <div className="hero-content hero-right">
                                <div className="image-container">
                                    <img src={HeroImg} alt="hero-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Hero;