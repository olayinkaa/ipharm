import React,{Fragment,useState,useCallback} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    AppBar,
    Button,
    CircularProgress,
    Paper,
    Step,
    Stepper,
    StepLabel,
    Toolbar,
    Typography
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import BiographicData from './../components/Forms/BiographicData';
import CredentialData from './../components/Forms/CredentialData';
import CurrentAddress from './../components/Forms/CurrentAddress';
import SummaryPage from './../components/Forms/SummaryPage';
// import Footer from '../components/Footer'
import checkoutFormModel from '../components/FormModel/checkoutFormModel'
import formInitialValues from '../components/FormModel/formInitialValues'
import validationSchema from '../components/FormModel/validationSchema'
import useStyles from '../styles'
import { postData } from './../services';
import SimpleBackdrop from './../components/SImpleBackdrop';


const steps = ['Biographic Data', 'Current Address', 'Credential Data','Review Entries'];
const { formId, formField } = checkoutFormModel;
/*
function _renderStepContent(step) {
    switch (step) {
      case 0:
        return <BiographicData formField={formField} />;
      case 1:
        return <CurrentAddress formField={formField} />;
      case 2:
        return <CredentialData formField={formField} />;
      default:
        throw new Error('Unknown step');
    }
  }

*/
  

const PreRegistration = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const currentValidationSchema = validationSchema[activeStep];
    const isLastStep = activeStep === steps.length - 1;

    const _renderStepContent = useCallback(
        (step) => {
            switch (step) {
                case 0:
                  return <BiographicData formField={formField} stepTitle={steps} activeStep={activeStep} />;
                case 1:
                  return <CurrentAddress formField={formField} stepTitle={steps} activeStep={activeStep} />;
                case 2:
                  return <CredentialData formField={formField} stepTitle={steps} activeStep={activeStep} />;
                case 3:
                  return <SummaryPage stepTitle={steps} activeStep={activeStep} />;
                default:
                  throw new Error('Unknown step');
              }
        },
        [activeStep],
    )

    function _sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    
      async function _submitForm(values, actions) {
        await _sleep(1000);
        // alert(JSON.stringify(values, null, 2));
        postData().then(res=>{
            window.location.href= `${res.data.data.authorization_url}`
        }).catch(err=>console.log(err))
        actions.setSubmitting(false);
        actions.resetForm()
        await setLoading(true)
        // setActiveStep(0)

        // setActiveStep(activeStep + 1);

      }
    
      function _handleSubmit(values, actions) {
        if (isLastStep) {
          _submitForm(values, actions);
        } else {
          setActiveStep(activeStep + 1);
          actions.setTouched({});
          actions.setSubmitting(false);
        }
      }
    
      function _handleBack() {
        setActiveStep(activeStep - 1);
      }

    return (
        <Fragment>
            {loading && <SimpleBackdrop/>}
            <CssBaseline />
            <AppBar position="absolute" color="default" className={classes.appBar}>
                <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    IPHARM
                </Typography>
                </Toolbar>
            </AppBar>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h2" variant="h4" align="center">
                        Pre-Registration
                    </Typography>
                    <Stepper 
                    activeStep={activeStep} 
                    className={classes.stepper} 
                    // alternativeLabel
                    >
                        {steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                    <Fragment>
                        <Formik
                        initialValues={formInitialValues}
                        validationSchema={currentValidationSchema}
                        onSubmit={_handleSubmit}
                        >
                        {({ isSubmitting,values }) => (
                            <Form id={formId}>
                                {_renderStepContent(activeStep)}
                                <div className={classes.buttons}>
                                    {activeStep !== 0 && (
                                    <Button 
                                    onClick={_handleBack} 
                                    className={classes.button}
                                    >
                                    Back
                                    </Button>
                                    )}
                                    <div className={classes.wrapper}>
                                        <Button
                                        disabled={isSubmitting}
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        >
                                        {isLastStep ? 'Submit' : 'Next'}
                                        </Button>
                                        {isSubmitting && (
                                        <CircularProgress
                                            size={24}
                                            className={classes.buttonProgress}
                                        />
                                        )}
                                    </div>
                                </div>
                                {/* <pre>{JSON.stringify(values,null,2)}</pre> */}
                                {/* <pre>{JSON.stringify(errors,null,2)}</pre> */}
                            </Form>
                            )}
                        </Formik>
                    </Fragment>
                </Paper>
            </main>
        </Fragment>

    )
}

export default PreRegistration
