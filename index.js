import express from "express"
import dotenv from "dotenv"
import { studentsRouter } from "./Routers/students.js";
import { mentorsRouter } from "./Routers/mentors.js";


//confgure the environment
dotenv.config();
const PORT = process.env.PORT
//initiating server
const app = express();

//middleware
app.use(express.json());


//studers routers
app.use("/students",studentsRouter)
app.use("/mentors",mentorsRouter)

//app.use("/users",userRouter )
//starting ther server
app.listen(PORT, ()=>console.log("server running in localhost:8080")) 
//npm init