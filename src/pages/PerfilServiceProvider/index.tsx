import { useRoute } from '@react-navigation/core';
import React from 'react';
import Footer from '../../components/footer';
import { PropUseRoute } from '../../interfaces';


const PerfilServiceProvider = () => {
    const route = useRoute<PropUseRoute<{footerColor: string}>>();

    return (
        <>
            <Footer props={route.params.footerColor}/>
        </>
    )
}

export default PerfilServiceProvider;