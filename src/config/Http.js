import axios from 'axios'

class Http {
  constructor(){
    let API =  axios.create({
      baseURL: `http://localhost:1000`
    })
    this.API = API
    this.init()
  }
  request (method, path, params)  {
    return this.API.request({
      url: path,
      method:method,
      params: params,
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},

    }) 
    .then(response => {
      return response
    })
    .catch((error => {
      console.log(error)
    }))

  }
  post (path, params) {
    return this.request('POST',path,params)
  }
  get (path, params)  {
    return this.request('GET',path,params)
  }
  init() {
    this.API.interceptors.request.use(function (config) {
      // Do something before request is sent
      return config
    }, function (error) {
      // Do something with request error
      return Promise.reject(error)
    })

    // Add a response interceptor
    this.API.interceptors.response.use(function (response) {
      // Do something with response data
      console.log(response)

      return response.data
    }, function (error) {
      // Do something with response error
      return Promise.reject(error)
    })
  }
}

export default Http