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
        phoneNumber,
        postalCode,
        emailAddress,
        credentialType,
        credentialNumber,
        dateOfIssue,
        dateOfExpiration,
        issuingAuthority,
        sendMedium,
        discountOffer
    }
} = CheckoutFormModel

const initialValues = {
    [prefix.name]:'',
    [firstName.name]:'',
    [middleName.name]:'',
    [lastName.name]:'',
    [suffix.name]:'',
    [sex.name]:'',
    [dateOfBirth.name]:'',
    [placeOfBirth.name]:'',
    [address.name]:'',
    [aptSuite.name]:'',
    [city.name]:'',
    [stateProvince.name]:'',
    [phoneNumber.name]:'',
    [postalCode.name]:'',
    [emailAddress.name]:'',
    [credentialType.name]:'',
    [credentialNumber.name]:'',
    [dateOfIssue.name]:'',
    [dateOfExpiration.name]:'',
    [issuingAuthority.name]:'',
    [sendMedium.name]:'',
    [discountOffer.name]:false,
}

export default initialValues;