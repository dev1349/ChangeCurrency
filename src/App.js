
import './App.css';
import Header from "./components/Header";
import Convert from "./components/Convert";
import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {asyncLoadCurrency} from "./store/slices/currencySlice";


function App() {
    const dispatch = useDispatch()
    const currency = useSelector(state=>state.currency)
    useEffect(()=>{
        dispatch(asyncLoadCurrency)
    },[])
    useEffect(()=>{
        console.log(currency)
    },[currency])
  return (
    <div className="App" >
      <Header/>
       <div className="wrapper">
           <Convert sx={{marginTop:'300px'}}/>
       </div>
    </div>
  );
}

export default App;
