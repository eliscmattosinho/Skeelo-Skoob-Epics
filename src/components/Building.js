import "./Building.css";

import builder from '../assets/image-icons/builder.svg';

function Building() {
    return (
        <div className="block center">
            <h2>Ops...</h2>
            <div className="builder">
                <img src={builder} alt='builder woman up the straigh'></img>
            </div>

            <p id="block-p">Bem-vindo(a)! Fico muito feliz de te encontrar aqui, mas você chegou um pouco cedo, já me conhece no <a className="social-link" href="https://www.linkedin.com/in/eliscmattosinho/" rel="noreferrer" target="_blank">LinkedIn</a>?</p>
        </div>
    );
}

export default Building;