import React, { useState, useContext } from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    RefreshControl
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeConText from '../../../config/themeConText';
import { LinearGradient } from 'expo-linear-gradient';
import {
    ListItem, Button,
    Dialog,
    CheckBox,
    Avatar,
} from '@rneui/themed';
// import Call API
import call from 'react-native-phone-call';
import { useEffect } from 'react';

const Phone = ({ navigation }) => {

    const theme = useContext(ThemeConText)

    const [inputValue, setInputValue] = useState('0589401978');
    const [isLoading, setIsLoading] = useState(true)

    const [taikhoan, setTaiKhoan] = useState([])
    const [orders, setOrders] = useState([])

    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )


    function triggerCall(number) {
        // Check for perfect 10 digit length
        if (inputValue.length != 10) {
            alert('Please insert correct contact number');
            return;
        }

        const args = {
            number: number,
            prompt: true,
        };
        // Make a call
        call(args).catch(console.error);
    };

    // useEffect(() => {
    //     fetch('http://192.168.0.113:4000' + '/api/customer_re/' + taikhoan)
    //         .then(res => res.json())
    //         .then(res => setOrders(res))
    //         .catch(err => console.log(err))
    //         .finally(() => {
    //             setIsLoading(false)
    //             // setReset(true);
    //             // setTimeout(() => {
    //             //     setReset(false);
    //             // }, 10);
    //         })
    // }, [taikhoan])


    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        // setTimeout(() => {
        //     fetch('http://192.168.0.113:4000' + '/api/customer_re/' + taikhoan)
        //         .then(res => res.json())
        //         .then(res => setOrders(res))
        //         .catch(err => console.log(err))
        //     setRefreshing(false);
        // }, 1000);
    }, [taikhoan]);

    const handerPhone = () => {
        triggerCall("0589401978")
    }

    const [visible1, setVisible1] = useState(false);

    const toggleDialog1 = () => {
        setVisible1(!visible1);
    };

    const handerChiTiet = () => {
        setVisible1(true)
    }

    return (


        <View
            style={{
                flex: 1,

            }}
        >
            <LinearGradient
                // Background Linear Gradient
                start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}
                colors={['#bf57f4', '#997af4', '#878bf5', '#7a84f3']}
                style={{
                    width: "100%",
                    height: 120,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}
            >
                <View style={{
                    height: 100,
                    justifyContent: 'center',
                    // marginBottom: 10,
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    zIndex: 100

                }}>
                    <Text style={{
                        fontSize: 30,
                        color: 'white',
                        textAlign: 'center',
                        marginTop: 40
                    }}>
                        Gọi Điện
                    </Text>
                </View>
            </LinearGradient>

            <View style={[styles.container, { backgroundColor: theme.maunen, height: 1000, marginTop: -20, zIndex: -100 }]}>
                <View style={{
                    flex: 1,
                }} >
                    <Text style={{
                        fontSize: 25,
                        padding: 20,
                        color: theme.color,
                        fontWeight: 'bold',
                        marginTop: 10
                    }}>
                        Phòng Điều Hành
                    </Text>
                    <View style={{

                    }}>
                        <ListItem.Swipeable

                            style={{
                                backgroundColor: theme.background
                            }}
                            leftWidth={80}
                            rightWidth={90}
                            minSlideWidth={40}
                            leftContent={(action) => (
                                <Button
                                    containerStyle={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        backgroundColor: '#499ceb',

                                    }}
                                    type="clear"
                                    icon={{
                                        name: 'archive-outline',
                                        type: 'material-community',
                                        color: theme.color,

                                    }}
                                    // onPress={action}
                                    onPress={handerChiTiet}
                                />
                            )}
                            rightContent={(action) => (
                                <Button
                                    containerStyle={{
                                        justifyContent: 'center',
                                        backgroundColor: '#35e84d',
                                        flex: 1

                                    }}
                                    type="clear"

                                    icon={{ name: 'phone', color: theme.color }}
                                    onPress={handerPhone}

                                />
                            )}
                        >
                            {/* <Icon name="label-important-outline" type="material" /> */}
                            <ListItem.Content style={{


                            }}>
                                <ListItem.Title style={{
                                }}>Phòng Điều Hành 1</ListItem.Title>
                                <ListItem.Subtitle style={{
                                }}>Hey, I'm John Doe</ListItem.Subtitle>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem.Swipeable>

                        <Dialog
                            isVisible={visible1}
                            onBackdropPress={toggleDialog1}
                        >
                            <Dialog.Title title="Phòng Điều Hành 1" />
                            <Text style={{
                                fontSize: 20,
                                marginTop: 4,
                                lineHeight: 40
                            }}>
                                Phòng Điều Hành 1

                            </Text>
                            <Text>
                                Hey, I'm John Doe
                            </Text>
                            <Text>
                                Số điện thoại: 0589401978
                            </Text>
                        </Dialog>
                    </View>

                    <ListItem.Swipeable
                        style={{
                            marginTop: 20
                        }}
                        leftWidth={80}
                        rightWidth={90}
                        minSlideWidth={40}
                        leftContent={(action) => (
                            <Button
                                containerStyle={{
                                    justifyContent: 'center',
                                    backgroundColor: '#499ceb',
                                    height: 70,
                                    marginTop: 20


                                }}
                                type="clear"
                                icon={{
                                    name: 'archive-outline',
                                    type: 'material-community',
                                    color: theme.color
                                }}
                                onPress={action}
                            />
                        )}
                        rightContent={(action) => (
                            <Button
                                containerStyle={{
                                    justifyContent: 'center',
                                    backgroundColor: '#35e84d',
                                    height: 70,
                                    marginTop: 20
                                }}
                                type="clear"
                                icon={{ name: 'phone', color: theme.color }}
                                onPress={action}
                            />
                        )}
                    >
                        {/* <Icon name="label-important-outline" type="material" /> */}
                        <ListItem.Content>
                            <ListItem.Title>Phòng Điều Hành 2</ListItem.Title>
                            <ListItem.Subtitle>Hey, I'm Quy</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem.Swipeable>

                    <ListItem.Swipeable
                        style={{
                            marginTop: 20
                        }}
                        leftWidth={80}
                        rightWidth={90}
                        minSlideWidth={40}
                        leftContent={(action) => (
                            <Button
                                containerStyle={{
                                    justifyContent: 'center',
                                    backgroundColor: '#499ceb',
                                    height: 70,
                                    marginTop: 20

                                }}
                                type="clear"
                                icon={{
                                    name: 'archive-outline',
                                    type: 'material-community',
                                    color: theme.color
                                }}
                                onPress={action}
                            />
                        )}
                        rightContent={(action) => (
                            <Button
                                containerStyle={{
                                    justifyContent: 'center',
                                    backgroundColor: '#35e84d',
                                    height: 70,
                                    marginTop: 20
                                }}
                                type="clear"
                                icon={{ name: 'phone', color: theme.color }}
                                onPress={action}
                            />
                        )}
                    >
                        {/* <Icon name="label-important-outline" type="material" /> */}
                        <ListItem.Content>
                            <ListItem.Title>Phòng Điều Hành 3</ListItem.Title>
                            <ListItem.Subtitle>Hey, I'm Cường</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem.Swipeable>

                </View>
            </View>
        </View>
    );
};

export default Phone;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 10,
        textAlign: 'center',
        marginTop: -10,
        zIndex: -1,
        backgroundColor: '#eeee'
    },
    titleText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    titleTextsmall: {
        marginVertical: 8,
        fontSize: 16,
    },
    buttonStyle: {
        justifyContent: 'center',
        marginTop: -15,
        padding: 10,
        width: 60,
        height: 60,
        borderRadius: 100
    },
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
    },
    textInput: {
        height: 60,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
        borderRadius: 7,
        fontSize: 24
    },
});