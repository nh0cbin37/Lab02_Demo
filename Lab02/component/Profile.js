import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { fetchRandomContact } from '../utility/api'
import ContactThumbnail from './ContactThumnail'
import ContactThumnailDetail from './contactThumnailDetail'

const Profile = () => {

    const [contact, setcontact] = useState({})
    useEffect(() => {
        fetchRandomContact().then(
            contact => setcontact(contact)
        )
    }, [])
    const {avatar, name, email, phone, cell} = contact;

  return (
    <View style={styles.container}>
        <View style={styles.avatarSection}>
            <ContactThumbnail avatar={avatar} name={name} phone = {phone}/>
        </View>
        <View style={styles.detailsSection}>
            <ContactThumnailDetail icon="mail" title="Email" suititle={email}/>
            <ContactThumnailDetail icon="phone" title="work" suititle={phone}/>
            <ContactThumnailDetail icon="smartphone" title="Personal" suititle={cell}/>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:
    {
        flex:1
    },
    avatarSection:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'blue'
    },
    detailsSection : {
        flex:1,
        backgroundColor:'white',
    }
})
export default Profile