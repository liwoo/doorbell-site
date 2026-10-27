import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_KEY)

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Not Allowed' })
  }

  const data = req.body.data || {}

  const name =
    data.name || [data.firstName, data.lastName].filter(Boolean).join(' ')
  const fields = [
    ['Name', name],
    ['Company', data.company],
    ['Email', data.email],
    ['Phone', data.phone],
    ['Wants', data.track],
    ['Business type', data.industry],
    ['Monthly deliveries', data.volume],
    ['Message', data.message],
  ].filter(([, value]) => value)

  const isB2bLead = data.source === 'b2b-landing'

  try {
    const msg = {
      to: process.env.TO_EMAIL,
      from: process.env.VERIFIED_SENDGRID_SENDER,
      replyTo: data.email || undefined,
      subject: isB2bLead
        ? `New delivery lead: ${data.company || name}`
        : 'List My Business on Doorbell',
      text: fields.map(([label, value]) => `${label}: ${value}`).join('\n'),
      html: fields
        .map(
          ([label, value]) =>
            `<strong>${label}:</strong> ${escapeHtml(value).replace(/\n/g, '<br>')}`
        )
        .join('<br>'),
    }

    await sgMail.send(msg)

    res.json({ message: `Email has been sent to our inbox!` })
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' })
  }
}
