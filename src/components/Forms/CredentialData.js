import React,{useState,useEffect} from 'react'
import { 
    Typography,
    Grid
} from '@material-ui/core';

import {InputField,SelectField,DatePickerField,RadioButton,CheckBoxField} from './../FormFields';
import {CredentialType} from '../../utils/Data'
import {getCountries} from '../../services'
import {MessageMedium} from '../../utils/Data'


const CredentialData = ({formField,stepTitle,activeStep}) => {
    const [country,setCountry] = useState([])
    const {
        credentialType,
        credentialNumber,
        dateOfIssue,
        dateOfExpiration,
        issuingAuthority,
        sendMedium,
        discountOffer
     } = formField


     const queryCountries = () => {
         getCountries().then(res=>{
             console.log(res.data)
             setCountry(res.data)
         }).catch(err=>console.log(err))
     }
 
     useEffect(() => {
         queryCountries()
     }, [])

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom align="center">
               {stepTitle[activeStep]}
            </Typography>
            <Grid container direction="row" spacing={2}>
                <Grid item xs={12} sm={12}>
                    <SelectField 
                    name={credentialType.name} 
                    label={credentialType.label} 
                    data={CredentialType}
                    fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <InputField 
                    name={credentialNumber.name} 
                    label={credentialNumber.label} 
                    type="number"
                    fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <DatePickerField
                    name={dateOfIssue.name}
                    label={dateOfIssue.label}
                    format="dd/MM/yy"
                    // views={['year', 'month']}
                    minDate={new Date()}
                    maxDate={new Date('2050/12/31')}
                    fullWidth
                    style={{outline:"none"}}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <DatePickerField
                    name={dateOfExpiration.name}
                    label={dateOfExpiration.label}
                    format="dd/MM/yy"
                    // views={['year', 'month']}
                    minDate={new Date()}
                    maxDate={new Date('2050/12/31')}
                    fullWidth
                    style={{outline:"none"}}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <SelectField 
                    name={issuingAuthority.name} 
                    label={issuingAuthority.label} 
                    data={country}
                    fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} >
                    <RadioButton
                    name={sendMedium.name}
                    label={sendMedium.label}
                    data={MessageMedium}
                    fullWidth
                    margin="dense"
                    />
                </Grid>
                <Grid item xs={12}>
                    <CheckBoxField
                    name={discountOffer.name}
                    label={discountOffer.label}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default CredentialData
