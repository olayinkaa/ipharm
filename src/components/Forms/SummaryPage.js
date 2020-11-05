import React,{Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useFormikContext } from 'formik';
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


const getValue = (value)=>{
    if(value===true){
        return "YES"
    } else if(value===false){
        return "NO"
    } else {
        return value
    }
}

const SummaryPage = ({stepTitle,activeStep}) => {
    const classes = useStyles();
    const { values } = useFormikContext();
    return (
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
    )
}

export default SummaryPage
