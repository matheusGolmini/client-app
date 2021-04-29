import React from 'react';
import { View, StyleSheet, Dimensions, FlatList, Animated } from 'react-native';
import { IServicesImages } from '../../interfaces/servicesImges';
import CarouselItem from './carouselItem';


const { width } = Dimensions.get('window');


const Carousel = (data: {services: IServicesImages[] }) => {
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)

    if (data && data.services.length) {
        return (
            <View>
                <FlatList data={data.services}
                ref = {(flatList) => {flatList = flatList}}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <CarouselItem item={item} />
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        {useNativeDriver: false}
                    )}
                />

                <View style={styles.dotView}>
                    {data.services.map((_: IServicesImages, i: number) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={{ opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5 }}
                            />
                        )
                    })}
                </View>
            </View>
        )
    }
    return null
}

const styles = StyleSheet.create({
    dotView: { flexDirection: 'row', justifyContent: 'center' }
})

export default Carousel