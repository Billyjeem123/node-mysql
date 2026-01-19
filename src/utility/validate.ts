import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export function handleValidationErrors(req: Request, res: Response): boolean {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(err => err.msg);

        res.status(400).json({
            success: false,
            errors: errorMessages
        });

        return true; // indicates the error response has been sent
    }

    return false; // no validation errors
}

 export function genrerateOTP(length=6){
     const max = Math.pow(10, length) - 1;
  const min = Math.pow(10, length - 1);
  return Math.floor(Math.random() * (max - min + 1)) + min;
    }


 export function outputData(
  res: Response,
  success: boolean = true,
  message: string,
  data: any = null,
  status_code: number = 200
) {
  return res.status(status_code).json({
    success,
    message,
    data,
  });
}
  
export async function paginate(
  model: any,               
  page: number = 1,
  perPage: number = 10,
  where: object = {},
  include?: object          // Optional relationships
) {
  const total = await model.count({ where });       // Total items
  const offset = (page - 1) * perPage;

  const data = await model.findMany({
    where,
    skip: offset,
    take: perPage,
    orderBy: { createdAt: "desc" },
    include,                                       // Include relationships if provided
  });

  return {
    data,
    pagination: {
      total,
      per_page: perPage,
      current_page: page,
      last_page: Math.ceil(total / perPage),
      from: offset + 1,
      to: offset + data.length,
    },
  };
}




