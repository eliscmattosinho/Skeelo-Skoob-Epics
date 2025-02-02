// Fazer um js dinâmico para criar as seções dos épicos a partir do mesmo modelo para não ter essa repetição

import '../styles/App.css';
import "./Skoob.css";

import skoobLogo from '../assets/image-icons/skoob-icon.png';
import skeeloMoc from '../assets/image-icons/skoob-epics.png';
import skoobEpicOne from '../assets/image-icons/skoob-epi-1.png';
import skoobEpicTwo from '../assets/image-icons/skoob-epi-2.png';
import skoobEpicThree from '../assets/image-icons/skoob-epi-3.png';
import { CiLock } from "react-icons/ci";

function Skeelo() {
    return (
        <div className='content-section'>
            <div className='content epic-content-mockups'>
                <div className='skoob-content'>
                    <div className="first-col-skeelo">
                        <div className="epic-block-title">
                            <h2 className="skoob-title">Skoob</h2>
                            <span className="span-image">
                                <img src={skoobLogo} alt=''></img>
                            </span>
                        </div>

                        <div className="block-p-skeelo">
                            <p className="p-skeelo">  O Skoob é uma rede social literária com funcionalidades de gerenciamento de leituras que permite aos leitores compartilharem opiniões e descobrir novos livros.</p>
                        </div>
                    </div>
                    <div className="second-col-skeelo">
                        <img className="imageMoc" src={skeeloMoc} alt='Skeelo mockups'></img>
                    </div>
                </div>

                <div className="range skoob-range">
                    <p className="range-tag">Net Promoter Score</p>
                    <p className="range-tag"> Engajamento</p>
                    <p className="range-tag">Alcance</p>
                    <p className="range-tag">Fidelidade</p>
                    <p className="range-tag">Satisfação</p>
                </div>

                <div className="mockups-stack mockups-stack-skeelo">
                    <div className="frames-block">
                        <div className="mockup-frame">
                            <span className="cam-point"></span>
                            <img className='frame-image frame-image-skeelo' src={skoobEpicOne} alt='frame skoob-frame'></img>
                            <span className="hide-skoob-epic"></span>
                            <div className='frame-infos-action'>
                                <h4 className='frame-info-title'>Cadastrar/Alterar registro no app</h4>
                                <CiLock />
                                <button className="btn go-to-block-frame" >Desbloquear</button>
                            </div>
                        </div>
                        <div className="mockup-frame">
                            <span className="cam-point"></span>
                            <img className='frame-image frame-image-skeelo' src={skoobEpicTwo} alt='frame skoob-frame'></img>
                            <span className="hide-skoob-epic"></span>
                            <div className='frame-infos-action'>
                                <h4 className='frame-info-title'>Leituras coletivas</h4>
                                <CiLock />
                                <button className="btn go-to-block-frame" >Desbloquear</button>
                            </div>
                        </div>
                        <div className="mockup-frame">
                            <span className="cam-point"></span>
                            <img className='frame-image frame-image-skeelo' src={skoobEpicThree} alt='frame skoob-frame'></img>
                            <span className="hide-skoob-epic"></span>
                            <div className='frame-infos-action'>
                                <h4 className='frame-info-title'>Alerta de conteúdo</h4>
                                <CiLock />
                                <button className="btn go-to-block-frame" >Desbloquear</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skeelo;