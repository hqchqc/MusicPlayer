export const usrNumberFormat = (value: number): { value?: number; unit?: string } => {
  let param = {}
  let i = 0
  const k = 1000
  const sizes = ['', '千', '万', '亿']

  if (value < k) {
    param = {
      ...param,
      value,
      unit: '',
    }
  }
  else {
    i = Math.floor(Math.log(value) / Math.log(k))
    param = {
      ...param,
      value: ((value / k ** i)).toFixed(0),
      unit: sizes[i],
    }
  }

  return param
}
