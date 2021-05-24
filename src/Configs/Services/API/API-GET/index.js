import axios from 'axios'

const Get = ( path) => {
  const promise = new Promise((resolve, reject)=>{
    axios.get(`${process.env.REACT_APP_BASE_API}/${path}`)
    .then((result)=>{
      resolve(result.data);
    },(err)=>{
      reject(err);
    })
  })
  return promise
}

export default Get;