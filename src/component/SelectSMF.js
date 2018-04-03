import React, { Component } from 'react';
import { 
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Firebase from 'firebase';

class SelectSMF extends Component {
    constructor(props) {
        super(props);
        this.temp = Firebase.database().ref().child('Temp');
        this.moist = Firebase.database().ref().child('moist');
        this.state = {
            temp : '',
            moist : '',
            
            
        };
        // this.checkEmailReg = this.checkEmailReg.bind(this);
        
    }
    componentDidMount(){
        this.temp.on('value',snap => {
            this.setState({ 
                temp : snap.val()
            });
        });
        this.moist.on('value',snap => {
            this.setState({ 
                moist : snap.val() 
            });
        });
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    Show the status of your farm.
                </Text>
                
                <Text style={styles.Text}>
                    Temp : {this.state.temp}°C
                </Text>

                <Text style={styles.Text}>
                    Moist : {this.state.moist}%
                </Text>
    
            </View>
            
        );
    }



} export default SelectSMF

const styles = StyleSheet.create({
    container: {
        backgroundColor : '#32cd32' ,
        justifyContent : 'center', 
        alignItems : 'center',
        flex : 1
    },
    Text: {
        fontSize : 20,
        marginVertical : 25,
        fontWeight : '500',
        color : 'white',
        padding : 10,
        backgroundColor : '#874514'
    },
    TextInput: {
        marginVertical : 25,
        backgroundColor : '#4682B4',
        borderRadius : 30,
        width : 220,
        height : 60,
        alignItems : 'center',
        justifyContent : 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color : '#F5FFFA',
    },
});
