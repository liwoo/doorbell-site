// pages/api/verify-recaptcha.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { token } = req.body

  const secretKey = process.env.RECAPTCHA_SERVER_KEY

  const recaptchaURL = 'https://www.google.com/recaptcha/api/siteverify'

  try {
    const response = await fetch(recaptchaURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    })

    const responseData = await response.json()

    if (responseData.success && responseData.score >= 0.8) {
      return res
        .status(200)
        .json({ message: 'Success', score: responseData.score })
    } else {
      return res
        .status(403)
        .json({ message: 'Recaptcha failed', score: responseData.score })
    }
  } catch (error) {
    console.error('Recaptcha verification failed', error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}
