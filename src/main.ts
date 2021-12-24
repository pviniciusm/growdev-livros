import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

// teste

app.listen(8081, () => console.log("Server is running..."));
