import '../styles/App.css';
import './Contexto.css';

import skoobLogo from '../assets/image-icons/skoob-logo.png';
import skeeloLogo from '../assets/image-icons/skeelo-logo.png';
import pokemonSurprise from '../assets/image-icons/pokemon-surprise.jpg';

function Contexto() {
    return (
        <div id="contexto" className="content-block">
            <div className="content-section">
                <div className="block-context">
                    <div class="grid mobile-section section-content-blocks">
                        <div className="section-content-blocks first-column">
                            <div id="header-block">
                                <h3 className="section-title context-title">Contexto</h3>
                                <h4 className="sub-title">O início</h4>
                            </div>
                            <div className="p-blocks">
                                <div className="p-block">
                                    <p> Em novembro de 2024, tivemos a aquisição do Skoob pela Skeelo, empresa que vem se expandindo no mercado brasileiro de leitura digital e ganhando o coração de diversos leitores.</p>
                                    <p> A aquisição foi realizada pelo valor de R$1,5 milhão de acordo com dados do Cade, que aprovou a transação. Com a aquisição, a empresa revelou planos de melhoria e integração entre as plataformas.</p>
                                </div>
                            </div>
                            <div className="btns-block">
                                <button className="btn btn-skoob btn-twhite" onClick={() => window.open('https://www.skoob.com.br/', '_blank', 'noreferrer')}>Skoob</button>
                                <button className="btn btn-skeelo btn-twhite" onClick={() => window.open('https://skeelo.com/pt/', '_blank', 'noreferrer')}>Skeelo</button>
                                <button className="btn btn-publishenews btn-twhite" onClick={() => window.open('https://www.publishnews.com.br/materias/2024/08/20/skeelo-completa-a-aquisicao-do-skoob-e-quer-atualizar-o-ambiente-da-rede-social', '_blank', 'noreferrer')}>Publishenews</button>
                            </div>
                        </div>

                        <div className="images-block">
                            <div className="img-container"><img className='img' src={skoobLogo} alt="skoob logo"></img></div>
                            <div className="img-container"><img className='img' src={skeeloLogo} alt="skeelo logo"></img></div>
                            <div className="img-container"><img className='img' src={pokemonSurprise} alt="pokemon surprise intro"></img></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contexto;