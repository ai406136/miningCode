import { http, token } from '@/api/http.js'
import qs from 'qs'
import { Toast } from 'mint-ui'
export default {
  login ({ commit, state }, data) {
    // return http.get(`/home/login/login?username=${data.username}&password=${data.password}`).then(res => res)
    return token.post('/home/login/login', qs.stringify(data)).then(res => res).catch(
      () => {
        Toast({
          message: '请求错误',
          position: 'center'
        })
      }
    )
  },
  getList ({ commit, state }, data) {
    return http.post('/home/miner/list', qs.stringify(data)).then(res => res).catch(
      () => {
        Toast({
          message: '请求错误',
          position: 'center'
        })
      }
    )
  },
  getDetail ({ commit, state }, data) {
    return http.post('/home/miner/detail', qs.stringify(data)).then(res => res).catch(
      () => {
        Toast({
          message: '请求错误',
          position: 'center'
        })
      }
    )
  },
  setPasd ({ commit, state }, data) {
    return http.post('/home/user/pwd', qs.stringify(data)).then(res => res).catch(
      () => {
        Toast({
          message: '请求错误',
          position: 'center'
        })
      }
    )
  },
  setRem ({ commit, state }, data) {
    return http.post('/home/miner/upd', qs.stringify(data)).then(res => res).catch(
      () => {
        Toast({
          message: '请求错误',
          position: 'center'
        })
      }
    )
  },
  compileMining ({ commit, state }, data) {
    return http.post('/home/miner/updProxypool1', qs.stringify(data)).then(res => res).catch(
      () => {
        Toast({
          message: '请求错误',
          position: 'center'
        })
      }
    )
  },
  setWallet ({ commit, state }, data) {
    return http.post('/home/miner/updproxywallet', qs.stringify(data)).then(res => res).catch(
      () => {
        Toast({
          message: '请求错误',
          position: 'center'
        })
      }
    )
  },
  resetMinig ({ commit, state }, data) {
    return http.post('/home/miner/restart', qs.stringify(data)).then(res => res).catch(
      () => {
        Toast({
          message: '请求错误',
          position: 'center'
        })
      }
    )
  },
  getTempData ({ commit, state }, data) {
    return http.post('/home/Miner/getTemp', qs.stringify(data)).then(res => res).catch(
      () => {
        Toast({
          message: '请求错误',
          position: 'center'
        })
      }
    )
  },
  getDateTimeTempData ({ commit, state }, data) {
    return http.post('/home/miner/getdaytemp', qs.stringify(data)).then(res => res).catch(
      () => {
        Toast({
          message: '请求错误',
          position: 'center'
        })
      }
    )
  }
}
