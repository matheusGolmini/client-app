import React, { useState, useEffect } from 'react'
import Footer from '../../components/footer';
import { StatusBar, Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles';
import { IClient } from '../../interfaces/client';
import { useNavigation } from '@react-navigation/core';
import CreateTicket from '../../components/createTicket';

const Profile = () => {
  const [image, setImage] = useState<string | null>(null);
  const [client, setClient] = useState<IClient>();
  const [controlPicker, setControlPicker] = useState<boolean>(false);

  const navigation = useNavigation();

  useEffect(() => {
    //buscar os dados no bacno
    setClient({
      email: 'matheus@gmail.com',
      id: '1231213',
      name: 'Matheus',
      phone: '41 997628216',
      avatar: '../../assets/avatar.jpg'
    })
  }, []);

  function goTo(screenName: string){
    navigation.navigate(screenName);
  }
  

  return (
    <>
      <ScrollView 
        style={{backgroundColor: '#fff'}}
        showsVerticalScrollIndicator={false}
      >
      <View style={styles.container}>
        <View style={{flexDirection: 'row', marginTop: 50, alignItems: 'center', margin: 20}}>
          <Image style={styles.logo} source={require('../../assets/avatar.jpg')}/>
          <View style={{marginLeft: 5}}>
            <Text style={styles.text}>{client?.name}</Text>
          </View>

          <TouchableOpacity
            onPress={() => goTo('ProfileEdit')}
          >
            <View style={{paddingHorizontal: 80}}>
              <Icon name='account-edit' size={30}style={{color: '#696969'}}/>
            </View>
          </TouchableOpacity>
          
        </View>
        
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name='email' size={30} style={{color: '#4169E1'}}/>
            <Text style={{...styles.text, fontSize: 20, marginLeft: 20}}>{client?.email}</Text>
          </View>

          <View style={styles.row}>
            <Icon name='phone' size={30} style={{color: '#4169E1'}}/>
            <Text style={{...styles.text, fontSize: 20, marginLeft: 20}}>{client?.phone}</Text>
          </View>

        </View>

        <View style={styles.infoBoxWrapper}>
          <View style={{
            ...styles.infoBox,
            borderRightColor: '#4169E1',
            borderRightWidth: 3
            
          }}>
            <Text style={{...styles.text, fontSize: 20}}> 0 </Text>
            <Text style={{...styles.text, fontSize: 13, color:'#708090'}}> Servi??os em aprova????o </Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={{...styles.text, fontSize: 20}}> 20 </Text>
            <Text style={{...styles.text, fontSize: 13, color:'#708090'}}> Servi??os finalizados </Text>
          </View>

        </View>

        <View style={styles.menuWrapper}>
          <TouchableOpacity
            onPress={() => goTo('ProfileEditEmail')}
          >
            <View style={styles.menuItem}>
              <Icon name='email' size={30}style={{color: '#FF0000'}}/>
              <Text style={{...styles.menuItemText}}> Alterar E-mail </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => goTo('ProfileEditPassword')}
          >
            <View style={styles.menuItem}>
              <Icon name='key' size={30}style={{color: '#FF0000'}}/>
              <Text style={{...styles.menuItemText}}> Alterar Senha </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setControlPicker(!controlPicker);
            }}>
            <View style={styles.menuItem}>
              <Icon name='account-check-outline' size={30}style={{color: '#FF0000'}}/>
              <Text style={{...styles.menuItemText}}> Ajuda </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => goTo('ProfileEditAddress')}
          >
            <View style={styles.menuItem}>
              <Icon name='home' size={30}style={{color: '#FF0000'}}/>
              <Text style={{...styles.menuItemText}}> Alterar Endere??o </Text>
            </View>
          </TouchableOpacity>
          {
            controlPicker ? 
            <CreateTicket/>
            : <></>
          }
        </View>
        
        
        
       
      </View>
      </ScrollView>

      <StatusBar barStyle="dark-content" backgroundColor='#4169E1' translucent/>
      <Footer props={'#4169E1'}/>
    </>
  )
}



export default Profile;