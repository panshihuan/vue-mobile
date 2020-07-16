export const valueToLabel = (value, arr) => {
  return arr.find(item => item.value === value).label
}
