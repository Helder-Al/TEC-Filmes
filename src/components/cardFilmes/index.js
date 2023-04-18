import React from "react";
import {Image, Text, TouchableOpacity} from 'react-native'

export default function CardFilmes(){
    return(
        
        <TouchableOpacity>
            <Image source ={require('../../Img/1.jpg')}/>
            <Text>Patrulha Canina</Text>
            <Text>10.0</Text>
        </TouchableOpacity>

    );
}