// 빈 값 체크
export function isEmpty(value) {
  let result = false
  if (typeof value === 'number') {
    if (value === 0) {
      return true
    }
  } else if (typeof value === 'string') {
    if (value === '' || value.length === 0) {
      return true
    }
  } else if (typeof value === 'object') {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return true
      }
    } else {
      if (Object.keys(value).length === 0) {
        return true
      }
    }
  }
  return result
}
// email 검사를 위한 정규식
export function isEmail(email) {
  const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i

  if (regEmail.test(email)) {
    return true
  }

  return false
}

// 휴대폰번호 검사를 위한 정규식
export function isPhoneNumber(phoneNumber) {
  const regPhoneNumber = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})([0-9]{3,4})([0-9]{4})$/

  if (regPhoneNumber.test(phoneNumber)) {
    return true
  }

  return false
}

// url 검사를 위한 정규식
export function isUrl(urlAdd) {
  const regUrl = /^(https?):\/\/([0-9a-zA-Z|-]+\.)+[a-zA-Z]{2,6}(|:[0-9]+)?(\/\S*)?/

  if (regUrl.test(urlAdd)) {
    return true
  }

  return false
}