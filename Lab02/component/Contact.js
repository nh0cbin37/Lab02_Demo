import React, { useEffect, useState } from 'react'
import { fectContachs } from '../utility/api';
import ContactListItem from './ContactListItem';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';


const KeyExtractor = ({ phone }) => phone;
const Contact = () => {
  
    const [contacts, setcontacts] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(false);

    //load du lieu

    useEffect(() => {
      fectContachs()
      .then(
        contacts=> {
            setcontacts(contacts);
            setloading(false);
            seterror(false);
        }
      ).catch(
        e => {
                console.log(e);
                setloading(false);
                seterror(true);
             }
      )
    }, [])

    ///sort
    const contactsSorted = contacts.sort((a,b) => a.name.localeCompare(b.name)); // so sanh chu cai
    const renderContact  = ({item}) =>
    {
        const {name,avatar,phone} = item;
        return <ContactListItem
                name={name}
                avatar={avatar}
                phone={phone}
                onpress={()=>{}}/>
    }
    
    //render ra list
     return(
        <View  style={styles.container}>
            {loading && <ActivityIndicator color={'blue'} size='large' />}
            {error && <Text>Error...</Text>}
            {!loading && !error && (
                <FlatList
                    data={contactsSorted}
                    keyExtractor={KeyExtractor}
                    renderItem={renderContact}
                />
            )}
        </View>
     )


}


const styles = StyleSheet.create({
    container:
    {
        flex:1,
        backgroundColor:'white',
        justifyContent:'center'
    }
})
export default Contact