import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_KEY)

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Not Allowed' })
  }

  const data = req.body.data

  const { phone, customer_number } = data
  try {
    const html = `Phone: ${phone} <br> Customer Number: ${customer_number}`

    const msg = {
      to: process.env.TO_EMAIL,
      from: process.env.VERIFIED_SENDGRID_SENDER,
      subject: 'Revoke My Doorbell Account',
      text: `Phone: ${phone}\nCustomer Number: ${customer_number}`,
      html: html,
    }

    await sgMail.send(msg)

    res.json({ message: `Email has been sent to our inbox!` })
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' })
  }
}
