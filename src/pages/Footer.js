import '../styles/App.css';
import "./Footer.css";


function Footer() {
    return (
        <div id="footer-block">
            <div id="footer-content">
                <a id="p-state" className="btn-p-state" href='https://eliscmattosinho.github.io/Board-de-Desenvolvimento/'>
                    Board de desenvolvimento
                </a>

                <div class="footer-container">
                    <p className="p-footer">Todos os direitos reservados.</p>
                    <p className="p-footer">2025</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;