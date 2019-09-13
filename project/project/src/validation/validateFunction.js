import validateObject from './validateObject.js'
import validatejs from 'validate.js'

export default function validate (fieldName, value) {
  var formValues = {}
  formValues[fieldName] = value
  var formFields = {}
  formFields[fieldName] = validateObject[fieldName]
  var result = validatejs(formValues, formFields)
  console.log(formValues)
  if (result) {
    return result[fieldName][0]
  }
  return null
}
