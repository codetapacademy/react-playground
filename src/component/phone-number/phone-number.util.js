export const isValidUKPhoneNumber = number =>
  number.replace(/\s+/, '').length === 11
