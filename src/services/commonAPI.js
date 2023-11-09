import axios from "axios"
// const { default: axios } = require("axios")

export const commonAPI = async (httpMethod, url, reqbody)=>{
    const reqconfig = {
        method: httpMethod,
        url:url,
        data:reqbody,
        Headers:{
            "Content-Type":"application/json"
        }
    }
    return await axios(reqconfig).then((result)=>{
        return result
    }).catch((error)=>{
        return error
    })
    }

 