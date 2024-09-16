import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_KEY)

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const data = req.body.data

  const { email, firstName, lastName, phone, company, message } = data
  try {
    const html = `${firstName} ${lastName} <br> Phone: ${phone} <br> Company: ${company} <br> Message: ${message}`

    const msg = {
      to: email,
      from: process.env.VERIFIED_SENDGRID_SENDER,
      subject: 'List My Business',
      text: `Name: ${firstName} ${lastName}\nPhone: ${phone}\nCompany: ${company}\nMessage: ${message}`,
      html: html,
    }

    // await sgMail.send(msg)
    console.log(msg)

    res.json({ message: `Email has been sent to our inbox!` })
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' })
  }
}
