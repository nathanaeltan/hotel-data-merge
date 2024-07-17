import { Router, Request, Response } from "express";

const router: Router = Router();

router.post("/", (req: Request, res: Response) => {
  return res.status(200).json({ success: true });
});

export default router;
