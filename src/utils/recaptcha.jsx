export async function verifyToken(token) {
  const recaptchaURL = 'https://www.google.com/recaptcha/api/siteverify'
  const requestHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
  const requestBody = new URLSearchParams({
    secret: process.env.RECAPTCHA_SERVER_KEY,
    response: token,
  })

  const response = await fetch(recaptchaURL, {
    method: 'POST',
    headers: requestHeaders,
    body: requestBody.toString(),
  })

  const responseData = await response.json()

  if (response.status < 200 || response.status > 299) {
    return new Response(JSON.stringify(responseData), {
      status: response.status,
    })
  }

  const score = responseData.score

  if (!score) {
    return new Response(JSON.stringify(responseData), { status: 403 })
  }

  if (score < 0.8) {
    return new Response(JSON.stringify({ message: 'error' }), { status: 403 })
  } else {
    return new Response(JSON.stringify({ message: 'success' }), { status: 200 })
  }
}
