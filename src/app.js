import express from "express";
import usuarioRouter from "./routes/usuario.route.js";
import jogosRouter from "./routes/jogos.route.js";
import playersRoutes from "./routes/players.route.js";
import cors from "cors";


const app = express();
app.use(cors());


app.use(express.json());
app.use("/usuarios", usuarioRouter);
app.use("/jogos", jogosRouter);
app.use("/players", playersRoutes);

// app.use("/partidas", partidasRouter);



export default app;