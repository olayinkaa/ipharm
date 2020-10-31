import React,{Fragment} from 'react'
import {useField} from 'formik'
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
// import {indigo} from '@material-ui/core/colors';

const CustomColor = "green"
const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: CustomColor ,
      borderWidth: 1,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 1,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important',
    },
    '& label.Mui-focused': {
      color: CustomColor,
      fontSize:'18px'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiInput-underline': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'green',
        borderWidth: 1,
      },
      '&:hover fieldset': {
        borderColor: 'green',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);


export const MaterialTextField = ({labelFor,defaultValue,label,size,variant,margin,placeholder,...props}) => {
    const [field,meta] = useField(props);
    const errorText = meta.error && meta.touched?meta.error:""
    return (
        <Fragment>
            <ValidationTextField
            {...field}
            {...props}
            label={label}
            variant={variant}
            size={size}
            margin={margin}
            defaultValue={defaultValue}
            helperText={errorText}
            error={!!errorText}
            />
        </Fragment>
    )
}

export const MaterialSelectField = ({labelFor,label,size,variant,margin,placeholder,...props}) => {
    const [field,meta] = useField(props);
    const errorText = meta.error && meta.touched?meta.error:""
    return (
        <Fragment>
            <ValidationTextField
            {...field}
            {...props}
            label={label}
            variant={variant}
            size={size}
            margin={margin}
            helperText={errorText}
            select
            error={!!errorText}
            >
               {props.children}
            </ValidationTextField>
        </Fragment>
    )
}
