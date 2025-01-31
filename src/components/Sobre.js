import '../styles/App.css';
import "./Sobre.css";

import booksImage from '../assets/image-icons/books.svg';

function Sobre() {
    // @TODO: Pensar em nomes melhores para os identificadores e classes
    return (
        <div id="bg-tgreen" className="content-block">
            <div id="sobre" className="content">
                <div className="content-blocks">
                    <div className="block-title">
                        <h4 id="block-sub" className="sub-title">Ecossistema de leitura digital</h4>
                        <h2 id="block-h2">Skeelo-Skoob</h2>
                    </div>
                    <div id="block-image-p" className="center">
                        <div className="alone-p">
                            <p>A mudança no mercado literário começa aqui.</p>
                        </div>
                        <div className="block-image">
                            <img id="image-books" src={booksImage} loading="lazy" alt="illustration of green books in a stack" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Sobre;