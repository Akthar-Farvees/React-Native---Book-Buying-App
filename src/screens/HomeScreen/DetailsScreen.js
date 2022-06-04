import React from 'react';
import { View, Text, SafeAreaView, StyleSheet , Image} from 'react-native';
import { Ionicons,Entypo } from '@expo/vector-icons'; 


const DetailsScreen = ({navigation, route}) => {

  const Books =route.params;
  

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white', }}>
        <View style={styles.header}>
        <Ionicons name="arrow-back" size={28} color="black" onPress={() => navigation.goBack()}/>
        <Entypo name="shopping-cart" size={24} color="black"/>
        </View>
        <View style={styles.imageContainer}>
          <Image source={Books.image} style={{resizeMode: 'contain', flex: 1}}/>
        </View>
        <View style={styles.detailsContainer}>
          <View
          style={{
            marginLeft: 20,
            flexDirection:'row',
            alignItems:'flex-end'
          }}
          >
          <View style={styles.line}/>
          <Text style={{fontSize: 18, fontWeight:'bold'}}>Best Choice</Text> 
          </View> 
          <View style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center' 
          }}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>{Books.name}</Text>
          <View style={styles.priceTag}>
            <Text style={{
              marginLeft: 15, 
              color:'white',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
              ${Books.price}
            </Text>
          </View>
          </View> 
          <View style={{paddingHorizontal: 20, marginTop: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>

            <Text style={{
               color: 'black',
               fontSize: 16,
               textAlign:  'right',
               }}><Text style={{fontSize:16, fontWeight: 'bold'}}>Author: </Text>{Books.aurthor}</Text>

            <Text style={{
               color: 'grey',
               fontSize: 16,
               lineHeight: 22,
               marginTop: 10, 
            }}>
              {Books.about}
            </Text>

            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.borderBtn}>
                  <Entypo style={styles.borderBtnText} name="minus" size={24} color="black" />
                </View>
                <Text style={{fontSize: 20, marginHorizontal: 10, fontWeight: 'bold',}}>1</Text>
                <View style={styles.borderBtn}>
                  <Entypo style={styles.borderBtnText} name="plus" size={24} color="black" />
                </View>
                </View>
                <View style={styles.buyBtn}>
                  <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Buy</Text>
                </View>
            </View>
          </View>
          </View>
      </SafeAreaView>
    );
  }


 const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  detailsContainer: {
    flex: 0.55,
    backgroundColor: '#F1F1F1',
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30
  },

  line: {
    width:  25,
    height: 2,
    backgroundColor: 'black',
    marginBottom: 5,
    marginRight: 3,
  },

  priceTag: {
    backgroundColor: '#051C60',
    width: 80,
    height: 40,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: 'center',
  },

  borderBtn:{
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  borderBtnText: {
    fontWeight: 'bold',
  },

  buyBtn: {
    width: 150,
    height: 50,
    backgroundColor:'#051C60',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },

 });


export default DetailsScreen;
