import express from "express";
import usuarioRouter from "./routes/usuario.route.js";
import cors from "cors";


const app = express();
app.use(cors());


app.use(express.json());
app.use("/usuarios", usuarioRouter);

// app.use("/jogos", jogosRouter);
// app.use("/players", playerRouter);
// app.use("/partidas", partidasRouter);



export default app;