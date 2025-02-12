import "../styles/App.css";
import "./Elementos.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import epicsImage from '../assets/image-icons/epics-image.svg';
import contextImage from '../assets/image-icons/context-svg.svg';
import usImage from '../assets/image-icons/us-svg.svg';
import metricsImage from '../assets/image-icons/metrics-svg.svg';
import dodImage from '../assets/image-icons/dod-svg.svg';

import { useState } from 'react';

function Elementos() {
    const [isExpandedContext, setIsExpandedContext] = useState(false);
    const [isExpandedUS, setIsExpandedUS] = useState(false);
    const [isExpandedMetrics, setIsExpandedMetrics] = useState(false);
    const [isExpandedDoD, setIsExpandedDoD] = useState(false);

    const toggleContext = () => setIsExpandedContext(!isExpandedContext);
    const toggleUS = () => setIsExpandedUS(!isExpandedUS);
    const toggleMetrics = () => setIsExpandedMetrics(!isExpandedMetrics);
    const toggleDoD = () => setIsExpandedDoD(!isExpandedDoD);

    return (
        <div id="elementos" className="content-block content-block-elements">
            <div className="section-elements section-content-blocks">
                <div className="epic-block">
                    <img className="epic-image" src={epicsImage} alt="quebra-cabeça" />
                    <div className="epic-content">
                        <h3 className="section-title">Épicos</h3>
                        <p className="p-epic">
                            Em <strong>Product Management</strong>, épicos são grandes iniciativas que agrupam várias user stories relacionadas, organizadas em torno de um <strong>objetivo estratégico</strong>. Eles fornecem uma visão ampla, ajudando a alinhar esforços do time com as <strong>metas do produto</strong> e <strong>do negócio</strong>.
                        </p>
                    </div>
                </div>

                <div className="block-elements content-section">
                    <div className="element flex-column element-context">
                        <div className="img-container-elements">
                            <img className="image-element" src={contextImage} alt="" />
                        </div>
                        <details className="flex-column">
                            <summary className="title-summary" onClick={toggleContext}>
                                Contexto
                                {isExpandedContext ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </summary>
                            <p className="p-element">Ideia geral do épico.</p>
                        </details>
                    </div>
                    <div className="element flex-column element-us">
                        <div className="img-container-elements"><img className="image-element" src={usImage} alt="" /></div>
                        <details className="flex-column">
                            <summary className="title-summary" onClick={toggleUS}>
                                User Stories
                                {isExpandedUS ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </summary>
                            <p className="p-element">Quebra do épico em histórias de valor.</p>
                        </details>
                    </div>
                    <div className="element flex-column element-metrics">
                        <div className="img-container-elements"><img className="image-element" src={metricsImage} alt="" /></div>
                        <details className="flex-column">
                            <summary className="title-summary" onClick={toggleMetrics}>
                                Métricas
                                {isExpandedMetrics ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </summary>
                            <p className="p-element">Principais medidas com impacto esperado.</p>
                        </details>
                    </div>
                    <div className="element flex-column element-dod">
                        <div className="img-container-elements"><img className="image-element" src={dodImage} alt="" /></div>
                        <details className="flex-column">
                            <summary className="title-summary" onClick={toggleDoD}>
                                DoD
                                {isExpandedDoD ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </summary>
                            <p className="p-element">Critérios para o item ser considerado concluído.</p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Elementos;