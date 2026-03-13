import { Router } from "express";
import * as playersController from "../controllers/players.controller.js";

const router = Router();

router.get("/", playersController.listarPlayers);
router.get("/:id", playersController.BuscarPlayerPorId);
router.post("/", playersController.criarPlayer);
router.put("/:id", playersController.atualizarPlayer);
router.delete("/:id", playersController.deletarPlayer);

export default router;
