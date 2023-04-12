// import { extend } from 'umi-request'
// import router from '@/router'
// import { Button, message } from 'antd'
// // import notification from 'ant-design-vue/es/notification'
// import {config} from '@/config/defaultConfig.js'

// const codeMessage = {
//   200: '服务器成功返回请求的数据。',
//   201: '新建或修改数据成功。',
//   202: '一个请求已经进入后台排队（异步任务）。',
//   204: '删除数据成功。',
//   400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
//   401: '用户没有权限（令牌、用户名、密码错误）。',
//   403: '用户得到授权，但是访问是被禁止的。',
//   404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
//   406: '请求的格式不可得。',
//   410: '请求的资源被永久删除，且不会再得到的。',
//   422: '当创建一个对象时，发生一个验证错误。',
//   500: '服务器发生错误，请检查服务器。',
//   502: '网关错误。',
//   503: '服务不可用，服务器暂时过载或维护。',
//   504: '网关超时。'
// }

// /**
//  * 异常处理程序
//  */
// const errorHandler = (error) => {
//   const { response } = error
//   if (response && response.status) {
//     const errorText = codeMessage[response.status] || response.statusText
//     const { status, url } = response
//     console.log('in');
//     // message.error({
//     //   message: `请求错误 ${status}: ${url}`,
//     //   description: errorText
//     // })
//   } else if (!response) {
//     // message.error({
//     //   description: '您的网络发生异常，无法连接服务器',
//     //   message: '网络异常'
//     // })
//   }
//   return response
// }

// /**
//  * 配置request请求时的默认参数
//  */
// const client = extend({
//   errorHandler, // 默认错误处理
//   prefix: config.api,
//   timeout: 600000
// })
// // request拦截器, 改变url 或 options
// client.interceptors.request.use((url, options) => {
//   const headers = localStorage.getItem('bi-X-Auth-Token')
//     ? {
//       Authorization: `Bearer ${localStorage.getItem('bi-X-Auth-Token')}`
//     }
//     : {}

//   return {
//     url,
//     options: { ...options, headers }
//   }
// }, { global: false })

// const key = 'updatable'
// // 克隆响应对象做解析处理
// client.interceptors.response.use(async (response) => {
//   try {
//     const data = await response.clone().json()

//     if (data && (data.error === 4003 || data.error === 4002)) {
//       // notification.error({
//       //   description: '登录已过期，请重新登录',
//       //   message: '提示',
//       //   key
//       // })
//       localStorage.removeItem('bi-user_name')
//       localStorage.removeItem('bi-user_password')
//       localStorage.removeItem('bi-X-Auth-Token')
//       localStorage.removeItem('bi-oac_email')
//       localStorage.removeItem('bi-oac_url')
//       window.__POWERED_BY_QIANKUN__ ? (window.location.href = '/#/') : router.replace('/user/login')
//       return
//     }
//   } catch (error) {

//   }
//   return response
// })

// export default client

