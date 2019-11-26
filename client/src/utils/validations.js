export const required = value => value ? undefined : 'This field cannot be left blank'

export const requiredAndTrimmed = (value) => {
    return (value && !(/^\s+$/.test(value)) ? undefined : 'This field cannot be left blank')
}

export const maxLength = max => value => {
    return value && value.length > max ? `Must be ${max} characters or less` : undefined
}

export const minLength = min => value => {
    return value && value.length < min ? `Must be ${min} characters or more` : undefined
}

export const maxLength15 = maxLength(15)

export const toUpper = value => value && value.toUpperCase();

export const number = value => {
    return value && isNaN(Number(value)) ? 'Must be a number' : undefined
}

export const minValue = min => value => {
    return value && value < min ? `Must be at least ${min}` : undefined
}

export const maxValue = max => value => {
    return value && value > max ? `Must be ${max} at max` : undefined
}

export const minValue18 = minValue(18)

export const nameRegex = value => value && /^[a-zA-Z\s]*$/.test(value) ?
    undefined : 'Name should contain only alphabets'

export const emailRegex = value => value && /^(?=.{6,254}$)[A-Za-z0-9_\-\.]{1,64}\@[A-Za-z0-9_\-\.]+\.[A-Za-z]{2,}$/.test(value) ?
    undefined : 'Invalid email'

export const phoneNumberRegex = value => value && /^[6789]\d{9}$/.test(value) ?
    undefined : 'Invalid mobile number'

export const onlyNumber = (value) => {
    let result;
    if (!value) return undefined;
    result = (/^(\d)*$/.test(value)) ? undefined : 'Please enter number only (and no special characters)'
    return result;
}