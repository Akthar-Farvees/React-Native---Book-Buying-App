import { useState, useEffect, useRef } from "react";
import { View, Text , StyleSheet, Image,TouchableOpacity,Animated, SafeAreaView} from 'react-native';
import profile from '../../../assets/Image/profilePic.jpg'
import home from '../../../assets/home.png'
import search from '../../../assets/search.png'
import notification from '../../../assets/bell.png'
import setting from '../../../assets/settings.png'
import logout from '../../../assets/logout.png'
import menu from '../../../assets/menu.png'
import close from '../../../assets/close.png'
import photo from '../../../assets/photo.jpg'






const DrawerNavigationScreen = () => {
    const [currentTab, setcurrentTab] = useState("Profile");
    const [showMenu, setShowMenu] = useState(false);


    const offsetValue = useRef(new Animated.Value(0)).current;

    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(2)).current;

   
    return (
      <SafeAreaView style={style.Container}>
        <View style={{justifyContent: 'flex-start', paddingTop: 45, paddingLeft:20}}>
            <Image style={{
               width: 60,
               height:60,
               borderRadius:10, 
               marginTop: 10,
            }}
            source={profile}/>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color:  'white',
                    marginTop: 20,
                }}
            >
                Akthar Farvees
            </Text>

            <TouchableOpacity>
                <Text
                    style={{
                        marginTop:10,
                        color:'white',
                    }}
                >
                    View Profile
                </Text>
            </TouchableOpacity>

            <View style={{flexGrow: 0.95, marginTop: 40,}}>
                {
                    //Tab Bar Buttons
                }

                  {TabButton(currentTab, setcurrentTab,"Profile", home)}
                  {TabButton(currentTab, setcurrentTab,"Search", search)}
                  {TabButton(currentTab, setcurrentTab,"Notification", notification)}
                  {TabButton(currentTab, setcurrentTab,"Settings", setting)}
            </View>    
            <View>
               {TabButton(currentTab, setcurrentTab,"LogOut", logout)}
            </View>
        </View>

        {
                //owyefg
            }
            
            <Animated.View style={{
                flexGrow: 1,
                backgroundColor: 'white',
                position: 'absolute',
                top: 0,
                bottom:0, 
                left: 0,
                right: 0,
                paddingVertical: 10,
                paddingHorizontal:15,
                borderRadius: setShowMenu ?15 : 0,
                
                transform:[
                    {scale:scaleValue},
                    {translateX: offsetValue}
                ]

            }}>

                {
                    //liuugh
                }

                <Animated.View style={{
                    transform: [{
                        translateY: closeButtonOffset
                    }]
                }}>
                <TouchableOpacity onPress={()=> {
                    Animated.timing(scaleValue , {
                        toValue: showMenu ? 1 : 0.88,
                        duration: 300,
                        useNativeDriver: true
                    })
                    .start()

                    Animated.timing(offsetValue , {
                        toValue: showMenu ? 0 : 230,
                        duration: 300,
                        useNativeDriver: true
                    })
                    .start()

                    Animated.timing(closeButtonOffset , {
                        toValue: !showMenu ? -30 : 0,
                        duration: 300,
                        useNativeDriver: true
                    })
                    .start()

                    setShowMenu(!showMenu);
                }}>
                    <Image source={showMenu ? close : menu}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: 'black',
                            marginTop: 55,
                            
                        }}
                    ></Image>

                </TouchableOpacity>

                <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: 'black',
                        paddingTop: 20,
                    }}>{currentTab}</Text>

                    <Image source={profile}
                        style={{
                            width: '100%',
                            height: 400,
                            borderRadius: 15,
                        }}
                    ></Image>

                        <Text
                         style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            paddingTop: 15,
                            paddingBottom:5,
                        }}
                        >
                            Akthar Farvees
                        </Text>

                        <Text
                         style={{
                            fontWeight: '400',
                        }}
                        >
                            I'm Akthar Farvees
                            , I Studied At akkaraipattu muslim central college national school akkaraipattu
                            
                        </Text>

                        <Text
                         style={{
                            fontWeight: '400',
                        }}
                        >
                            I'm Akthar Farvees
                            studying bechelor of software engineer at 
                            Open usinversity of Sri Lanka,
                            
                        </Text>

                        <Text
                         style={{
                            fontWeight: '500',
                            paddingTop:2,
                        }}
                        >
                            The Skills :Java, Python, C++, C, MySql, JavaScript, React Native
                        </Text>

                        </Animated.View> 
                </Animated.View>
      </SafeAreaView>
    );
};

const TabButton = (currentTab, setcurrentTab, title, image) => {
    return(
        <TouchableOpacity onPress={() => {
            if (title == "LogOut"){
                
            }else{
                setcurrentTab(title)
            }
        }}>
                  <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 8,
                    backgroundColor: currentTab == title ? 'white' : 'transparent',
                    paddingLeft: 13,
                    paddingRight: 35,
                    borderRadius: 8,
                    marginTop:15,
                }}>

                    <Image source={image} style={{
                        width: 25, height: 25,
                        tintColor: currentTab == title ? '#535901' : 'white',
                    }}> 
                   </Image>

                    <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        paddingLeft: 15,
                        color: currentTab == title ? '#535901' : 'white',
                    }}>{title}</Text>

                </View>     
                  </TouchableOpacity>  
    );
}

const style = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#051C60',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

});

export default DrawerNavigationScreen;
