// lp-skeelo-skoob\src\js\EpicDetails.js
import { useEffect, useState } from 'react';

export function useEpicDetails(productName) {
    const [epicData, setEpicData] = useState([]);

    useEffect(() => {
        fetch('/epics.json')
            .then((response) => response.json())
            .then((data) => {
                const product = data[productName];

                if (product?.epicos?.length > 0) {
                    const dadosTratados = product.epicos.map(epico => ({
                        identificador: epico.identificador || "Sem identificador",
                        titulo_epico: epico.titulo_epico || "Título não disponível",
                        contexto: epico.contexto || "Contexto não disponível",
                        historias_de_usuario: tratarHistorias(epico.historias_de_usuario),
                        criterios_de_aceitacao: epico.criterios_de_aceitacao || [],
                        definicao_de_pronto: epico.definicao_de_pronto || [],
                        metricas: epico.metricas || []
                    }));

                    setEpicData(dadosTratados);
                } else {
                    setEpicData([{
                        identificador: "Sem identificador",
                        titulo_epico: "Título não disponível",
                        contexto: "Contexto não disponível",
                        historias_de_usuario: [],
                        criterios_de_aceitacao: [],
                        definicao_de_pronto: [],
                        metricas: []
                    }]);
                }
            })
            .catch((error) => {
                console.error('Erro ao carregar dados:', error);
                setEpicData([{
                    identificador: "Erro",
                    titulo_epico: "Erro ao carregar os dados",
                    contexto: "Não foi possível obter as informações.",
                    historias_de_usuario: [],
                    criterios_de_aceitacao: [],
                    definicao_de_pronto: [],
                    metricas: []
                }]);
            });
    }, [productName]);

    return epicData;
}

function tratarHistorias(historias) {
    if (!historias || !Array.isArray(historias)) {
        return [];
    }

    const historiasTratadas = [];

    historias.forEach(historia => {
        Object.keys(historia).forEach(chave => {
            const historiasDaChave = historia[chave];

            if (Array.isArray(historiasDaChave)) {
                historiasDaChave.forEach(us => {
                    historiasTratadas.push({
                        titulo: us.titulo || "Título não disponível",
                        numero: us.numero || "-",
                        user_storie: us.user_storie || "Sem descrição",
                        criterios_de_aceitacao: us.criterios_de_aceitacao || []
                    });
                });
            }
        });
    });

    return historiasTratadas;
}
