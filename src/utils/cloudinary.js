import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv"
import fs from "fs"

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary= async (localFilePath)=>{
    console.log(localFilePath, "insise cloudinary")
    try{
        console.log("inside try 1")
        if(!localFilePath) {   return null }
        // upload the file on cloudinary

        const response= await cloudinary.uploader.upload(
            localFilePath,{
                resource_type:"auto"
            }
        )
         console.log("inside try 2")
        // file has been uploaded succesfully
        fs.unlinkSync(localFilePath);
        console.log("file is uploaded on cloudinary",response.url);
        return response

    }
    catch(err){
        console.log("error while uploading ", err)
        fs.unlinkSync(localFilePath) // remove the locally saved temporary  file as the upload operation got failed

        return null

    }
}

export {uploadOnCloudinary}