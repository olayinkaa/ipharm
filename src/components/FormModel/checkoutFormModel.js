const formModel = {
    formId:"PreRegistrationForm",
    formField:{
        prefix:{
            name:"prefix",
            label:"Prefix",
            requiredErrorMsg:"Prefix is required"
        },
        firstName:{
            name:"firstName",
            label:"First Name",
            requiredErrorMsg:"First name is required"
        },
        lastName:{
            name:"lastName",
            label:"Last Name",
            requiredErrorMsg:"Last name is required"
        },
        middleName:{
            name:"middleName",
            label:"Middle Name",
            requiredErrorMsg:"Middle name is required"
        },
        suffix:{
            name:"suffix",
            label:"Suffix",
            requiredErrorMsg:"Suffix is required"
        },
        sex:{
            name:"sex",
            label:"Gender",
            requiredErrorMsg:"Gender is required"
        },
        dateOfBirth:{
            name:"dateOfBirth",
            label:"Date of Birth",
            requiredErrorMsg:"Date of birth is required"
        },
        placeOfBirth:{
            name:"placeOfBirth",
            label:"Place of birth",
            requiredErrorMsg:"Place of birth is required"
        },
        address:{
            name:"address",
            label:"Address",
            requiredErrorMsg:"Address is required"  
        },
        aptSuite:{
            name:"aptSuite",
            label:"Apt./Suite",
            requiredErrorMsg:"Apt./Suite is required"  
        },
        city:{
            name:"city",
            label:"City",
            requiredErrorMsg:"City is required"  
        },
        stateProvince:{
            name:"stateProvince",
            label:"State/Province",
            requiredErrorMsg:"State/Province is required"  
        },
        postalCode:{
            name:"postalCode",
            label:"Postal Code",
            requiredErrorMsg:"Postal code is required"  
        },
        emailAddress:{
            name:"emailAddress",
            label:"Email Address",
            requiredErrorMsg:"Email address is required",
            invalidErrorMsg:"Invalid email address"
        },
        credentialType:{
            name:"credentialType",
            label:"Reference Credential Type",
            requiredErrorMsg:"Reference credential type is required"  
        },
        credentialNumber:{
            name:"credentialNumber",
            label:"Credential ID Number",
            requiredErrorMsg:"Credential ID number is required"  
        },
        dateOfIssue:{
            name:"dateOfIssue",
            label:"Date of Issue",
            requiredErrorMsg:"Date of issue is required"  
        },
        dateOfExpiration:{
            name:"dateOfExpiration",
            label:"Date of Expiration",
            requiredErrorMsg:"Date of expiration is required"  
        },
        issuingAuthority:{
            name:"issuingAuthority",
            label:"Issuing Authority",
            requiredErrorMsg:"Issuing authority is required"  
        },
        sendMedium:{
            name:"sendMedium",
            label:"How do you want your data sent to you",
            requiredErrorMsg:"Please choose one"  
        }

    }
}


export default formModel;