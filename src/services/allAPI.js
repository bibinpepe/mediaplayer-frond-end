import {commonAPI} from "./commonAPI"
import {serverURL} from "./serverURL"




// upload  video

export const uploadVideo = async(reqbody)=>{
  return await commonAPI(`POST`,`${serverURL}/videos`,reqbody)
}

// get all uploaded videos

export const getAllVideos = async()=>{
  //return the response to view.jsx component
  return await commonAPI('GET',`${serverURL}/videos`,"")
}

// to delete a video
export const deleteVideo = async(id)=>{

  return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

//add history
export const addtohistory = async(videoDetails)=>{

  return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

//API to get history from json-server
export const getallHistory = async()=>{

  return await commonAPI('GET',`${serverURL}/history`,"")
}
// api call to delete video history
export const deleteVideoHistory = async(id)=>{

  return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

// API to add category
export const addAllCategory = async(body)=>{

  return await commonAPI('POST',`${serverURL}/categories`,body)
}

// api call to get categories from json 
export const getAllcategories = async()=>{

  return await commonAPI('GET',`${serverURL}/categories`,"")
}

//api to delete category
export const deleteCategory = async(id)=>{

  return await commonAPI('DELETE',`${serverURL}/categories/${id}`,{})
}

//API call to get particular video from

export const getAVideo = async(id)=>{

  return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}

//API to update category with new videos

export const updateCategory = async(id,body)=>{
  await commonAPI(`PUT`,`${serverURL}/categories/${id}`,body)
}