import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, Image, ScrollView  } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay'
import { fetchCoinData  } from '../modules/CryptoReducer'
import CoinCard from '../components/CoinCard'

class CryptoContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCoinData()
  }
  render() {
    const { crypto } = this.props
    return(
      <View>
      <ScrollView styles={{paddingBottom: 100, paddingTop: 55}}>
          {
            crypto.isFetching
            ? <Spinner textContent={'Loading...'} textStyle={{color: '#253145'}} animation="fade"/>
            : crypto.data.map((item, index) =><CoinCard key={index} item={item}/>)
          }
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    crypto: state.crypto
  }
}

export default connect(mapStateToProps, {fetchCoinData})(CryptoContainer)
