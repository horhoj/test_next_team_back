import * as yup from 'yup';

export const addNewMessage = yup.object({
  body: yup.object({
    author: yup.string().required('Не введено имя автора!'),
    text: yup.string().required('Не введено сообщение!'),
  }),
});
