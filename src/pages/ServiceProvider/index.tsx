import { useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import FlatListServiceProvider from '../../components/flatListServiceProvider';
import Footer from '../../components/footer';
import { IPropUseRoute, IServiceProvider } from '../../interfaces';

const PageServiceProvider = () => {
    const route = useRoute<IPropUseRoute<{footerColor: string}>>();
    const [serviceProvider, setServiceProvider] = useState<IServiceProvider[]>([]);
    useEffect(() => {
        getServiceProvider();
    }, []);
    function getServiceProvider() {
        setServiceProvider([
            {
                id: '1',
                name: 'Matheus Fernando',
                image: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg',
                time_experience: 1,
                numberRating: 5
            },
            {
                id: '2',
                name: 'Henrique Lopes',
                image: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg',
                time_experience: 0.2,
                numberRating: 4
            },
            {
                id: '3',
                name: 'Vinicius Henrard',
                image: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg',
                time_experience: 2,
                numberRating: 4
            },
            {
                id: '4',
                name: 'Matheus Fernando',
                image: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg',
                time_experience: 2,
                numberRating: 3
            },
            {
                id: '5',
                name: 'Matheus Fernando',
                image: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg',
                time_experience: 2,
                numberRating: 1
            }
        ])
    }
    
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={route.params.footerColor} translucent/>
            <FlatListServiceProvider props={{serviceProvider, color: route.params.footerColor}}/>
            <Footer props={route.params.footerColor}/>
        </>
    )
}

export default PageServiceProvider;