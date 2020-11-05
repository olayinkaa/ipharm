import React from 'react'
import { at } from 'lodash';
import { useField } from 'formik';
import {
    Radio,
    RadioGroup,
    FormControl,
    FormLabel,
    FormControlLabel,
    FormHelperText
  } from '@material-ui/core';

const RadioButton = (props) => {
const { label,data,name, ...rest } = props;
  const [field, meta, helper] = useField(props);
  const { setValue } = helper;
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  
  const _renderHelperText =()=> {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

    const _onChange= (e) => {
        setValue(e.target.value)
    }

    return (
        <>
            <FormControl component="fieldset" {...rest} error={isError} >
                <FormLabel component="legend">{label}</FormLabel>
                <RadioGroup row aria-label={name} {...field} value={selectedValue ? selectedValue : ''} onChange={_onChange}  >
                    {data.map((item)=>(
                        <FormControlLabel 
                        key={item.id} 
                        value={item.name} 
                        control={<Radio color="primary" />} 
                        label={item.name} 
                        // labelPlacement="bottom"
                        />
                    ))}
                    {_renderHelperText()}
                </RadioGroup>
            </FormControl>
        </>
    )
}

export default RadioButton
