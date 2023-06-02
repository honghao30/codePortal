// 날짜 시간 
export function getTodayDate() {
  let weekdays = ['일', '월', '화', '수', '목', '금', '토']
  let today = new Date()
  let year = today.getFullYear()
  let month = today.getMonth() + 1
  let day = today.getDate()
  let hours = today.getHours()
  let minutes = today.getMinutes()
  let dayOfWeek = weekdays[today.getDay()]
  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day;
  let timeOfDay = hours < 12 ? '오전' : '오후'
  hours = hours % 12 || 12
  minutes = minutes < 10 ? '0' + minutes : minutes

  let TodayDateFull = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes} 분 ${timeOfDay} (${dayOfWeek})`
  let TodayData = `${month}월 ${day}일 ${dayOfWeek}`
  let currentTime = `${timeOfDay} ${hours}시 ${minutes}분`

  return [ TodayDateFull, TodayData, currentTime ]
}
  
//   import { getCurrentTime } from './time.js';

//   let currentTime = getCurrentTime();
//   console.log(currentTime);

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
