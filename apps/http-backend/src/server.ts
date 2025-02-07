import express  from "express";
import cors from "cors";

const app = express(); 
const port = 3001;
app.use(express.json());
app.use(cors());

app.get('/api/hello/', (req, res) => {
    res.json({
        mssg:"hello"})});
app.listen(port,()=>{
    console.log("Service listening on port " + port);
});