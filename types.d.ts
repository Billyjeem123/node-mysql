// types/express.d.ts
import "express";

declare global {
  namespace Express {
    interface Request {
      user?: any; // your auth user if you attach it
      query: {
        page?: string;
        per_page?: string;
        [key: string]: any; // optional: allow other query params
      };
    }
    interface Response {
      user?: any;
    }
  }
}
