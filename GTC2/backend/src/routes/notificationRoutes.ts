import express, { Request, Response, NextFunction } from 'express';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Get all notifications
router.get('/', protect, async (req: Request, res: Response, next: NextFunction) => {
  try {
    // TODO: Implement notification fetching
    res.status(200).json({
      status: 'success',
      data: {
        notifications: []
      }
    });
  } catch (error) {
    next(error);
  }
});

export default router; 