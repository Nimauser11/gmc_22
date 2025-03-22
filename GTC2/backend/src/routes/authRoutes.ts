import express, { Request, Response, NextFunction } from 'express';
import { protect } from '../middleware/auth.js';
import UserModel from '../models/User.js';
import pool from '../config/database.js';
import { AppError } from '../middleware/errorHandler.js';

const router = express.Router();
const userModel = new UserModel(pool);

// Register user
router.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    const user = await userModel.create(userData);
    const token = await userModel.generateToken(user);

    res.status(201).json({
      status: 'success',
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token,
      },
    });
  } catch (error) {
    next(error);
  }
});

// Login user
router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new AppError('Please provide email and password', 400);
    }

    const user = await userModel.findByEmail(email);
    if (!user) {
      throw new AppError('Invalid email or password', 401);
    }

    const isPasswordValid = await userModel.comparePassword(password, user.password);
    if (!isPasswordValid) {
      throw new AppError('Invalid email or password', 401);
    }

    const token = await userModel.generateToken(user);

    res.status(200).json({
      status: 'success',
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token,
      },
    });
  } catch (error) {
    next(error);
  }
});

export default router; 