import React from 'react';
import { useField } from 'formik';
import PhoneInput from 'react-phone-input-2'
 
function PhoneField(props) {
    const [field, helper] = useField(props);
    const { setValue } = helper;

    const { 
    errorText, 
     ...rest 
    } = props;

  return (
    <React.Fragment>
        <PhoneInput
        country={'ng'}
        onChange={phone => setValue({ phone })}
        placeholder="Phone Number"
        {...field}
        {...rest}
        />
    </React.Fragment>
  );
}
 
export default PhoneField