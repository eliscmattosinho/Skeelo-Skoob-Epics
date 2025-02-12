import '../styles/App.css';
import "./Contato.css";

import contactCardBlue from '../assets/image-icons/contact-card-blue.svg';
import contactCardRed from '../assets/image-icons/contact-card-red.svg';
import contactCardDark from '../assets/image-icons/contact-card.svg';

function Contato() {
    return (
        <div id="bg-cgreen" className="content-block">
            <div id="contato" className="content">
                <div className="content-blocks">
                    <div className="content-blocks">
                        <div className="block-title">
                            <div className='contact-block'>
                                <h3 className="section-title">Contato</h3>
                                <h4 className="sub-title">Quer saber onde me encontrar?</h4>
                            </div>
                        </div>

                        <div className="contact-card-block">
                            <div className="block-contact">
                                <p className="p-contact">
                                    <a href="https://www.linkedin.com/in/eliscmattosinho/" target='_blank' rel='noreferrer'>LinkedIn</a>
                                </p>
                                <img className="img-contact" src={contactCardBlue} alt=""></img>
                            </div>
                            <div className="block-contact">
                                <p className="p-contact">
                                    <a href="mailto:eliscmattosinho.com">E-mail</a>
                                </p>
                                <img className="img-contact" src={contactCardRed} alt=""></img></div>
                            <div className="block-contact">
                                <p className="p-contact">
                                    <a href="https://github.com/eliscmattosinho" target='_blank' rel='noreferrer'>GitHub</a>
                                </p>
                                <img className="img-contact" src={contactCardDark} alt=""></img></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contato;