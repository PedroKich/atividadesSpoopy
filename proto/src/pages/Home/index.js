import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";


import { useNavigation } from "@react-navigation/native";


export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.acessoAtividade}>

                <View style={styles.viewTexto}>

                    <View style={styles.viewBotao}>
                        <Text style={styles.textoBotao}>Calculadora de IMC</Text>
                        <TouchableOpacity
                            title="Ir pra Sobre" onPress={() => navigation.navigate('Sobre')} style={styles.botao}>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewBotao}>
                        <Text style={styles.textoBotao}>Calculadora de Gorjeta</Text>
                        <TouchableOpacity
                            title="Ir pra Sobre" onPress={() => navigation.navigate('Sobre')} style={styles.botao}>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewBotao}>
                        <Text style={styles.textoBotao}>Agenda secreta de Compromissos</Text>
                        <TouchableOpacity
                            title="Ir pra Sobre" onPress={() => navigation.navigate('Sobre')} style={styles.botao}>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewBotao}>
                        <Text style={styles.textoBotao}>Conversor de Temperatura</Text>
                        <TouchableOpacity
                            title="Ir pra Sobre" onPress={() => navigation.navigate('Sobre')} style={styles.botao}>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewBotao}>
                        <Text style={styles.textoBotao}>Conversor de Unidades</Text>
                        <TouchableOpacity
                            title="Ir pra Sobre" onPress={() => navigation.navigate('Sobre')} style={styles.botao}>
                        </TouchableOpacity>
                    </View>

                </View>

                <Image 
                source={require('../images/face.png')} 
                style={styles.lilGuy}
                />

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
        maxHeight: 700,
        height: 700,
        maxWidth: 380,
        width: 380,
        backgroundColor: '#000000',
       
       
    },
    botao:{
        backgroundColor: '#881EE4',
        borderWidth: 3,
        borderColor: '#FF9A00',
        width: 40,
        height: 35,
    },
    textoBotao:{
        fontSize: 18,
        color: '#85E21F',
        fontWeight: '500',
    },
    viewTexto:{
        flex: 1,
        width: 'auto',
        justifyContent: 'space-around',
    },
    viewBotao:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 3,
        borderBottomColor: '#F75F1C',
    },
    lilGuy:{
        height: 90,
        width: 65,
        opacity: 0.6,
    },
})