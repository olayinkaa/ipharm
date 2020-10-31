// import React from 'react'
import {createMuiTheme} from '@material-ui/core/styles'
import {red,green} from '@material-ui/core/colors';


const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"

const theme = createMuiTheme({
    palette:{
        common:{
            arcBlue:`${arcBlue}`,
            arcOrange:`${arcOrange}`
        },
        type:"light",
        primary:{
            main:`${arcBlue}`
        },
        secondary:{
            main:red[500]
        },
        success:{
            main:green[900]
        },
        typography:{
            tab:{
                fontFamily:"Raleway",
                textTransform:"none",
                fontWeight:700,
                fontSize:"1rem",
            },
          
        }
    },
    
})

export default theme