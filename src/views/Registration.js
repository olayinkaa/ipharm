import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Box,Button,Container,Grid,MenuItem,Paper,Typography} from '@material-ui/core'
import {Formik,Form} from 'formik'
import { RegistrationSchema } from './../utils/validationSchema';
import { MaterialTextField,MaterialSelectField} from './../components/FormikCustomMUI';
import SaveIcon from '@material-ui/icons/Save';
import {Gender,Prefix,Suffix,CredentialType} from '../utils/Data'
import SimpleBackdrop from './../components/SImpleBackdrop';
import axios from 'axios'
import md5 from 'md5'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container:{
        maxWidth:1000,
        marginTop:"20px",
        marginBottom:"50px"
    }
   
  }));

// const redirectURL = ()=> {
//     window.location.href = 'https://demo.etranzact.com/webconnect/v3/';
//     window.location.href = 'https://demo.etranzact.com/webconnect/v3/?p=2a10x0FA8dGunXqwNNJznuQeuePIqa1Gb6nF24AXiiE4VCmyaADWTS';
// }

const transaction_id = Date.now()
const URL = "https://demo.etranzact.com/CardProcessor/merchant-details/initiate"
const checkSum = md5(`50000000000001${transaction_id}https://ipharm.netlify.app/success-pageDEMO_KEY`)

const Data = {
        "currency_code":"NGN",
        "terminal_id":"0000000001",
        "logo_url":" https://cdn.svgporn.com/logos/kustomer.svg ",
        "response_url":"https://ipharm.netlify.app/success-page",
        "transaction_id":transaction_id.toString(),
        "amount":"5000",
        "fullname":"Enenim Asukwo",
        "description":"COVID-19 Test",
        "checksum":checkSum,
        "email":"youremail@gmail.com",
        "phone_no":"0907869544444"
}


