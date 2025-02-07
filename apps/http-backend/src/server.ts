import express  from "express";
import cors from "cors";
import { prismaClient } from "@repo/db/PrismaClient";

const app = express(); 
const port = 3001;
app.use(express.json());
app.use(cors());

app.get('/api/hello/', async (req, res) => {
  const db = await prismaClient.user.create({
      data:{
        name:"n",
        email:"n@example.com",
        password:"n",
      }
  })

    res.json({
        mssg:"hello"})});

app.listen(port,()=>{
    console.log("Service listening on port " + port);
});