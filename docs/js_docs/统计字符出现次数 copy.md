# 统计字符出现的次数

```js
 function getCount(str) {
      let arr = str.split('')
      let obj = arr.reduce((pre, cur) => {
        if (pre.hasOwnProperty(cur)) {
          pre[cur] += 1;
        } else {
          pre[cur] = 1
        }
        return pre
      }, {})
      return obj;
    }

    let str = 'aasssddsfadadfadfad1122333'
    let obj = getCount(str)
    console.log(obj)
    for (const [key, value] of Object.entries(obj)) {
      console.log(`字符${key}出现了${value}`)
    }
```