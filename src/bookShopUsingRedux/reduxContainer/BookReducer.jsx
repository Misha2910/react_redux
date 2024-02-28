import { buy_book } from "./BookConstants"

const initialState = {
    numberOfBooks: 20
}

const bookReducer=(state=initialState,action)=>{
    switch(action.type){
        case buy_book:
            return {...state , numberOfBooks:state.numberOfBooks-1}
        default:
            return state;
    }
}
export default bookReducer;