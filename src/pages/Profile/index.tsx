import React, { useState } from 'react'
import Footer from '../../components/footer';
import { StatusBar, Image, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

const Profile = () => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
};

  return (
    <>

      <ScrollView 
        style={{backgroundColor: '#fff'}}
        showsVerticalScrollIndicator={false}
      >
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={ pickImage }
        >
          {image === null ? 
            <Image style={{...styles.logo, borderColor: '#4169E1'}} source={require('../../assets/avatar.jpg')}/>: <Image  source={ {uri: image }} style={{...styles.logo,  borderColor: '#4169E1'}}/>
          }
        </TouchableOpacity>

      </View>
       

      </ScrollView>

      <StatusBar barStyle="dark-content" backgroundColor='#4169E1' translucent/>
      <Footer props={'#4169E1'}/>
    </>
  )
}



export default Profile;