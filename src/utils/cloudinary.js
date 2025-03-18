import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath, publicId = null) => {
  if (!localFilePath) return null;

  try {
    const options = {
      resource_type: "auto",
    };

    if (publicId) {
      options.public_id = publicId;
    }

    const response = await cloudinary.uploader.upload(localFilePath, options);
    console.log(" File uploaded successfully:", response.url);

    await fs.unlink(localFilePath); // Clean up temporary file
    return response;
  } catch (error) {
    console.error(" Cloudinary upload error:", error.message);

    try {
      await fs.unlink(localFilePath); // Ensure file is deleted if upload fails
    } catch (unlinkError) {
      console.error(" Failed to delete temporary file:", unlinkError.message);
    }

    return null;
  }
};
export { uploadOnCloudinary };
