import React,{Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import {Card,Grid,Typography} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 500,
      marginTop:"150px"
    },
    title:{
        textAlign:"center"
    }
   
  });

const SuccessPage = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Grid 
            container 
            direction="row" 
            spacing={2}
            justify="center"
            alignItems="center"
            >
               <Grid item xs={4}>
                    <Card className={classes.root}>
                        <CardContent>
                        <Typography variant="h4" component="h2" className={classes.title} color="textSecondary" gutterBottom>
                            Successfully Processed
                        </Typography>
                        </CardContent>
                    </Card>
               </Grid>
            </Grid>
        </Fragment>
    )
}

export default SuccessPage
