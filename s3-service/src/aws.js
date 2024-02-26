import { S3Client, ListObjectsV2Command, CopyObjectCommand } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';
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
