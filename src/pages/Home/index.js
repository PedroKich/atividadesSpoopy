import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


import { useNavigation } from "@react-navigation/native";


export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.acessoAtividade}>
                <Text>Tela Home</Text>
                <TouchableOpacity title="Ir pra Sobre" onPress={() => navigation.navigate('Sobre')} 
                style={styles.botao}>
                    <Text style={styles.textoBotao}>Ir pra Sobre</Text>
                     </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6520e',
    },
    acessoAtividade:{
        height: 700,
        width: 350,
        backgroundColor: '#000000',
    },
    botao:{
        backgroundColor: '#881EE4',
    },
    textoBotao:{
        fontSize: 25,
        color: '#85E21F',
    },
})