import React from 'react'
import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="Rodrigo Queiroz" /></a>
                    <h1><strong>Rodrigo Queiroz</strong>, desenvolvedor <br />
                    Front End e futuro Full Stack Node <br />
                    Bem vindo ao meu site :)</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
