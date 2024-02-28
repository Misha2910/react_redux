import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { purchaseBook } from './reduxContainer/BookAction'

const BookShop = () => {
   const noOfBooks = useSelector(state=>state.numberOfBooks)
  //  this hook returns a reference to the dispatch function from the redux store.

   const dispatch = useDispatch();
  return (
    <>
    <div>React - Redux</div> 
    <h2>BookContainer : {noOfBooks}</h2>
    <button onClick={()=>dispatch(purchaseBook())}>Buy Book</button>
    </>
  )
}

export default BookShop