import express from 'express';
import { generateSlug } from 'random-word-slugs'
import { copyS3Folder } from './aws.js';
import dotenv from 'dotenv';
import { z } from 'zod';
import cors from 'cors';
dotenv.config()

const app = express();
app.use(express.json());
app.use(cors())

app.post('/project', async (req, res) => {

    const projectSchema = z.object({
        tech: z.string(),
        replId: z.string().optional()
    });

    var { tech, replId } = req.body;

    if (!replId) {
        replId = generateSlug();
    }

    const { success } = projectSchema.safeParse({ tech, replId });
    if (!success) {
        return res.status(400).json({ message: 'Invalid Input' });
    }

    await copyS3Folder(`templates/${tech}`, `work_space/${replId}`);

    return res.status(200).json({ message: `Project created at ${replId}`, id: replId });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});