import { useState, useCallback } from 'react'
import isEmail from 'validator/es/lib/isEmail'

export const useFormWithValidation = () => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)

  const handleChange = (event) => {
    const input = event.target
    const { value, name } = input

    if (name === 'name' && input.validity.patternMismatch) {
      input.setCustomValidity('Имя должно содержать только латиницу, кириллицу, пробел, дефис или цифры.')
    } else {
      input.setCustomValidity('')
    }

    if (name === 'email') {
      if (!isEmail(value)) {
        input.setCustomValidity('Некорректый email.')
      } else {
        input.setCustomValidity('')
      }
    }

    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: input.validationMessage })
    setIsValid(input.closest('form').checkValidity())
  }
  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues)
      setErrors(newErrors)
      setIsValid(newIsValid)
    },
    [setValues, setErrors, setIsValid]
  )

  return { values, errors, isValid, handleChange, resetForm, setIsValid }
}