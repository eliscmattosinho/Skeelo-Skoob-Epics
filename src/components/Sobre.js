import '../styles/App.css';
import "./Sobre.css";

import booksImage from '../assets/image-icons/books.svg';

function Sobre() {
    // @TODO: Pensar em nomes melhores para os identificadores e classes
    return (
        <div id="bg-tgreen" className="content-block">
            <div className="content">
                <div className="content-blocks">
                    <div className="block-title">
                        <p id="block-sub">Ecossistema de leitura digital</p>
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