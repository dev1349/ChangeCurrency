import {AppBar, Box, Toolbar} from "@mui/material";
import {useSelector} from "react-redux";

const Header = ()=>{
    const fetchData= useSelector(state=>state.currency.fetchData)

    return(
        <Box>
            <AppBar>
                <Toolbar>
                    <div className='toolbar_item'>
                        {fetchData && `1 eur = ${fetchData[1].buy} uah`}
                    </div>

                    <div className='toolbar_item'>
                        {fetchData && `1 usd = ${fetchData[0].buy} uah`}
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Header