import * as yup from 'yup';
import { Request, Response, NextFunction } from 'express';

export const validateMiddleware =
  (schema: yup.BaseSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(
        {
          body: req.body,
          query: req.query,
          params: req.params,
        },
        { abortEarly: false },
      );

      return next();
    } catch (err: any) {
      return res.status(400).json(err?.errors);
    }
  };
