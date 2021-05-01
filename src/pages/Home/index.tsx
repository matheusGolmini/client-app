import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer';
import FlatListSkills from '../../components/flatListSkills';
import { ISkills } from '../../interfaces';
import { StatusBar } from 'react-native';

const Home = () => {
    const [skills, setSkills] = useState<ISkills[]>([]);
    useEffect(() => {
        getSKills();
    }, []);

    function getSKills() {
        setSkills([
            {
                id: 1,
                title: 'Pintor',
                description: 'Ache o pintor certo',
                image: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg',
                color: '#00BFFF',
            },
            {
                id: 2,
                title: 'Pedreiro',
                description: 'Ache o pedreiro certo',
                image: 'https://static9.depositphotos.com/1426074/1172/v/600/depositphotos_11729249-stock-illustration-young-mason-with-trowel.jpg',
                color: '#FF8C00',
            },
            {
                id: 3,
                title: 'Encanador',
                description: 'Ache o encanador certo',
                image: 'https://image.freepik.com/vetores-gratis/mascote-de-canalizador-personagem-de-encanador-desenho-animado-de-trabalhadores_7450-376.jpg',
                color: '#FF0000',
            },
            {
                id: 4,
                title: 'Eletricista',
                description: 'Ache o eletricista certo',
                image: 'https://image.freepik.com/vetores-gratis/eletricista-trabalhando-no-poste-de-energia-eletrica_107173-17176.jpg',
                color: '#FFD700',
            }
        ])
    }

    if(!!skills.length){
        return (
            <>
                <StatusBar barStyle="dark-content" backgroundColor='#778899' translucent/>
                <FlatListSkills props={skills}/>
                <Footer props={null}/>
            </>
        )

    }else {
        return (
            <>
                <Footer props={null}/>
            </>
        )
    }
}


export default Home;