const Registration = () => {
    const classes = useStyles();
    const [loading,setLoading] =useState(false)

    const postData = ()=> {
        axios.post(URL,Data).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <>
        {loading && <SimpleBackdrop/>}
        <div className={classes.root}>
           <Typography variant="h4" component="h2" className="mt-4">
                <Box textAlign="center">
                    Registration
                </Box>
           </Typography>
           <Container className={classes.container}>
                <Formik
                enableReinitialize={true}
                initialValues={{
                    prefix:"",
                    firstName:"",
                    middleName:"",
                    lastName:"",
                    suffix:"",
                    date_of_birth:"",
                    place_of_birth:"",
                    address:"",
                    aptSuite:"",
                    city:"",
                    stateProvince:"",
                    postalCode:"",
                    email:"",
                    credentialType:"",
                    CredentialID:"",
                    date_of_issue:"",
                    date_of_expiration:"",
                    issuingAuthority:""

                }}
                onSubmit={(data,{setSubmitting})=>{
                    setSubmitting(true)
                    setLoading(true)
                    setTimeout(()=>{
                        setSubmitting(false)
                        setLoading(false)
                        postData()
                    },2000)
                }}
                validationSchema={RegistrationSchema}
                >
                    {({isSubmitting,dirty,isValid})=>(
                        <Form>
                            <Paper elevation={4} square>
                                <Box mx={2}>
                                    <Grid container direction="row" spacing={1} >
                                        <Grid item xs={12}>
                                            <Typography variant="h6" component="h2" gutterBottom>
                                                Biographic Data
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={2}>
                                            <MaterialSelectField
                                            name="prefix"
                                            label="Prefix"
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            fullWidth
                                            >
                                                <MenuItem>Select Prefix</MenuItem>
                                                {Prefix!==null&&Prefix!==undefined&&Prefix.map(data=>(
                                                <MenuItem value={data.id} key={data.id}>{data.name}</MenuItem>
                                                ))}
                                            </MaterialSelectField>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <MaterialTextField
                                            name="firstName"
                                            type="text"
                                            label="First Name"
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <MaterialTextField
                                            name="middleName"
                                            type="text"
                                            label="Middle Name"
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <MaterialTextField
                                            name="lastName"
                                            type="text"
                                            label="Last Name"
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            fullWidth
                                            />
                                        </Grid>
                                        {/* -------------------------------------> */}
                                        <Grid item xs={12} md={6}>
                                            <MaterialSelectField
                                            name="suffix"
                                            label="Suffix"
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            fullWidth
                                            >
                                                <MenuItem>Select Suffix</MenuItem>
                                                {Suffix!==null&&Suffix!==undefined&&Suffix.map(data=>(
                                                <MenuItem value={data.id} key={data.id}>{data.name}</MenuItem>
                                                ))}
                                            </MaterialSelectField>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <MaterialSelectField
                                            name="sex"
                                            label="Sex"
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            fullWidth
                                            >
                                                <MenuItem>Select Gender</MenuItem>
                                                {Gender!==null&&Gender!==undefined&&Gender.map(data=>(
                                                <MenuItem value={data.id} key={data.id}>{data.gender}</MenuItem>
                                                ))}
                                            </MaterialSelectField>
                                        </Grid>
                                        {/* ------------------------------------> */}
                                        <Grid item xs={12} md={6}>
                                            <MaterialTextField
                                            name="date_of_birth"
                                            type="date"
                                            label="Date of Birth"
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            InputLabelProps={{
                                                shrink: true,
                                              }}
                                            fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <MaterialTextField
                                            name="place_of_birth"
                                            type="text"
                                            label="place of Birth"
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                            {/*  */}
                            <Paper elevation={4} className="mt-4" square>
                                <Box mx={2}>
                                    <Grid container direction="row" spacing={1} >
                                        <Grid item xs={12}>
                                            <Typography variant="h6" component="h2" gutterBottom>
                                                Current Address
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <MaterialTextField
                                            name="address"
                                            type="text"
                                            label="Address"
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            fullWidth
                                            multiline
                                            rows={3}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <MaterialTextField
                                            name="aptSuite"
                                            type="text"
                                            label="Apt./Suite"
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <MaterialTextField
                                            name="city"
                                            type="text"
                                            label="City"
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <MaterialTextField
                                            name="stateProvince"
                                            type="text"
                                            label="State/Province"
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <MaterialTextField
                                            name="postalCode"
                                            type="text"
                                            label="Postal Code"
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <MaterialTextField
                                            name="email"
                                            type="text"
                                            label="Email Address"
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                            <Paper elevation={4} className="mt-4" square>
                                <Box mx={2}>
                                    <Grid container direction="row" spacing={1} >
                                        <Grid item xs={12}>
                                            <Typography variant="h6" component="h2" gutterBottom>
                                                Credential Data
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}  md={6}>
                                            <MaterialSelectField
                                            name="credentialType"
                                            label="Reference Credential Type"
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            fullWidth
                                            >
                                                <MenuItem>Select Credential Type</MenuItem>
                                                {CredentialType!==null&&CredentialType!==undefined&&CredentialType.map(data=>(
                                                <MenuItem value={data.id} key={data.id}>{data.name}</MenuItem>
                                                ))}
                                            </MaterialSelectField>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <MaterialTextField
                                            name="credentialID"
                                            type="number"
                                            label="Credential ID Number"
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <MaterialTextField
                                            name="date_of_issue"
                                            type="date"
                                            label="Prefix"
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <MaterialTextField
                                            name="date_of_expiration"
                                            type="date"
                                            label="Date of Expiration"
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            fullWidth
                                            />
                                        </Grid>
                                        <Grid item  xs={12}>
                                            <MaterialTextField
                                            name="issuingAuthority"
                                            type="text"
                                            label="Issuing Authority"
                                            variant="outlined"
                                            size="small"
                                            margin="dense"
                                            fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                            {/*  */}
                            <Grid container direction="row">
                                <Grid item xs={12} >
                                    <Box my={3}>
                                        <Button 
                                        variant="contained" 
                                        color="primary"
                                        startIcon={<SaveIcon />}
                                        type="submit"
                                        disabled={isSubmitting || !dirty || !isValid}
                                        >
                                            Submit
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
           </Container>
        </div>
        </>
    )
}


export default Registration
