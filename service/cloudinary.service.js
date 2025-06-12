const cloudinary = require('cloudinary').v2;
const fs = require('fs');


cloudinary.config({ 
        cloud_name: 'dvytvjplt', 
        api_key: '626471524586789', 
        api_secret: 'heHWDv4ICug071mQibo-LGHRKSA' // Click 'View API Keys' above to copy your API secret
    });
    

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        });
        console.log('File is uploaded on cloudinary', response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // Remove the locally saved temporary files
        return null;
    }
}


export {uploadOnCloudinary};


