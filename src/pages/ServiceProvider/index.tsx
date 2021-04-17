import { useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import FlatListServiceProvider from '../../components/flatListServiceProvider';
import Footer from '../../components/footer';
import { PropUseRoute, ServiceProvider } from '../../interfaces';

const PageServiceProvider = () => {
    const route = useRoute<PropUseRoute<{footerColor: string}>>();
    const [serviceProvider, setServiceProvider] = useState<ServiceProvider[]>([]);
    useEffect(() => {
        getServiceProvider();
    }, []);
    function getServiceProvider() {
        setServiceProvider([
            {
                id: '1',
                name: 'Matheus Fernando',
                image: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg',
                time_experience: 1
            },
            {
                id: '2',
                name: 'Henrique Lopes',
                image: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg',
                time_experience: 0.2
            },
            {
                id: '3',
                name: 'Vinicius Henrard',
                image: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg',
                time_experience: 2
            },
            {
                id: '4',
                name: 'Matheus Fernando',
                image: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg',
                time_experience: 2
            },
            {
                id: '5',
                name: 'Matheus Fernando',
                image: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg',
                time_experience: 2
            }
        ])
    }
    
    return (
        <>
            <FlatListServiceProvider props={{serviceProvider, color: route.params.footerColor}}/>
            <Footer props={route.params.footerColor}/>
        </>
    )
}

export default PageServiceProvider;