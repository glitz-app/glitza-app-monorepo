import { Storage } from "@google-cloud/storage";

const storage = new Storage();
const bucketName = "your-bucket-name";

async function uploadImage(file: Buffer, filename: string): Promise<string> {
  const bucket = storage.bucket(bucketName);
  const blob = bucket.file(filename);

  return new Promise((resolve, reject) => {
    const blobStream = blob.createWriteStream({
      resumable: false,
    });

    blobStream.on("error", (err) => reject(err));
    blobStream.on("finish", () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      resolve(publicUrl);
    });

    blobStream.end(file);
  });
}

export default uploadImage;
