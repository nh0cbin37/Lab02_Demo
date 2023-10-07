import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'
const ContactListItem = ({name,avatar,phone,onpress}) => {

  return (
        <TouchableHighlight
            underlayColor={'grey'}
            style={styles.container}
            onpress={onpress}
        >
            <View style={styles.contacInfo}>
                <Image
                style={styles.avatar}
                source={{uri:avatar}}/>
                <View style={styles.Info}>
                    <Text style={{fontSize:16,color:'black',fontWeight:'bold'}}>{name}</Text>
                    <Text style={{fontSize:15,marginTop:5}}>{phone}</Text>
                </View>
            </View>
        </TouchableHighlight>
  )
}
ContactListItem.prototype = {
    name : PropTypes.string,
    avatar : PropTypes.string,
    phone : PropTypes.string,
    onpress : PropTypes.func,

} 

const styles = StyleSheet.create({
    container:
    {
        paddingLeft:20
    },
    contacInfo:
    {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingTop:16,
        paddingBottom:16,
        paddingRight:24,
        borderBottomColorL:'grey',
        borderBottomWidth:StyleSheet.hairlineWidth

    },
    avatar:
    {
        borderRadius:22,
        width:44,
        height:44
    },
    Info:
    {
        justifyContent:'center',
        marginLeft:20
    }
})
export default ContactListItem