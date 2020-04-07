import axios from "axios"

export function request(config) {

  const instance=axios.create({
    // baseURL :"http://152.136.185.210:8000/api/h3",
    baseURL: "http://152.136.185.210:8000/api/h8",
    timeout:5000
  })

  instance.interceptors.request.use(
    config=>{
      return config
    },
    error => {
      console.log(error);
    }
  )
  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{
    console.log(err);
  })

  return instance(config)
}
