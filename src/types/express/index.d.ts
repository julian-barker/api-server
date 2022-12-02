export {}

declare global {
  namespace Express {
    export interface Request {
      timestamp?: Date;
    }
  }
}