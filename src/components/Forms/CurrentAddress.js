import React from 'react'
import { 
    Typography,
    Grid
} from '@material-ui/core';

import {InputField} from './../FormFields';  

const CurrentAddress = ({formField}) => {
    const {
       address,
       aptSuite,
       city,
       stateProvince,
       postalCode,
       emailAddress,
    } = formField

    return (
        <React.Fragment>
             <Typography variant="h6" gutterBottom>
                Current Address
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
                    />
                </Grid>
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
