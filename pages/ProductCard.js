//import React form react
import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
//import styles fro your PokeCard component.
import styles from './styles';


//Define your stateless componetns, and destrcuts props from function arguments
const ProductCard = ({name,productImage, _id, navigation}) => {
    return (
        <TouchableOpacity style={{backgroundColor: 'transparent'}} onPress={() => 
        
        navigation.navigate('DetailScreen', {_id})}>
            <View  style={styles.listItemContainer}>
                <Text style={styles.pokeItemHeader}>{name}</Text>
                <Image source={{uri: 'https://javascriptapi.herokuapp.com/'+productImage}} 
                        style={styles.pokeImage}/>
            </View>
        </TouchableOpacity>
    )
}


export default ProductCard;