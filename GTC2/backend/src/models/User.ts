import pkg from 'pg';
import bcrypt from 'bcrypt';
import jwt, { SignOptions } from 'jsonwebtoken';
import { AppError } from '../middleware/errorHandler.js';

const { Pool } = pkg;

export interface UserInput {
  name: string;
  email: string;
  password: string;
  role?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  created_at: Date;
}

export default class UserModel {
  private pool: InstanceType<typeof Pool>;

  constructor(pool: InstanceType<typeof Pool>) {
    this.pool = pool;
  }

  async create(userData: UserInput): Promise<User> {
    const { name, email, password, role = 'user' } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await this.pool.query(
      'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, hashedPassword, role]
    );

    return result.rows[0];
  }

  async findByEmail(email: string): Promise<User | null> {
    const result = await this.pool.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    return result.rows[0] || null;
  }

  async comparePassword(candidatePassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, hashedPassword);
  }

  generateToken(user: User): string {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new AppError('JWT secret is not configured', 500);
    }

    const options: SignOptions = {
      expiresIn: '24h' // Default to 24 hours if not specified in env
    };

    return jwt.sign(
      { id: user.id, role: user.role },
      secret,
      options
    );
  }
} 