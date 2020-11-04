import axios from 'axios'
import md5 from 'md5'

const URL = "https://demo.etranzact.com/CardProcessor/merchant-details/initiate"
const countriesURL ="https://restcountries.eu/rest/v2/all"

const transaction_id = Date.now()
const checkSum = md5(`50000000000001${transaction_id}https://ipharm.netlify.app/success-pageDEMO_KEY`)
const Data = {
    "currency_code":"NGN",
    "terminal_id":"0000000001",
    "logo_url":" https://cdn.svgporn.com/logos/kustomer.svg ",
    "response_url":"https://ipharm.netlify.app/success-page",
    "transaction_id":transaction_id.toString(),
    "amount":"5000",
    "fullname":"Enenim Asukwo",
    "description":"COVID-19 Test",
    "checksum":checkSum,
    "email":"youremail@gmail.com",
    "phone_no":"0907869544444"
}

const config = {
    headers:{
        "secret-key":"DEMO_KEY",
        "terminal-id":"0000000001"
    }
}

export const postData = ()=>{
    return axios.post(URL,Data,config)
}


export const getCountries = ()=>{
    return axios.get(countriesURL)
}