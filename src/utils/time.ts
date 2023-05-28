export const getTimeRemainDraw = (endTime: number) => {
  const now = Date.now()

  if (now >= endTime) {
    return `00d:00h:00m`
  }

  let remain = (endTime - now) / 1000
  const dd = pad(Math.floor(remain / 86400))
  remain %= 86400
  const hh = pad(Math.floor((remain / 60 / 60) % 60))
  const mm = pad(Math.floor((remain / 60) % 60))
  const ss = pad(Math.floor(remain % 60))
  return `${dd}d:${hh}h:${mm}m`
}

function pad(num) {
  return '0'.concat(num.toString()).substr(-2)
}
