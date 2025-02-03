import React from 'react';
import { CiLock } from "react-icons/ci";
import './EpicSection.css';
import '../js/DinamicEpics';

function EpicSection({ logo, title, description, mocImage, rangeItems, epics, theme }) {
    return (
        <div className={`content-block ${theme}`}>
            <div className="content-section">
                <div className="content epic-content-mockups">
                    <div className={`${theme}-content`}>
                        <div className="first-col">
                            <div className="epic-block-title">
                                <h2 className={`${theme}-title`}>{title}</h2>
                                <span className="span-image">
                                    <img src={logo} alt={`${title} logo`} />
                                </span>
                            </div>
                            <div className="block-p">
                                {description.map((para, index) => (
                                    <p className={`${theme}-p`} key={index}>{para}</p>
                                ))}
                            </div>
                        </div>
                        <div className="second-col">
                            <img className="imageMoc" src={mocImage} alt={`${title} mockups`} />
                        </div>
                    </div>

                    <div className={`range ${theme}-range`}>
                        {rangeItems.map((item, index) => (
                            <p className={`range-tag`} key={index}>{item}</p>
                        ))}
                    </div>

                    <div className="mockups-stack">
                        <div className="frames-block">
                            {epics.map((epic, index) => (
                                <div className="mockup-frame" key={index}>
                                    <span className="cam-point"></span>
                                    <img className={`frame-image ${theme}`} src={epic.image} alt={`frame ${title}`} />
                                    <span className="hide-epic"></span>
                                    <div className="frame-infos-action">
                                        <h4 className="frame-info-title">{epic.title}</h4>
                                        <CiLock />
                                        <button className="btn go-to-block-frame">Desbloquear</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EpicSection;
