import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'

import Store from './src/configStore'
import { Header, CryptoContainer } from './src/containers/'


class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}

export default App
