import {Router} from 'express';
import { protectRoute } from '../middlewares/auth.middleware.js';
import {getUsersForSideBar,getMessage,sendMessage} from "../controllers/message.controller.js"

const router=Router();

router.get("/users",protectRoute,getUsersForSideBar);
router.get("/:id",protectRoute,getMessage);
router.post("/send/:id",protectRoute,sendMessage)

export default router;