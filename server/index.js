const express = require('express');
// const multer = require('multer');
// const { spawn } = require('child_process');
// const fs = require('fs');

const app = express();
app.use(express.json());
// const upload = multer({ dest: 'uploads/' });

app.get("/", (req, res) => {
    res.send("string works!");
})

app.get("/api", async (req, res) => {
    res.json({r: "json works!"});
  });

// app.post('/split', upload.single('song'), (req, res) => {
//     const songFile = req.file;

//     // Define path for the uploaded file
//     const songPath = songFile.path;

//     // Define output paths for separated audio files
//     const vocalsPath = `${songPath}_vocals.wav`;
//     const accompanimentPath = `${songPath}_accompaniment.wav`;

//     // Define command for Spleeter separation
//     const spleeterCommand = `spleeter separate -i ${songPath} -o ${songPath}`;

//     // Run Spleeter command
//     const spleeterProcess = spawn(spleeterCommand, [], { shell: true });

//     spleeterProcess.on('close', (code) => {
//         if (code === 0) {
//             // Spleeter process finished successfully, return the separated audio files
//             res.json({ vocals: vocalsPath, accompaniment: accompanimentPath });
//         } else {
//             res.status(500).json({ error: 'Error processing audio with Spleeter' });
//         }
//     });
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
