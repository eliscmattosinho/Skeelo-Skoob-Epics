import { useEffect, useState } from 'react';

export function useEpicDetails() {
    const [epicData, setEpicData] = useState(null);

    useEffect(() => {
        fetch('/epics.json')
            .then((response) => response.json())
            .then((data) => {
                if (data?.Skeelo?.epicos?.length > 0) {
                    const primeiroEpico = data.Skeelo.epicos[0];

                    const dadosTratados = {
                        identificador: primeiroEpico.identificador || "Sem identificador",
                        titulo_epico: primeiroEpico.titulo_epico || "Título não disponível",
                        contexto: primeiroEpico.contexto || "Contexto não disponível",
                        historias_de_usuario: tratarHistorias(primeiroEpico.historias_de_usuario),
                        criterios_de_aceitacao: primeiroEpico.criterios_de_aceitacao || [],
                        definicao_de_pronto: primeiroEpico.definicao_de_pronto || [],
                        metricas: primeiroEpico.metricas || []
                    };

                    setEpicData(dadosTratados);
                } else {
                    setEpicData({
                        identificador: "Sem identificador",
                        titulo_epico: "Título não disponível",
                        contexto: "Contexto não disponível",
                        historias_de_usuario: [],
                        criterios_de_aceitacao: [],
                        definicao_de_pronto: [],
                        metricas: []
                    });
                }
            })
            .catch((error) => {
                console.error('Erro ao carregar dados:', error);
                setEpicData({
                    identificador: "Erro",
                    titulo_epico: "Erro ao carregar os dados",
                    contexto: "Não foi possível obter as informações.",
                    historias_de_usuario: [],
                    criterios_de_aceitacao: [],
                    definicao_de_pronto: [],
                    metricas: []
                });
            });
    }, []);

    return epicData;
}

function tratarHistorias(historias) {
    if (!historias || !Array.isArray(historias)) {
        return [];
    }

    return historias.flatMap(historia => {
        const chave = Object.keys(historia)[0]; //pega a primeira
        return historia[chave]?.map(us => ({
            titulo: us.titulo || "Título não disponível",
            numero: us.numero || "-",
            user_storie: us.user_storie || "Sem descrição",
            criterios_de_aceitacao: us.criterios_de_aceitacao || []
        })) || [];
    });
}
