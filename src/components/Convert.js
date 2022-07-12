import {Box, } from "@mui/material";
import InputWithSelect from "./InputWithSelect";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {asyncLoadCurrency} from "../store/slices/currencySlice";

const Convert = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(asyncLoadCurrency)
    },[])

    return(
        <Box sx={{
            width:'1280px',
            height:'600px',
            fontSize:'50px',
            marginLeft:'100px'
        }}>
            <InputWithSelect first={true}/>
            <InputWithSelect />


        </Box>
    )
}
export default Convert