import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ProductList from './ProductList';
import Details from './Details';

const AppNavigator = StackNavigator({
  ProductListScreen: { screen: ProductList},
  DetailScreen: { screen: Details }
});

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}