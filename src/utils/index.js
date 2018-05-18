// import api from './api'
// console.log(api)
export const hashrate = (data = {}) => {
  let num = 0
  let nameArr = []
  let dataArr = []
  // let data = {
  //   "hash": {
  //     "1": {
  //       "2018-04-25 18:47:24": "66.70",
  //       "2018-04-25 19:47:24": "63.70",
  //       "2018-04-25 20:47:24": "63.47",
  //       "2018-04-25 21:47:24": "63.30",
  //       "2018-04-25 22:47:24": "63.30",
  //       "2018-04-25 23:47:24": "66.00",
  //       "2018-04-25 17:47:24": "64.20"
  //     },
  //     "2": {
  //       "2018-04-25 18:47:24": "73.13",
  //       "2018-04-25 19:47:24": "73.13",
  //       "2018-04-25 20:47:24": "73.37",
  //       "2018-04-25 21:47:24": "73.10",
  //       "2018-04-25 22:47:24": "73.10",
  //       "2018-04-25 23:47:24": "75.00",
  //       "2018-04-25 17:47:24": "20.00"
  //     }
  //   }
  // }
  if (!data) {
    data = {}
  }
  for (let i in data) {
    num++
    let dataArrData = []
    nameArr.push(`gpu${num}`)
    for (let j in data[i].hash) {
      dataArrData.push(data[i].hash[j])
    }
    dataArr.push({
      name: `gpu${num}`,
      type: 'line',
      data: dataArrData
    })
  }
  // if (data.hash && data.hash['1'] && data.hash['1'].constructor.name === 'Object') {
  //   Object.keys(data.hash).forEach((v, i) => {
  //     num++
  //     let dataArrData = []
  //     for (let j in data.hash[v]) {
  //       dataArrData.push(data.hash[v][j])
  //     }
  //     nameArr.push(`gpu${num}`)
  //     dataArr.push(
  //       {
  //         name: `gpu${num}`,
  //         type: 'line',
  //         data: dataArrData
  //       }
  //     )
  //   })
  // } else {
  //   nameArr.push('gpu1')
  //   let dataArrData = []
  //   for (let i in data.hash) {
  //     dataArrData.push(data.hash[i])
  //   }
  //   dataArr.push(
  //     {
  //       name: `gpu${num}`,
  //       type: 'line',
  //       data: dataArrData
  //     }
  //   )
  // }
  // console.log(nameArr, dataArr)
  let option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      left: 'center',
      top: '0%',
      data: nameArr
    },
    xAxis: {
      type: 'category',
      splitLine: { show: false },
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '20%',
      containLabel: true
    },
    yAxis: {
      type: 'value',
      name: '算力'
    },
    series: dataArr
  }
  return option
}

export const hashrateTime = (val = {}) => {
  let data = val || {}
  let num = 0
  let nameArr = []
  let axisArr = []
  let dataArr = []
  if (!data) {
    data = {}
  }
  for (let i in data) {
    num++
    let dataArrData = []
    nameArr.push(`gpu${num}`)
    for (let j in data[i].hash) {
      let e = j.split(' ')
      axisArr.push(e[1])
      dataArrData.push(data[i].hash[j])
    }
    dataArr.push({
      name: `gpu${num}`,
      type: 'line',
      data: dataArrData
    })
  }
  // if (data.hash && data.hash['1'] && data.hash['1'].constructor.name === 'Object') {
  //   Object.keys(data.hash).forEach((v, i) => {
  //     num++
  //     let dataArrData = []
  //     for (let j in data.hash[v]) {
  //       dataArrData.push(data.hash[v][j])
  //     }
  //     nameArr.push(`gpu${num}`)
  //     dataArr.push(
  //       {
  //         name: `gpu${num}`,
  //         type: 'line',
  //         data: dataArrData
  //       }
  //     )
  //   })
  // } else {
  //   nameArr.push('gpu1')
  //   let dataArrData = []
  //   for (let i in data.hash) {
  //     dataArrData.push(data.hash[i])
  //   }
  //   dataArr.push(
  //     {
  //       name: `gpu${num}`,
  //       type: 'line',
  //       data: dataArrData
  //     }
  //   )
  // }
  axisArr = new Set(axisArr)
  let option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      left: 'center',
      top: '0%',
      data: nameArr
    },
    xAxis: {
      type: 'category',
      splitLine: { show: false },
      data: Array.from(axisArr)
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '20%',
      containLabel: true
    },
    yAxis: {
      type: 'value',
      name: '当日算力'
    },
    series: dataArr
  }
  return option
}

