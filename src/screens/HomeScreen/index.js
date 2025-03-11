import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput, Dimensions,FlatList,Image,TouchableOpacity} from 'react-native'
import {Entypo , EvilIcons, MaterialCommunityIcons, MaterialIcons   } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Books from '../../Books/Books'
import Navigation from '../../Navigation'

const width = Dimensions.get('screen').width/2-30;


const HomeScreen = ({navigation}) => {

    const categories = ['PROGRAMMING', 'CLASSIC' , 'BIOGRAPIES' , 'HORROR'];

    const [categoryIndex, setcategoryIndex] = React.useState(0)

    const CategoriesList = () => {
        return   (
         <View style={style.categoryContainer}>
            {categories.map((item, index) => (
                <TouchableOpacity  
                    activeOpacity={0.8}
                    key={index} 
                    onPress={()=>setcategoryIndex(index)}> 
                     <Text 
                       
                        style={[
                            style.categoryText, 
                            categoryIndex == index  && style.categoryTextSelected
                     ]}>

                         {item}
                    
                    </Text>
                </TouchableOpacity>
               
            ))}
        </View>
        );
    };


    const Card = ({Books}) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate("DetailsScreen",Books)}>
                 <View style={style.card}>
            <View style={{alignItems: 'flex-end'}}>
                <View style={{
                    width:30, 
                    height:30, 
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: Books.like 
                    ? 'rgba(245,42,42,0.2)'
                    : 'rgba(0,0,0,0.2)'   
                }}>
                    <MaterialIcons 
                        name="favorite" 
                        size={22} color={Books.like ? '#F52A2A' : 'black'} 
                    />
                </View>
            </View>

            <View style={{height:100, alignItems: 'center'}}>
                    <Image style={{flex: 1, resizeMode:'contain' }} source={Books.image}/>   
            </View>
            <Text style={{
                fontWeight: 'bold', 
                fontSize: 17, 
                marginTop: 10, 
            }}>

                {Books.name}

            </Text>
            <View style={{
                flexDirection:"row", 
                justifyContent: "space-between", 
                marginTop: 5,
                        }}>    
                <Text style={{fontSize: 19, fontWeight: 'bold'}}>${Books.price}</Text>
                <View 
                    style={{
                        height: 25,
                        width:25,
                        backgroundColor: '#051C60',
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                        <Entypo name="plus" size={22} color="white"/>
                </View>
            </View>
        </View>
            </TouchableOpacity>
           
        );
    };


    return (
        <SafeAreaView 
          style={{
              flex: 1,
              paddingHorizontal: 20,
              backgroundColor: 'white',
          }}>

              <View style={style.header}>
                  <View>
                      <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to</Text>
                      <Text style={{fontSize: 38, fontWeight: 'bold', color: '#051C60'}}>E-Book Shop</Text>
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate("Draw")}>
                  <MaterialIcons name="account-circle" size={24} color="black" />
                  {/* <Entypo name="shopping-cart" size={24} color="black" /> */}
                  </TouchableOpacity>
              </View>

              <View style={{marginTop: 30, flexDirection: 'row'}}>
                  <View style={style.searchContainer}>
                    <EvilIcons  
                        name="search" 
                        size={25} 
                        color="#051C60" 
                        style={{
                            marginLeft:20,
                              }}
                    />
                    <TextInput 
                      placeholder='Search'
                      style={style.input}
                    />
                  </View> 

                   <View style={style.sortBtn}>
                   <MaterialCommunityIcons name="sort-variant" size={30} color="white" />
                   </View>
              </View>

              <CategoriesList/>

            {/* Books Category */}
              <FlatList 
                 columnWrapperStyle={{justifyContent: 'space-between'}}
                 showsVerticalScrollIndicator={false}
                 contentContainerStyle={{
                     margin:2,
                     paddingBottom:50,


                 }}
                 numColumns={2}
                 data={Books} 
                 renderItem={({item}) =>  <Card Books={item}/>}/>

        </SafeAreaView>
    );

};


const style = StyleSheet.create({
    header: {
        marginTop: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
       
    },

    searchContainer: {
        height: 50,
        backgroundColor: '#f1f2f6',
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    input: {
        fontSize: 18,
        fontWeight: '400',
        color: '#545454',
    },

    sortBtn: {
        marginLeft:10,
        height:50,
        width:50,
        backgroundColor: '#051C60',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between',
    },

    categoryText: {
        fontSize: 16,
        color: 'gray',
        fontWeight: '600',
    },

    categoryTextSelected: {
        color: '#051C60',
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: "#051C60",
    },

    card: {
        height: 225,
        backgroundColor: '#f5f6fa',
        width,
       
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom:20,
        padding: 15,
       
        
    },

});


export default HomeScreen