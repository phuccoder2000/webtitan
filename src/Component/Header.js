import React from 'react'
import Logo from '../data/image/logo/logo-white.png'

export default class Header extends React.Component {
    state = {
        backgroundColor: ' #12203a'
    }
    listenScrollEvent = e => {
        if (window.scrollY > 0) {
            this.setState({ backgroundColor: '#12203a' })
        } else {
            this.setState({ backgroundColor: 'transparent' })
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }
    componentWillUnmount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }
    render() {
        return (
            <div>
                <div style={{ backgroundColor: this.state.backgroundColor }} className="main-header" id="main-header">
                    <a href="#" className="logo" alt="logo">
                        <img src={Logo} alt="logo"></img>
                    </a>
                    <ul>
                        <li>
                            <a className='home' href="#">Home</a>
                        </li>
                        <li>
                            <a className='contact' href="./pages/contact.html">Contact Us</a>
                        </li>
                        <li>
                            <a href="#" onClick={this.props.renderLogin}>Login</a>
                        </li>
                        <li>
                            <button id="btn-menu" className="btn-menu"></button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}