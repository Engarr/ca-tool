export function convertFormData(
  json: any,
  formData: FormData = new FormData(),
  parentKey?: string
): FormData {
  function appendFormData(data: any, key: string) {
    if (Array.isArray(data)) {
      data.forEach((value, index) => {
        appendFormData(value, `${key}[${index}]`)
      })
    } else if (typeof data === "object" && data !== null) {
      Object.keys(data).forEach((innerKey) => {
        if (parentKey) {
          appendFormData(data[innerKey], `${parentKey}.${innerKey}`)
        } else {
          appendFormData(data[innerKey], innerKey)
        }
      })
    } else {
      formData.append(key, data)
    }
  }

  appendFormData(json, parentKey || "")

  return formData
}
