import { S3Client, ListObjectsV2Command, CopyObjectCommand, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
dotenv.config()

const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID,
    },
})

export async function copyS3Folder(src, dest) {
    try {
        const listCommand = new ListObjectsV2Command({
            Bucket: process.env.AWS_BUCKET_NAME,
            Prefix: src,
        });

        const { Contents } = await s3Client.send(listCommand);

        for (const obj of Contents) {
            const { Key } = obj;

            if (!Key) return;

            const destKey = Key.replace(src, dest);

            const copyCommand = new CopyObjectCommand({
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: destKey,
                CopySource: `${process.env.AWS_BUCKET_NAME}/${Key}`
            });

            await s3Client.send(copyCommand);

            console.log(`Copied ${Key} to ${destKey}`);
        }

        console.log("Coping complete!");
    } catch (err) {
        console.error("Error coping folder from S3:", err);
    }
}

export async function fetchS3Folder(src, dest) {
    try {
        const listCommand = new ListObjectsV2Command({
            Bucket: process.env.AWS_BUCKET_NAME,
            Prefix: src,
        });

        const { Contents } = await s3Client.send(listCommand);

        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }

        for (const obj of Contents) {
            const { Key } = obj;

            if (!Key) return;

            const destKey = Key.replace(src, dest)

            const dirname = path.dirname(destKey);


            if (!fs.existsSync(dirname)) {
                fs.mkdirSync(dirname, { recursive: true });
            }

            const { Body } = await s3Client.send(
                new GetObjectCommand({ Bucket: process.env.AWS_BUCKET_NAME, Key })
            );

            const fileStream = fs.createWriteStream(destKey);

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

export async function saveToS3(key, filePath, content) {
    try {
        const command = new PutObjectCommand({
            Bucket: process.env.AWS_BUCKET,
            Key: `${key}${filePath}`,
            Body: content,
        })

        await s3Client.send(command)
        console.log(`uploaded ${filePath}`)
    } catch (err) {
        console.log('Error uploaded file to S3', err)
    }
}
