import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'


const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', join(__dirname,'views'));
app.set('view engine','ejs');



export default app;