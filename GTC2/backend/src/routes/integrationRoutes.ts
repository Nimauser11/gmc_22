import express, { Request, Response, NextFunction } from 'express';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Get all integrations
router.get('/', protect, async (req: Request, res: Response, next: NextFunction) => {
  try {
    // TODO: Implement integration fetching
    res.status(200).json({
      status: 'success',
      data: {
        integrations: []
      }
    });
  } catch (error) {
    next(error);
  }
});

export default router; 