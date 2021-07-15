import axios from 'axios'

const  axiosNotToken = (endpoint, data, method = "GET")=>{
  const url = `https://pokeapi.co/api/v2/${endpoint}`;

  if(method === 'GET'){
    return axios(url);
  }else{
    return axios(url,{
      method,
      data
    });
  } 
}

export {axiosNotToken}