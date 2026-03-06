import { Router } from "express";
import * as usuarioController from "../controllers/usuario.contrller.js";

const router = Router();

router.get("/", usuarioController.listar);
router.get("/:id", usuarioController.buscarPorId);
router.post("/login", usuarioController.login); //add
router.post("/", usuarioController.criar); //add

export default router;



