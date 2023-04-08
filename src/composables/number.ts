export function usrNumberFormat(num: number, point: number): string {
  // 将数字转换为字符串,然后通过split方法用.分隔,取到第0个
  const numStr = num.toString().split('.')[0]
  let result = ''
  if (numStr.length < 6) { // 判断数字有多长,如果小于6,,表示10万以内的数字,让其直接显示
    result = numStr
  }
  else if (numStr.length >= 6 && numStr.length <= 8) { // 如果数字大于6位,小于8位,让其数字后面加单位万
    const decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point)
    // 由千位,百位组成的一个数字
    result = `${parseFloat(`${parseInt((num / 10000).toString())}.${decimal}`)}万`
  }
  else if (numStr.length > 8) { // 如果数字大于8位,让其数字后面加单位亿
    const decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point)
    result = `${parseFloat(`${parseInt((num / 100000000).toString())}.${decimal}`)}亿`
  }

  return result
}
