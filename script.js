const daysEl = document.querySelector(".cd_days")
const hoursEl = document.querySelector(".cd_hours")
const minutesEl = document.querySelector(".cd_minutes")
const secondsEl = document.querySelector(".cd_seconds")

const countdown = () => {
  const currentYear = new Date().getFullYear()
  const launchDate = new Date(`December 31 ${currentYear}`)
  const currentTime = new Date().getTime()

  const gap = launchDate - currentTime

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const days = hour * 24

  const dayText = Math.floor(gap / days)
  const hourText = Math.floor((gap % days) / hour)
  const minuteText = Math.floor((gap % hour) / minute)
  const secondText = Math.floor((gap % minute) / second)

  /**
   * @param {number} num
   */
  const format = (num) => {
    return num > 9 ? num : '0' + num;
  }

  daysEl.innerHTML = `${format(dayText)} <sup>Days</sup>`
  hoursEl.innerHTML = `${format(hourText)} <sup>Hours</sup>`
  minutesEl.innerHTML = `${format(minuteText)} <sup>Minutes</sup>`
  secondsEl.innerHTML = `${format(secondText)} <sup>Seconds</sup>`
}

countdown()

setInterval(countdown, 1000)
