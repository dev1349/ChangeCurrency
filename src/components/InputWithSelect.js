import {Box, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useSelector,useDispatch} from "react-redux";
import {
    getInputValue1,
    setRate,
    getSelectValue1,
    getInputValue2,
    getSelectValue2,
    setSelect1,
    setSelect2,
    setInputValue2,
    setInputValue1,
    getRate,
    getRate2,
    setRate2,
} from "../store/slices/currencySlice";
import {useEffect} from "react";

const InputWithSelect= ({first})=>{
    const dispatch = useDispatch()

    const inputValue1=useSelector(getInputValue1)
    const inputValue2=useSelector(getInputValue2)
    const selectValue1 = useSelector(getSelectValue1)
    const selectValue2= useSelector(getSelectValue2)
    const rate = useSelector(getRate)
    const rate2 = useSelector(getRate2)
    const fetchData= useSelector(state=>state.currency.fetchData)
    const handleChange = (event)=>{
        if(first)
        {
            dispatch(setSelect1(event.target.value))
            dispatch(setInputValue2(Number(inputValue1)*rate))
        }

        else
            dispatch(setSelect2(event.target.value))
    }
    console.log(rate2)

    useEffect(()=>{
        if(selectValue1==='uah' && selectValue2=== 'usd') {
            fetchData &&
            dispatch(setRate(1/Number(fetchData[0].buy))) &&
            dispatch(setRate2(Number(fetchData[0].buy)))

        }

        if(selectValue1==='usd' && selectValue2=== 'uah') {
            fetchData && dispatch(setRate(Number(fetchData[0].buy)))
            fetchData && dispatch(setRate2(1/Number(fetchData[0].buy)))
        }
        if(selectValue1==='eur' && selectValue2=== 'uah') {
            fetchData && dispatch(setRate(1 / Number(fetchData[1].buy)))
            fetchData && dispatch(setRate2(Number(fetchData[1].buy)))
        }
        if(selectValue1==='uah' && selectValue2=== 'eur') {
            fetchData && dispatch(setRate(1/Number(fetchData[1].buy)))
            fetchData && dispatch(setRate2(Number(fetchData[1].buy)))
        }

        if(selectValue1==='eur' && selectValue2=== 'usd') {
            dispatch(setRate(0.8))
            dispatch(setRate2(1.2))
        }

        if(selectValue1==='usd' && selectValue2=== 'eur') {
            dispatch(setRate(1.2))
            dispatch(setRate2(0.8))
        }


        console.log('VIZVAL')
    },[selectValue1,selectValue2,fetchData])



    const handleInputChange = (event)=>{
        if(first)
        {
            dispatch(setInputValue1(event.target.value))

            dispatch(setInputValue2(event.target.value * rate))
        }
        else{
            dispatch(setInputValue2(event.target.value))
            dispatch(setInputValue1(event.target.value * rate2))
        }
    }



    return (
        <Box sx={{marginTop:'100px'}}>
            <TextField
                sx={{display:'inline'}}
                value={first? inputValue1 : inputValue2}
                onChange={handleInputChange}
            />
            <FormControl sx={{display:'inline',width:'400px'}}>
                <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
                <Select sx={{
                    display:'inline-block',
                    fontSize:'30px',
                    marginLeft:'40px',
                    height:'55px',
                    marginTop:'25px'
                }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={(first===true ? selectValue1: selectValue2) }
                        label="Валюта"
                        onChange={handleChange}
                >
                    <MenuItem value={'uah'}>Uah</MenuItem>
                    <MenuItem value={'eur'}>Euro</MenuItem>
                    <MenuItem value={'usd'}>Dollar</MenuItem>

                </Select>
            </FormControl>
        </Box>
    )
}
export default InputWithSelect