export const CpuTemperatureTime = (val = {}) => {
  let data = val || {}
  let num = 0
  let nameArr = []
  let axisArr = []
  let dataArr = []
  // let data = {
  //   "temp": {
  //     "1": {
  //       "2018-04-25 18:47:24": "66.70",
  //       "2018-04-25 19:47:24": "63.70",
  //       "2018-04-25 20:47:24": "63.47",
  //       "2018-04-25 21:47:24": "63.30",
  //       "2018-04-25 22:47:24": "63.30",
  //       "2018-04-25 23:47:24": "66.00",
  //       "2018-04-25 17:47:24": "64.20"
  //     },
  //     "2": {
  //       "2018-04-25 18:47:24": "73.13",
  //       "2018-04-25 19:47:24": "73.13",
  //       "2018-04-25 20:47:24": "73.37",
  //       "2018-04-25 21:47:24": "73.10",
  //       "2018-04-25 22:47:24": "73.10",
  //       "2018-04-25 23:47:24": "75.00",
  //       "2018-04-25 17:47:24": "20.00"
  //     }
  //   }
  // }
  if (!data) {
    data = {}
  }
  for (let i in data) {
    num++
    let dataArrData = []
    nameArr.push(`gpu${num}`)
    for (let j in data[i].temp) {
      let e = j.split(' ')
      axisArr.push(e[1])
      dataArrData.push(data[i].temp[j])
    }
    dataArr.push({
      name: `gpu${num}`,
      type: 'line',
      data: dataArrData
    })
  }
  // if (data.temp && data.temp['1'] && data.temp['1'].constructor.name === 'Object') {
  //   Object.keys(data.temp).forEach((v, i) => {
  //     num++
  //     let dataArrData = []
  //     for (let j in data.temp[v]) {
  //       dataArrData.push(data.temp[v][j])
  //       let e = j.split(' ')
  //       axisArr.push(e[1])
  //     }
  //     nameArr.push(`gpu${num}`)
  //     dataArr.push(
  //       {
  //         name: `gpu${num}`,
  //         type: 'line',
  //         data: dataArrData
  //       }
  //     )
  //   })
  // } else {
  //   nameArr.push('gpu1')
  //   let dataArrData = []
  //   for (let i in data.temp) {
  //     dataArrData.push(data.temp[i])
  //     let e = i.split(' ')
  //     axisArr.push(e[1])
  //   }
  //   dataArr.push(
  //     {
  //       name: `gpu${num}`,
  //       type: 'line',
  //       data: dataArrData
  //     }
  //   )
  // }
  axisArr = new Set(axisArr)
  let option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      left: 'center',
      top: '0%',
      data: nameArr
    },
    xAxis: {
      type: 'category',
      splitLine: { show: false },
      data: Array.from(axisArr)
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '20%',
      containLabel: true
    },
    yAxis: {
      type: 'value',
      name: '当日温度'
    },
    series: dataArr
  }
  return option
}

export const CpuTemperature = (data) => {
  let num = 0
  let nameArr = []
  let dataArr = []
  if (!data) {
    data = {}
  }
  for (let i in data) {
    num++
    let dataArrData = []
    nameArr.push(`gpu${num}`)
    for (let j in data[i].temp) {
      dataArrData.push(data[i].temp[j])
    }
    dataArr.push({
      name: `gpu${num}`,
      type: 'line',
      data: dataArrData
    })
  }
  // if (data.temp && data.temp['1'] && data.temp['1'].constructor.name === 'Object') {
  //   Object.keys(data.temp).forEach((v, i) => {
  //     num++
  //     let dataArrData = []
  //     for (let j in data.temp[v]) {
  //       dataArrData.push(data.temp[v][j])
  //     }
  //     nameArr.push(`gpu${num}`)
  //     dataArr.push(
  //       {
  //         name: `gpu${num}`,
  //         type: 'line',
  //         data: dataArrData
  //       }
  //     )
  //   })
  // } else {
  //   nameArr.push('gpu1')
  //   let dataArrData = []
  //   for (let i in data.temp) {
  //     dataArrData.push(data.temp[i])
  //   }
  //   dataArr.push(
  //     {
  //       name: `gpu${num}`,
  //       type: 'line',
  //       data: dataArrData
  //     }
  //   )
  // }
  let option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      left: 'center',
      top: '0%',
      data: nameArr
    },
    xAxis: {
      type: 'category',
      splitLine: { show: false },
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '20%',
      containLabel: true
    },
    yAxis: {
      type: 'value',
      name: '温度'
    },
    series: dataArr
  }
  return option
}

export const logout = () => {
  // 退出账号
  localStorage.clear()
  window.location.reload()
}

export const hassClass = (el, className) => {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export const addClass = (el, className) => {
  if (hassClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export const remClass = (el, className) => {
  if (!hassClass(el, className)) {
    return
  }
  let rmCl = el.className.split(' ')
  rmCl.splice(rmCl.indexOf(className), 1)
  el.className = rmCl.join(' ')
}

export const touchDoms = (dom, name) => {
  if (typeof dom !== 'object') {
    return
  }
  let liDom = null
  dom.path.forEach(val => {
    if (val.nodeName === 'LI') {
      liDom = val
    }
  })
  if (liDom) {
    if (name === 'add') {
      addClass(liDom, 'home-li_click')
    } else {
      remClass(liDom, 'home-li_click')
    }
  }
}
export const getDate = () => {
  var d = new Date()
  var str = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
  return str
}

// export const pushTencent = (name, api) => {
//   // 注册设备并绑定用户账号
//   var tencentPush = api.require('tencentPush')

//   var resultCallback = function (ret, err) {
//     console.log('注册成功')
//   }

//   // 需要绑定的账号，若为'*'表示解除之前的账号绑定
//   var params = { account: name }
//   tencentPush.registerPush(params, resultCallback)
// }
