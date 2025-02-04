import './EpicDetails.css';
import '../styles/App.css';
import '../js/DinamicEpics';
import { RiExpandDiagonalLine } from "react-icons/ri";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

function EpicDetails() {
    return (
        <div className='epic-details-container'>
            <div className='navigation-controls'>
                <span className='nav-icon nav-previous'><GrPrevious /></span>
                <span className='nav-icon nav-next'><GrNext /></span>
            </div>

            <div className="epic-section epic-context">
                <div id='epic-context-content'>
                    <h3 className='epic-section-title'>Contexto</h3>
                    <div className='epic-section-body'>
                        <p className="epic-context-text">Os usuários gostariam de cadastrar livros diretamente pelo app, sem precisar acessar a versão web pela praticidade e rapidez.</p>
                    </div>
                </div>
            </div>

            <div className="epic-section epic-user-stories">
                <div id='epic-user-stories-content'>
                    <h3 className='epic-section-title'>User Stories</h3>
                    <div className='epic-buttons-container'>
                        <button id='us-1' className='btn epic-button'>US1</button>
                        <button id='us-2' className='btn epic-button'>US2</button>
                        <button id='us-3' className='btn epic-button'>US3</button>
                        <button id='us-4' className='btn epic-button'>US4</button>
                    </div>
                    <div className='epic-us-container epic-expand-container user-story-details'>
                        <button className="expand-modal">
                            <RiExpandDiagonalLine />
                        </button>
                        <div className="user-story-content">
                            <div className="user-story-header">
                                <h4 className="user-story-title">USX: Title</h4>
                                <p className="user-story-description">sdfjhsjf sdfuihdj fdjuhrf jerfhwjuerh urehfuerh sijfe.</p>
                            </div>
                            <div className="user-story-criteria">
                                <h4 className='user-story-title'>Critérios</h4>
                                <ol className='criteria-list'>
                                    <li>Item1</li>
                                    <li>Item2</li>
                                    <li>...</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="epic-section epic-definition-of-done">
                <div id='epic-dod-content'>
                    <h3 className='epic-section-title'>Definição de pronto</h3>
                    <div className='dod-details epic-expand-container'>
                        <button className="expand-modal">
                            <RiExpandDiagonalLine />
                        </button>
                        <ul>
                            <li>Item1</li>
                            <li>Item2</li>
                            <li>...</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="epic-section epic-metrics">
                <div id='epic-metrics-content' className="epic-metrics-container">
                    <h3 className='epic-section-title'>Métricas e KPIs</h3>
                    <div className='metrics-container'>
                        <div className='metric-item'>
                            <div class="metric-value-container">
                                <span className='metric-value-block'>
                                    <span className='metric-value metric-value-element'>+</span>
                                    <p className='metric-value'>
                                        78
                                    </p>
                                    <span className='metric-value metric-value-element'>%</span>
                                </span>
                            </div>
                            <h5 className='metric-title'>Título da Métrica</h5>
                        </div>
                        <div className='metric-item'>
                            <div class="metric-value-container">
                                <span className='metric-value-block'>
                                    <span className='metric-value metric-value-element'>+</span>
                                    <p className='metric-value'>
                                        78
                                    </p>
                                    <span className='metric-value metric-value-element'>%</span>
                                </span>
                            </div>
                            <h5 className='metric-title'>Título da Métrica</h5>
                        </div>
                    </div>
                </div>
                <span id="progress-indicator"></span>
            </div>

            <span id="progress-indicator"></span>
        </div>
    );
}

export default EpicDetails;
