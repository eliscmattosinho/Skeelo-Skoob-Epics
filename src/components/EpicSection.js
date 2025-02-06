import React, { useState, useEffect } from 'react';
import { CiLock } from "react-icons/ci";
import './EpicSection.css';
import EpicDetailsSection from "./EpicDetailsSection";
import { handleEpicDetails, addMediaQueryListeners } from "../js/EpicDinamicDetails";

function EpicSection({ logo, title, description, mocImage, rangeItems, epics, theme }) {
    const [selectedEpics, setSelectedEpics] = useState({});
    const [clicked, setClicked] = useState(false);

    const handleEpicSelection = (epicId, theme) => {
        setClicked(true);
        setSelectedEpics(prevState => ({
            ...prevState,
            [theme]: epicId
        }));

        handleEpicDetails(epicId, theme);
    };

    useEffect(() => {
        const handleMediaQueryChange = () => { };
        addMediaQueryListeners(handleMediaQueryChange);
        return () => { };
    }, []);

    return (
        <div id={`${theme}`} className={`content-block`}>
            <div className="content-section">
                <div className="content epic-content-mockups">
                    <div className="epics-content">
                        <div className="first-col-epic">
                            <div className="epic-block-title">
                                <h2 className={`${theme}-title`}>{title}</h2>
                                <span className="span-image">
                                    <img src={logo} alt={`${title} logo`} />
                                </span>
                            </div>
                            <div className="block-p-epic">
                                {description.map((para, index) => (
                                    <p className={`p-${theme}`} key={index}>{para}</p>
                                ))}
                            </div>
                        </div>
                        <div className="second-col-epic">
                            <img className="imageMoc" src={mocImage} alt={`${title} mockups`} />
                        </div>
                    </div>

                    <div className={`range ${theme}-range`}>
                        {rangeItems.map((item, index) => (
                            <p className={`range-tag`} key={index}>{item}</p>
                        ))}
                    </div>

                    <div id={`${theme}`} className="mockups-stack">
                        <div className={`frames-block ${theme}`}>
                            {epics.map((epic, index) => (
                                <div
                                    id={epic.identificador}
                                    className={`mockup-frame ${clicked && selectedEpics[theme] !== epic.identificador ? 'hide' : ''}`}
                                    key={index}
                                >
                                    <span className="cam-point"></span>
                                    <img className={`frame-image frame-image-${theme}`} src={epic.image} alt={`frame ${epic.title}`} />
                                    <span className={`hide-epic hide-${theme}-epic`}></span>
                                    <div className="frame-infos-action">
                                        <h4 className="frame-info-title">{epic.title || epic.titulo_epico}</h4>
                                        <CiLock />
                                        <button
                                            className="btn go-to-block-frame"
                                            onClick={() => handleEpicSelection(epic.identificador, theme)}
                                        >
                                            Desbloquear
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Cada seção só exibe os detalhes do épico do próprio produto */}
                        {selectedEpics[theme] && (
                            <div id={`${theme}-elements`} className="block-elements-details">
                                <EpicDetailsSection
                                    key={selectedEpics[theme]}
                                    productName={theme}
                                    epicId={selectedEpics[theme]}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EpicSection;
