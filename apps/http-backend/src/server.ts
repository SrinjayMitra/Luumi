import express,{Request,Response}  from "express";
import cors from "cors";
// import { prismaClient } from "@repo/db/client";
const { prismaClient }: any = require("@repo/db/client");

const app = express(); 
const port = 3001;
app.use(express.json());
app.use(cors());

app.get('/api/hello/', async (req:Request, res:Response) => {
  const db = await prismaClient.user.create({
      data:{
        name:"nn",
        email:"nn@example.com",
        password:"nn",
      }
  })

    res.json({
        mssg:"hello"})});

app.listen(port,()=>{
    console.log("Service listening on port " + port);
});