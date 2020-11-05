import React,{useState,useEffect} from 'react'
import { 
    Typography,
    Grid
} from '@material-ui/core';
import {InputField,SelectField,DatePickerField,RadioButton} from './../FormFields';
import {Gender,Prefix,Suffix} from '../../utils/Data'
import {getCountries} from '../../services'


const BiographicData = ({formField,activeStep,stepTitle}) => {
    const [country,setCountry] = useState([])
    const {
        prefix,
        firstName,
        lastName,
        middleName,
        suffix,
        sex,
        dateOfBirth,
        placeOfBirth
    } = formField


    const queryCountries = () => {
        getCountries().then(res=>{
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
            <Grid container direction="row"  spacing={1}>
                <Grid item xs={12} sm={12}>
                    <SelectField 
                    name={prefix.name}
                    label={prefix.label}
                    data={Prefix}
                    fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <InputField 
                    name={firstName.name} 
                    label={firstName.label} 
                    fullWidth 
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <InputField 
                    name={lastName.name} 
                    label={lastName.label} 
                    placeholder="Please enter your surname here"
                    fullWidth 
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <InputField 
                    name={middleName.name} 
                    label={middleName.label} 
                    fullWidth 
                    />
                </Grid>
                <Grid item container spacing={4} justify="space-between">
                    <Grid item xs={12} sm={6}>
                        <SelectField 
                        name={suffix.name}
                        label={suffix.label}
                        data={Suffix}
                        fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <RadioButton
                        name={sex.name}
                        label={sex.label}
                        data={Gender}
                        fullWidth
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <DatePickerField
                        name={dateOfBirth.name}
                        label={dateOfBirth.label}
                        format="dd/MM/yy"
                        // views={['year', 'month']}
                        // minDate={new Date()}
                        maxDate={new Date('2050/12/31')}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <SelectField 
                    name={placeOfBirth.name}
                    label={placeOfBirth.label}
                    data={country}
                    fullWidth
                    />
                </Grid>
            </Grid>

        </React.Fragment>
    )
}

export default BiographicData
