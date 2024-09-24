async function formatFormData(data) {
  const toTitleCase = (str) => {
    return str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
    )
  }
  Object.keys(data).forEach((key) => {
    if (['first-name', 'last-name', 'company'].includes(key)) {
      data[key] = toTitleCase(data[key])
    } else if (key === 'email') {
      data[key] = data[key].toLowerCase()
    } else if (key === 'message') {
      data[key] = data[key].replace(/\n/g, '<br>')
    }
  })

  return data
}

export default formatFormData
