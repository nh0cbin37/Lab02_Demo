import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types'
//Looi ICon
export default contactThumnailDetail = ({icon,title,suititle}) => {
  return (
    <View style= {styles.bodercontainer}>
      <View style= {styles.wrapper}>
        <View style= {styles.container}>
          {icon && (
            <Icon name={icon} size={16} style={{color: 'black',marginRight:20}}/>
          )}
          <View style= {styles.contentContainer}>
            <Text style= {styles.title}>{title}</Text>
            {suititle && <Text style= {styles.subtitle}>{suititle}</Text>}
          </View>
        </View>
      </View>
    </View>

  )
}
contactThumnailDetail.prototype = {
  icon: PropTypes.string,
  title: PropTypes.string,
  suititle:PropTypes.string,
};

const styles = StyleSheet.create({
  bodercontainer:
  {
    paddingLeft:24
  },
  wrapper: {
    flexDirection:'row',
    paddingTop: 16,
    paddingBottom:16,
    paddingRight: 24,
    borderBottomColor:'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  contentContainer:{
    justifyContent:'center',
    flex:1
  },
  title:
  {
    color:'black',
    fontWeight:'bold',
    fontSize:16
  },
  subtitle:{
    color:'blue',
    fontSize:15,
    marginTop:4
  }
})
