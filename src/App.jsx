import React from 'react'
import { Provider } from 'react-redux'
import store from './reduxContainer/Store'
import BookShop from './bookShopUsingRedux/BookShop'



const App = () => {
  return (
    <Provider store={store}>
     <BookShop/>
    </Provider>
  )
}

export default App