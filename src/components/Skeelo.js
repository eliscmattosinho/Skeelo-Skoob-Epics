import '../js/DinamicEpics';

import '../styles/App.css';
import "./Skeelo.css";

import skeeLogo from '../assets/image-icons/skee-icon.png';
import skeeloMoc from '../assets/image-icons/skeelo-epics.png';
import skeeEpicOne from '../assets/image-icons/skee-epi-1.png';
import skeeEpicTwo from '../assets/image-icons/skee-epi-2.png';
import skeeEpicThree from '../assets/image-icons/skee-epi-3.png';
import skeeEpicFour from '../assets/image-icons/skee-epi-4.png';
import { CiLock } from "react-icons/ci";

function Skeelo() {
    return (
        <div id='skeelo' className="content-block">
            <div className='content-section'>
                <div className='content epic-content-mockups'>
                    <div className='skeelo-content'>
                        <div className="first-col-skeelo">
                            <div className="epic-block-title">
                                <h2 className="skeelo-title">Skeelo</h2>
                                <span className="span-image">
                                    <img src={skeeLogo} alt=''></img>
                                </span>
                            </div>
                            <div className="block-p-skeelo">
                                <p className="p-skeelo"> O Skeelo é uma empresa que democratiza o acesso aos livros por meio de parcerias com serviços de assinatura.</p>
                                <p className="p-skeelo"> Permite que os usuários leiam onde e quando quiserem através de seus dispositivos e tem ganhado destaque, marcando participação na Bienal de 2024, que contou com 700 mil pessoas.</p>
                            </div>
                        </div>
                        <div className="second-col-skeelo">
                            <img className="imageMoc" src={skeeloMoc} alt='Skeelo mockups'></img>
                        </div>
                    </div>
            
                        <div className="range skeelo-range">
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
                                <span className="cam-point"></span>
                                <img className='frame-image frame-image-skeelo' src={skeeEpicOne} alt='frame skeelo-frame'></img>
                                <span className="hide-epic"></span>
                                <div className='frame-infos-action'>
                                    <h4 className='frame-info-title'>Visualização de livros relacionados</h4>
                                    <CiLock />
                                    <button className="btn go-to-block-frame" >Desbloquear</button>
                                </div>
                            </div>
                            <div className="mockup-frame">
                                <span className="cam-point"></span>
                                <img className='frame-image frame-image-skeelo' src={skeeEpicTwo} alt='frame skeelo-frame'></img>
                                <span className="hide-epic"></span>
                                <div className='frame-infos-action'>
                                    <h4 className='frame-info-title'>Alerta de promoção de livros</h4>
                                    <CiLock />
                                    <button className="btn go-to-block-frame" >Desbloquear</button>
                                </div>
                            </div>
                            <div className="mockup-frame">
                                <span className="cam-point"></span>
                                <img className='frame-image frame-image-skeelo' src={skeeEpicThree} alt='frame skeelo-frame'></img>
                                <span className="hide-epic"></span>
                                <div className='frame-infos-action'>
                                    <h4 className='frame-info-title'>Lista de livros marcados para resgate</h4>
                                    <CiLock />
                                    <button className="btn go-to-block-frame" >Desbloquear</button>
                                </div>
                            </div>
                            <div className="mockup-frame">
                                <span className="cam-point"></span>
                                <img className='frame-image frame-image-skeelo' src={skeeEpicFour} alt='frame skeelo-frame'></img>
                                <span className="hide-epic"></span>
                                <div className='frame-infos-action'>
                                    <h4 className='frame-info-title'>Presentear</h4>
                                    <CiLock />
                                    <button className="btn go-to-block-frame" >Desbloquear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skeelo;