export function formatDate(date) {
  if (date) {
    const d = new Date(date)
    const h = d.getFullYear()
    const m = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1
    const dd = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
    const hh = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours()
    const mm = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes()
    const ss = d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds()
    return `${h}-${m}-${dd} ${hh}:${mm}:${ss}`
  }
  return ''
}
