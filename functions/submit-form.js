const fetch = require('node-fetch');
const FormData = require('form-data');


const NAME_ID = 'entry.2005620554'
const EMAIL_ID = 'entry.1045781291'
const MESSAGE_ID = 'entry.839337160'


const FORM_ID = '1FAIpQLSe1g0_Akay_Y2_CgvTHzVs29XFUgf_bzlEkQmloReHhzKe-Ew'

const FormURL = `https://docs.google.com/forms/u/0/d/e/${FORM_ID}/formResponse`

// const FormURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSe1g0_Akay_Y2_CgvTHzVs29XFUgf_bzlEkQmloReHhzKe-Ew/formResponse'


exports.handler = async event => {

    const body = JSON.parse(event.body)

    let formData = new FormData()

    formData.append(NAME_ID, body.name)
    formData.append(EMAIL_ID, body.email)
    formData.append(MESSAGE_ID, body.message)

    const response = await fetch(FormURL, {
        method: 'POST',
        body: formData
    })

    console.log('response', response.status)
  
    //still need to do error handling
    return {
      statusCode: response.status,
      body: 'FUck YEak',
    }
  
  }