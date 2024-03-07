import React from 'react'
import { Provider } from 'react-redux'
import Home from './cartUsingRedux/components/Home'
// import store from './bookShopUsingRedux/reduxContainer/Store'
// import BookShop from './bookShopUsingRedux/BookShop'
import './App.css'
import Header from './cartUsingRedux/components/Header'



const App = () => {
  return (
    <>
      <Header />
      <Home />
    </>

    // <Provider store={store}>
    //  <BookShop/>
    // </Provider>
  );
}

export default App