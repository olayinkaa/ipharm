import * as yup from 'yup'

export const RegistrationSchema = yup.object({
    prefix:yup.string().required("Prefix is required"),
    firstName:yup.string().required("Firtst name is required"),
    middleName:yup.string().required("Middle name is required"),
    lastName:yup.string().required("Last name is required"),
    suffix:yup.string().required("Suffix is required"),
    date_of_birth:yup.string().required("Date of birth is required"),
    place_of_birth:yup.string().required("Place of birth is required"),
    address:yup.string().required("Address is required"),
    aptSuite:yup.string().required("Apt./Suite is required"),
    city:yup.string().required("City is required"),
    stateProvince:yup.string().required("State/Province is required"),
    postalCode:yup.string().required("Postal code is required"),
    email:yup.string().required("Email address is required").email("Must be a valid emaill address"),
    credentialType:yup.string().required("Reference Credential Type is required"),
    credentialID:yup.string().required("Credential ID Number is required"),
    date_of_issue:yup.string().required("Date of issue is required"),
    date_of_expiration:yup.string().required("Date of expiration is required"),
    issuingAuthority:yup.string().required("Issuing Authority is required"),
    
})

/*

credentialType:"",
CredentialID:"",
date_of_issue:"",
date_of_expiration:"",
issuingAuthority:""

*/