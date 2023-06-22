import * as React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import '../App.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-content' >
                <div className='footer-text'>
                    Agner Krarup Erlang
                </div>
                <div className='footer-text'>
                    <span>&copy; 2023 | All rights reserved.</span>
                </div>
                <div className='footer-icon'>
                    <IconContext.Provider value={{ size: '2em', gap: '2em' }}>
                        <a href="https://github.com/MuhammadAmas" target="_blank" rel="noopener noreferrer">
                            <FaGithub className='footer-icon' />
                        </a>
                        <a href="https://linkedin.com/in/amaswaseem" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='footer-icon' />
                        </a>
                    </IconContext.Provider>
                </div>

            </div>
        </footer>
    );
}

export default Footer;