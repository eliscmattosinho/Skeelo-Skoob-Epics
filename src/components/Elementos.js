import "../styles/App.css";
import "./Elementos.css";

import epicsImage from '../assets/image-icons/epics-image.svg';

import contextImage from '../assets/image-icons/context-svg.svg';
import usImage from '../assets/image-icons/us-svg.svg';
import metricsImage from '../assets/image-icons/metrics-svg.svg';
import dodImage from '../assets/image-icons/dod-svg.svg';

function Elementos() {
    return (
        <div className="content-block content-block-elements">
            <div class=" section-elements section-content-blocks">
                <div className="epic-block">
                    <img className="epic-image" src={epicsImage} alt="quebra-cabeça"></img>
                    <div className="epic-content">
                        <h3 className="section-title">Épicos</h3>
                        <p className="p-epic"> Em <strong>Product Management</strong>, épicos são grandes iniciativas que agrupam várias user stories relacionadas, organizadas em torno de um <strong>objetivo estratégico</strong>. Eles fornecem uma visão ampla, ajudando a alinhar esforços do time com as <strong>metas do produto</strong> e <strong>do negócio</strong>.</p>
                    </div>
                </div>

                <div className="block-elements content-section">
                    <div className="element element-context">
                        <div class="img-container-elements">
                            <img className="image-element" src={contextImage} alt=""></img>
                        </div>
                        <details>
                            <summary className="title-summary">Contexto</summary>
                            <p className="p-element">Ideia geral do épico.</p>
                        </details>
                    </div>
                    <div className="element element-us">
                        <div class="img-container-elements"><img className="image-element" src={usImage} alt=""></img></div>
                        <details>
                            <summary className="title-summary">User Stories</summary>
                            <p className="p-element">Quebra do épico em histórias de valor.</p>
                        </details>
                    </div>
                    <div className="element element-metrics">
                        <div class="img-container-elements"><img className="image-element" src={metricsImage} alt=""></img></div>
                        <details>
                            <summary className="title-summary">Métricas</summary>
                            <p className="p-element">Principais medidas estimadas com impacto esperado.</p>
                        </details>
                    </div>
                    <div className="element element-dod">
                        <div class="img-container-elements"><img className="image-element" src={dodImage} alt=""></img></div>
                        <details>
                            <summary className="title-summary">DoD
                            </summary>
                            <p className="p-element">Critérios que devem estar finaliziados para o item ser considerado concluído.</p>
                        </details>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Elementos;