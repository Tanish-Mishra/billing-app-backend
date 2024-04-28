const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;
const client = require('twilio')(accountSid, authToken);

const sendInvoice = async(whatsappNumber,invoiceUrl) => {
 try {
  const response =  await client.messages
    .create({
        mediaUrl: [`${invoiceUrl}`],
        body: `Invoice! Thank You for Choosing Us!`,
        from: 'whatsapp:+14155238886',
        to: `whatsapp:+91${whatsappNumber}`
    })
    return response
} catch(error) {
    console.log(error)
    return null
}
}

module.exports = {
    sendInvoice
}