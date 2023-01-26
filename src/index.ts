import express from 'express';
import { controllers } from './controllers';

const app = express();
const port = 6666;

app.get('/', (request, response) => {
  response.json({ info: 'server is running' });
});

app.get('/messages/:id', (request, response) => {
  controllers.messageBoardControllers.getMessageListController().then((res) => {
    response.json(res);
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
