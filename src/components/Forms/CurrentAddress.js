import React from 'react'
import { 
    Typography,
    Grid
} from '@material-ui/core';
import {InputField,PhoneField} from './../FormFields'; 

const CurrentAddress = ({formField,stepTitle,activeStep}) => {
    const {
       address,
       aptSuite,
       city,
       stateProvince,
       postalCode,
       phoneNumber,
       emailAddress,
    } = formField

    return (
        <React.Fragment>
             <Typography variant="h6" gutterBottom align="center">
                {stepTitle[activeStep]}
            </Typography>
            <Grid container direction="row" spacing={2}>
                <Grid item xs={12} sm={12}>
                    <InputField 
                    name={address.name} 
                    label={address.label} 
                    fullWidth 
                    multiline
                    rows={3}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <InputField 
                    name={aptSuite.name} 
                    label={aptSuite.label} 
                    fullWidth 
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <InputField 
                    name={city.name} 
                    label={city.label} 
                    fullWidth 
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <InputField 
                    name={stateProvince.name} 
                    label={stateProvince.label} 
                    fullWidth 
                    style={{marginBottom:"20px"}}
                    />
                </Grid>
                {/* <Grid item xs={12} sm={12}> */}
                    {/* <PhoneField
                    name={phoneNumber.name}
                    label={phoneNumber.label}
                    fullWidth
                    /> */}
                {/* </Grid> */}
                <Grid item xs={12} sm={12}>
                    <InputField 
                    name={postalCode.name} 
                    label={postalCode.label} 
                    fullWidth 
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <InputField 
                    name={emailAddress.name} 
                    label={emailAddress.label} 
                    fullWidth 
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default CurrentAddress
