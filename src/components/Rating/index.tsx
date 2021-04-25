import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Reating = () => {
    const [ maxReating, setMaxReating ] = useState<number[]>([1,2,3, 4]);
    const [ defaultRating, setDefaultRating ] = useState<number>(0);

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
                        <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => controlRating(item)}
                        >
                            <Image source={
                                item <= defaultRating
                                    ? require('../../assets/rating/star_filled.png')
                                    : require('../../assets/rating/star_corner.png')
                            }/>

                        </TouchableOpacity>
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
        padding: 24,
    },
    starImgStyle: {
        borderColor: 'red',
        borderWidth: 10,
        width: 10,
        height: 10,
        resizeMode: 'cover'
    }
});

export default Reating;