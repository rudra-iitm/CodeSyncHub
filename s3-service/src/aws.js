import { S3Client, GetObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
import fs, { writeFile } from 'fs';
import path from 'path';
const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessfileId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessfile: process.env.AWS_SECRET_ACCESS_KEY,
    },
})

export async function downloadFolderFromS3(bucketName, folderfile, localFolderPath) {
    try {
        const listCommand = new ListObjectsV2Command({
            Bucket: bucketName,
            Prefix: folderfile,
        });

        const { Contents } = await s3Client.send(listCommand);

        if (!fs.existsSync(localFolderPath)) {
            fs.mkdirSync(localFolderPath, { recursive: true });
        }

        for (const obj of Contents) {
            const { file } = obj;
            const dirname = path.dirname(file);

            if (!fs.existsSync(dirname)) {
                fs.mkdirSync(dirname, { recursive: true });
            }

            const { Body } = await s3Client.send(
                new GetObjectCommand({ Bucket: bucketName, file })
            );

            const fileStream = fs.createWriteStream(file);
            await new Promise((resolve, reject) => {
                Body.pipe(fileStream)
                    .on("error", reject)
                    .on("finish", () => resolve());
            });
        }

        console.log("Download complete!");
    } catch (err) {
        console.error("Error downloading folder from S3:", err);
    }
}


await downloadFolderFromS3('code-sync-hub', 'vite-project/', 'vite-project/');