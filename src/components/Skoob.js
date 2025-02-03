import EpicSection from './EpicSection.js';
import './Skoob.css';
import skoobLogo from '../assets/image-icons/skoob-icon.png';
import skeeloMoc from '../assets/image-icons/skoob-epics.png';
import skoobEpicOne from '../assets/image-icons/skoob-epi-1.png';
import skoobEpicTwo from '../assets/image-icons/skoob-epi-2.png';
import skoobEpicThree from '../assets/image-icons/skoob-epi-3.png';

const skoobDescription = [
    "O Skoob é uma rede social literária com funcionalidades de gerenciamento de leituras que permite aos leitores compartilharem opiniões e descobrir novos livros."
];

const skoobRangeItems = ["Net Promoter Score", "Engajamento", "Alcance", "Fidelidade", "Satisfação"];

const skoobEpics = [
    { title: 'Cadastrar/Alterar registro no app', image: skoobEpicOne },
    { title: 'Leituras coletivas', image: skoobEpicTwo },
    { title: 'Alerta de conteúdo', image: skoobEpicThree }
];

function Skoob() {
    return (
        <EpicSection
            logo={skoobLogo}
            title="Skoob"
            description={skoobDescription}
            mocImage={skeeloMoc}
            rangeItems={skoobRangeItems}
            epics={skoobEpics}
            theme="skoob"
        />
    );
}

export default Skoob;
