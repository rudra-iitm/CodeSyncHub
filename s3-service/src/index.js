import express from 'express';
import { downloadFolderFromS3 } from './aws.js';
import 'dotenv/config'

const app = express();

app.get('/:folderid', async (req, res) => {
    await downloadFolderFromS3('code-sync-hub', 'vite-project/', 'vite-project/');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});