import React,{Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useFormikContext } from 'formik';
import moment from 'moment';
import {
    Typography,
    Paper,
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell
} from '@material-ui/core'


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });


// const getValue = (value)=>{
//     if(value===true){
//         return "YES"
//     } else if(value===false){
//         return "NO"
//     } else {
//         return value
//     }
// }

const SummaryPage = ({stepTitle,activeStep}) => {
    const classes = useStyles();
    const { values } = useFormikContext();
    const {
        prefix,
        firstName,
        lastName,
        middleName,
        suffix,
        sex,
        dateOfBirth,
        placeOfBirth,
        address,
        aptSuite,
        city,
        stateProvince,
        postalCode,
        emailAddress,
        credentialType,
        credentialNumber,
        dateOfIssue,
        dateOfExpiration,
        issuingAuthority,
        sendMedium,
        discountOffer
    } = values
    return (
        <Fragment>
            <Typography variant="h6" gutterBottom align="center">
                {stepTitle[activeStep]}
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                            <TableRow>
                                <TableCell align="left">Prefix</TableCell>
                                <TableCell align="left">{prefix}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">First Name</TableCell>
                                <TableCell align="left">{firstName}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Last Name</TableCell>
                                <TableCell align="left">{lastName}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Middle Name</TableCell>
                                <TableCell align="left">{middleName}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Suffix</TableCell>
                                <TableCell align="left">{suffix}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Gender</TableCell>
                                <TableCell align="left">{sex}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Date of Birth</TableCell>
                                <TableCell align="left">{moment(dateOfBirth).format('DD-MMMM-YYYY')}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Place of Birth</TableCell>
                                <TableCell align="left">{placeOfBirth}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Address</TableCell>
                                <TableCell align="left">{address}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Apt./Suite</TableCell>
                                <TableCell align="left">{aptSuite}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">City</TableCell>
                                <TableCell align="left">{city}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">State/Province</TableCell>
                                <TableCell align="left">{stateProvince}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Postal Code</TableCell>
                                <TableCell align="left">{postalCode}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Email</TableCell>
                                <TableCell align="left">{emailAddress}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Reference Credential Type</TableCell>
                                <TableCell align="left">{credentialType}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Credential ID Number</TableCell>
                                <TableCell align="left">{credentialNumber}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Date of Issue</TableCell>
                                <TableCell align="left">{moment(dateOfIssue).format('DD-MMMM-YYYY')}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Date of Expiration</TableCell>
                                <TableCell align="left">{moment(dateOfExpiration).format('DD-MMMM-YYYY')}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Issuing Authority</TableCell>
                                <TableCell align="left">{issuingAuthority}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Feedback Medium</TableCell>
                                <TableCell align="left">{sendMedium}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">Discount Offer</TableCell>
                                <TableCell align="left">{discountOffer===true?"YES":"NO"}</TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    )
}

export default SummaryPage


/*
  <Fragment>
            <Typography variant="h6" gutterBottom align="center">
                {stepTitle[activeStep]}
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                        {values!==null&&values!==undefined&&Object.entries(values).map(([key,value])=>{
                            return(
                            <TableRow key={key}>
                                <TableCell align="left">{key}</TableCell>
                                <TableCell align="left">{getValue(value)}</TableCell>
                            </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>

*/
