import * as yup from 'yup';

export const addAverage = yup.object({
  body: yup.object({
    value: yup
      .number()
      .typeError('value должно быть числом')
      .required('value должно быть'),
  }),
});
