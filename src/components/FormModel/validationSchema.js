import * as Yup from 'yup';
import CheckoutFormModel from './checkoutFormModel';

const {
    formField:{
        prefix,
        firstName,
        middleName,
        lastName,
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
        sendMedium
    }
} = CheckoutFormModel

const schema =  [
    Yup.object().shape({
        [prefix.name]: Yup.string().required(`${prefix.requiredErrorMsg}`),
        [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
        [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
        [middleName.name]: Yup.string().required(`${middleName.requiredErrorMsg}`),
        [suffix.name]: Yup.string().required(`${suffix.requiredErrorMsg}`),
        [sex.name]: Yup.string().required(`${sex.requiredErrorMsg}`),
        [dateOfBirth.name]: Yup.string().required(`${dateOfBirth.requiredErrorMsg}`),
        [placeOfBirth.name]: Yup.string().required(`${placeOfBirth.requiredErrorMsg}`),        
      }),
    Yup.object().shape({
        [address.name]: Yup.string().required(`${address.requiredErrorMsg}`),
        [aptSuite.name]: Yup.string().required(`${aptSuite.requiredErrorMsg}`),
        [city.name]: Yup.string().required(`${city.requiredErrorMsg}`),
        [stateProvince.name]: Yup.string().required(`${stateProvince.requiredErrorMsg}`),
        [postalCode.name]: Yup.string().required(`${postalCode.requiredErrorMsg}`),
        [emailAddress.name]: Yup.string().required(`${emailAddress.requiredErrorMsg}`)
            .email(`${emailAddress.invalidErrorMsg}`),
      }),
    Yup.object().shape({
        [credentialType.name]: Yup.string().required(`${credentialType.requiredErrorMsg}`),
        [credentialNumber.name]: Yup.string().required(`${credentialNumber.requiredErrorMsg}`),
        [dateOfIssue.name]: Yup.string().required(`${dateOfIssue.requiredErrorMsg}`),
        [dateOfExpiration.name]: Yup.string().required(`${dateOfExpiration.requiredErrorMsg}`),
        [issuingAuthority.name]: Yup.string().required(`${issuingAuthority.requiredErrorMsg}`),
        [sendMedium.name]: Yup.string().required(`${sendMedium.requiredErrorMsg}`),
      }),
];

export default schema;