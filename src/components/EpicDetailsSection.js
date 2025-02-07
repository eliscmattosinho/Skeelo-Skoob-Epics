import React, { useLayoutEffect, useRef, useState } from 'react';
import './EpicDetailsSection.css';
import { useEpicDetails } from '../js/EpicDetails';
import { RiExpandDiagonalLine } from "react-icons/ri";
import { GrPrevious, GrNext } from "react-icons/gr";
import { initializeNavigation } from '../js/EpicDinamicElements';

function EpicContext({ context }) {
    return (
        <div className="epic-section epic-context">
            <div id='epic-context-content'>
                <h3 className='epic-section-title'>Contexto</h3>
                <div className='epic-section-body'>
                    <p className="epic-context-text">{context || "Contexto não disponível"}</p>
                </div>
            </div>
        </div>
    );
}

function UserStories({ stories = [] }) {
    return (
        <div className="epic-section epic-user-stories">
            <div id='epic-user-stories-content'>
                <h3 className='epic-section-title'>User Stories</h3>
                <div className='epic-buttons-container'>
                    {stories.length > 0 ? (
                        stories.map((story, index) => (
                            <button key={index} className='btn epic-button'>US{story.numero}</button>
                        ))
                    ) : (
                        <p>Nenhuma história de usuário disponível.</p>
                    )}
                </div>
                {stories.map((story, index) => (
                    <div key={index} className='epic-us-container epic-expand-container user-story-details'>
                        <button className="expand-modal">
                            <RiExpandDiagonalLine />
                        </button>
                        <div className="user-story-content">
                            <div className="user-story-header">
                                <h4 className="user-story-title">{story.titulo || "Título não disponível"}</h4>
                                <p className="user-story-description">{story.user_storie || "Descrição não disponível"}</p>
                            </div>
                            <div className="user-story-criteria">
                                <h4 className='user-story-title'>Critérios</h4>
                                <ol className='criteria-list'>
                                    {(story.criterios_de_aceitacao || []).map((criteria, i) => (
                                        <li key={i}>{criteria}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function DefinitionOfDone({ doneCriteria }) {
    return (
        <div className="epic-section epic-definition-of-done">
            <div id='epic-dod-content'>
                <h3 className='epic-section-title'>Definição de pronto</h3>
                <div className='dod-details epic-expand-container'>
                    <button className="expand-modal">
                        <RiExpandDiagonalLine />
                    </button>
                    <ul>
                        {(doneCriteria || []).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

function Metrics({ metrics }) {
    return (
        <div className="epic-section epic-metrics">
            <div id='epic-metrics-content' className="epic-metrics-container">
                <h3 className='epic-section-title'>Métricas e KPIs</h3>
                <div className='metrics-container'>
                    {(metrics || []).map((metric, index) => (
                        <div key={index} className='metric-item'>
                            <div className="metric-value-container">
                                <span className='metric-value-block'>
                                    <span className='metric-value metric-value-element'>+</span>
                                    <p className='metric-value'>{metric.valor || "Valor não disponível"}</p>
                                </span>
                            </div>
                            <h5 className='metric-title'>{metric.titulo || "Título não disponível"}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function EpicDetailsSection({ productName, epicId }) {
    const [currentBlock, setCurrentBlock] = useState(0);
    const data = useEpicDetails(productName);

    const previousButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const navItemsRef = useRef([]);

    const currentEpic = data.find(epic => epic.identificador === epicId);

    useLayoutEffect(() => {
        const navElements = document.querySelectorAll('.block-elements-nav');
        navItemsRef.current = Array.from(navElements);
    
        if (previousButtonRef.current && nextButtonRef.current && navItemsRef.current.length > 0) {
            initializeNavigation(previousButtonRef.current, nextButtonRef.current, navItemsRef.current, currentBlock, currentEpic);
        }
    }, [data, currentBlock, currentEpic]);

    if (!data || data.length === 0) {
        return <div>Nenhum dado foi encontrado.</div>;
    }

    if (!currentEpic) {
        return <div>Épico não encontrado.</div>;
    }

    const handleNextBlock = () => {
        if (currentBlock < 3) {
            setCurrentBlock(currentBlock + 1);
        }
    };

    const handlePreviousBlock = () => {
        if (currentBlock > 0) {
            setCurrentBlock(currentBlock - 1);
        }
    };

    return (
        <div id={`${currentEpic.identificador}`} className='epic-details-container'>
            <div className="block-elements-navigation navigation-controls">
                <span className="nav-icon nav-previous" ref={previousButtonRef} onClick={handlePreviousBlock}>
                    <GrPrevious />
                </span>
                <span className="nav-icon nav-next"ref={nextButtonRef}  onClick={handleNextBlock}>
                    <GrNext />
                </span>
            </div>

            <div id='block-elements'>
                <div className={`block-elements-nav ${currentBlock === 0 ? '' : 'hide'}`}>
                    <EpicContext context={currentEpic.contexto} />
                </div>
                <div className={`block-elements-nav ${currentBlock === 1 ? '' : 'hide'}`}>
                    <UserStories stories={currentEpic.historias_de_usuario} />
                </div>
                <div className={`block-elements-nav ${currentBlock === 2 ? '' : 'hide'}`}>
                    <DefinitionOfDone doneCriteria={currentEpic.criterios_de_aceitacao} />
                </div>
                <div className={`block-elements-nav ${currentBlock === 3 ? '' : 'hide'}`}>
                    <Metrics metrics={currentEpic.metricas} />
                </div>
            </div>
        </div>
    );
}

export default EpicDetailsSection;
