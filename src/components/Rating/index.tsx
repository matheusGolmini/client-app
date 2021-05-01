import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Reating(props: {value: boolean}) {
    const [ maxReating, setMaxReating ] = useState<number[]>([1,2,3,4]);
    const [ defaultRating, setDefaultRating ] = useState<number>(0);

    if(!props.value) {
        useEffect(() => {
            //buscar o nivel do profissional;
            setDefaultRating(2);
        }, []);
    }
    
    function controlRating(num: number) {
        if(num === defaultRating) {
            setDefaultRating(defaultRating - 1)
        }else {
            setDefaultRating(num)
        }
    }

    return (
        <View style={styles.customRatingBarStyle}>
            {
                maxReating.map((item, key) => {
                    return(
                        props.value 
                        ? <TouchableOpacity
                            activeOpacity={0.7}
                            key={key}
                            onPress={() => controlRating(item)}
                        >
                            <Image source={
                                item <= defaultRating
                                    ? require('../../assets/rating/star_filled.png')
                                    : require('../../assets/rating/star_corner.png')
                            }/>

                        </TouchableOpacity>

                        : <Image 
                            key={key}
                            source={
                            item <= defaultRating
                                ? require('../../assets/rating/star_filled.png')
                                : require('../../assets/rating/star_corner.png')
                        }/>
                    )
                })
            }
        </View>
    )
}

const styles =  StyleSheet.create({
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
        marginVertical: 10,
    },
    starImgStyle: {
        borderColor: 'red',
        borderWidth: 10,
        width: 10,
        height: 10,
        resizeMode: 'cover'
    }
});
