import { useRoute } from '@react-navigation/core';
import React from 'react';
import Footer from '../../components/footer';

interface router {
    params : { footerColor: string}
    key: string;
    name: string
}

const PerfilServiceProvider = () => {
    const route = useRoute<router>();

    return (
        <>
            <Footer props={route.params.footerColor}/>
        </>
    )
}

export default PerfilServiceProvider;