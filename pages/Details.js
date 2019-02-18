import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Text,StyleSheet, View ,Image, FlatList, Share,SafeAreaView, Linking} from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';


import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './detailstyle';





class Details extends Component {
      constructor(props) {
    super(props);
    this.state = {
	isLoading :true,
    name: '',
    image:'',
    data:[],
    interval: null,
    description:'',
    price:'',
    color:'',


    };
  }
    // Setting up profile activity title.
 static navigationOptions= ({navigation}) =>({
      title: `PRODUCT DETAILS `,


 });





  	fetchData = async() =>{
		const { params } = this.props.navigation.state;
		const response =  await fetch("https://javascriptapi.herokuapp.com/product/" +params._id);

		const Product = await response.json(); // Ads have array data

       // this.setState({data: Product});
       console.log(Product);
       console.log("https://javascriptapi.herokuapp.com/product/" +params._id);
       
        
        this.setState({
            name: Product.name,
            price: Product.price,
            description: Product.description,
            color: Product.color,
            image: Product.productImage,
        });





	};
	componentDidMount(){
		this.fetchData();

	}
    componentWillMount() {
      this.setState({interval: setInterval(() => {
     
        }, 5000)});
    }
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }


  renderHeader=() =>{
    return <View style={{borderBottomColor:"green", borderBottomWidth:1, margin:20}}>
    <Text style={{color:'#000', fontWeight:'bold', fontFamily:'vardana', fontSize:20}}>Similar Ads</Text>
    </View>


  }
  numberComma=(x)=>{
		var parts = x.toString().split(".");
		parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,  ",");
		return parts.join(".");
	}
  callSeller=(p)=>{
    Linking.openURL('tel:'+p);
  }
  	  onLearnMore = (item) => {
    this.props.navigation.navigate('Detail', { ...item });
  };
  render() {
      const { params } = this.props.navigation.state;

    return (
        <View>
  
  <Image source={{uri: 'https://javascriptapi.herokuapp.com/'+this.state.image}}
                        style={styles.pokemonImage} />
        <Text style={styles.proditem}>Name: {this.state.name}</Text>
        <Text style={styles.proditem}>Price: {this.numberComma(this.state.price)}</Text>
        <Text style={styles.proditem}>Color: {this.state.color}</Text>
        <Text style={styles.proditem}>Description: {this.state.description}</Text>
        
    </View>






     

 
    );
  }
}



export default Details;
