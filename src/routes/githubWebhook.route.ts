import { Router } from "express";

const githubWebhookRoutes = Router();

githubWebhookRoutes.post("/");

export default githubWebhookRoutes;
