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

export const jsonValidateMiddleware = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (
    err instanceof SyntaxError &&
    (err as any)?.status === 400 &&
    'body' in err
  ) {
    return res.status(400).send({ status: 400, message: err.message });
  }
  next();
};
