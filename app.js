const express = require("express");
const S3 = require("aws-sdk/clients/s3");

const app = express();
const port = 5050;

// Configure AWS with your access and secret key.

const s3 = new S3({
  endpoint: "https://nyc3.digitaloceanspaces.com",
  region: "us-east-1",
  credentials: {
    accessKeyId: "",
    secretAccessKey: "",
  },
});

// Function to delete an image from DigitalOcean Spaces bucket
const deleteImage = async (bucketName, imageName) => {
  const params = {
    Bucket: bucketName,
    Key: imageName,
  };

  try {
    await s3.deleteObject(params).promise();
    console.log(`Image ${imageName} deleted successfully from ${bucketName}`);
  } catch (error) {
    if (error.code === "NoSuchKey") {
      console.error(`Object not found during deletion: ${imageName}`);
      return;
    }
    throw error;
  }
};

app.get("/", (req, res) => {
  deleteImage("my-bucket", "images/image.png");
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
