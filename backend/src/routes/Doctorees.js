import express, { Router } from "express";
import DoctoresController from "../controllers/DoctoresControllers";

const router = express.Router();

Router
.route("/")
.get(DoctoresController.getDoctores)
.post(DoctoresController.createDoctores);

router
.route("/:id")
.put(DoctoresController.updateDoctor)
.delete(DoctoresController.deleteDoctor);