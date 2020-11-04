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

  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

 
  console.log(field)

  function _onChange(e) {
      console.log(e.target.value)
    setValue(e.target.value);
  }

    return (
        <>
            <FormControl component="fieldset" {...rest} error={isError} >
                <FormLabel component="legend">{label}</FormLabel>
                <RadioGroup row aria-label={name} name={field.name} value={field.value} {...field} onChange={_onChange}   >
                    {data.map((item)=>(
                        <FormControlLabel 
                        key={item.id} 
                        value={item.name} 
                        control={<Radio />} 
                        label={item.name} 
                        />
                    ))}
                    {_renderHelperText()}
                </RadioGroup>
            </FormControl>
        </>
    )
}

export default RadioButton
