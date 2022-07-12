import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    fetchData:null,
    selectedCurrency1:'uah',
    selectedCurrency2:'usd',
    inputValue1:'',
    inputValue2:'',
    rate:null,
    rate2:null
}

export const currencySlice = createSlice({
    name:'currency',
    initialState,
    reducers: {
        addCurrency: (state, action) => {state.fetchData = action.payload},
        setRate: (state,action)=>{state.rate=action.payload},
        setRate2: (state,action) =>{state.rate2=action.payload},
        setSelect1: (state,action) => {state.selectedCurrency1 = action.payload},
        setSelect2: (state,action) => {state.selectedCurrency2 = action.payload},
        setInputValue1: (state,action) => {state.inputValue1 = action.payload},
        setInputValue2: (state,action) => {state.inputValue2 = action.payload},
    }



})
export default currencySlice.reducer
export const {addCurrency,setSelect1,setSelect2,setRate,setInputValue1,setInputValue2,setRate2} = currencySlice.actions

export const getInputValue1 = state=> state.currency.inputValue1
export const getInputValue2 = state=> state.currency.inputValue2
export const getSelectValue1= state=> state.currency.selectedCurrency1
export const getSelectValue2= state=> state.currency.selectedCurrency2
export const getRate= state => state.currency.rate
export const getRate2 = state => state.currency.rate2


export const asyncLoadCurrency = (dispatch) => {
    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        .then(item=>item.json())
        .then(item=>{
            dispatch(addCurrency(item))
        })

}