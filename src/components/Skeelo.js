import EpicSection from './EpicSection.js';
import './Skeelo.css';

import skeeLogo from '../assets/image-icons/skee-icon.png';
import skeeloMoc from '../assets/image-icons/skeelo-epics.png';
import skeeEpicOne from '../assets/image-icons/skee-epi-1.png';
import skeeEpicTwo from '../assets/image-icons/skee-epi-2.png';
import skeeEpicThree from '../assets/image-icons/skee-epi-3.png';
import skeeEpicFour from '../assets/image-icons/skee-epi-4.png';

const skeeloDescription = [
    "O Skeelo é uma empresa que democratiza o acesso aos livros por meio de parcerias com serviços de assinatura.",
    "Permite que os usuários leiam onde e quando quiserem através de seus dispositivos e tem ganhado destaque, marcando participação na Bienal de 2024, que contou com 700 mil pessoas."
];

const skeeloRangeItems = ["Net Promoter Score", "Engajamento", "Alcance", "Fidelidade", "Satisfação"];

const skeeloEpics = [
    { title: 'Visualização de livros relacionados', image: skeeEpicOne, id: 'skeeEpicOne'},
    { title: 'Alerta de promoção de livros', image: skeeEpicTwo, id: 'skeeEpicTwo'},
    { title: 'Lista de livros marcados para resgate', image: skeeEpicThree, id: 'skeeEpicThree'},
    { title: 'Presentear', image: skeeEpicFour, id: 'skeeEpicFour'}
];

function Skeelo() {
    return (
        <EpicSection
            logo={skeeLogo}
            title="Skeelo"
            description={skeeloDescription}
            mocImage={skeeloMoc}
            rangeItems={skeeloRangeItems}
            epics={skeeloEpics}
            theme="skeelo"
        />
    );
}

export default Skeelo;
