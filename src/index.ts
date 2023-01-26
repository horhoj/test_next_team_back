import express from 'express';
import cors from 'cors';
import { services } from './services';
import { validateMiddleware, validators } from './validators';

const app = express();
const port = 7778;

app.use(express.json());
app.use(
  cors({
    origin: '*',
  }),
);

app.get('/', async (req, res) => {
  res.json({ info: 'server is running' });
});

app.get('/messages', async (req, res) => {
  const messageList = await services.messageBoard.getMessageList();
  res.status(200).json(messageList);
});

app.post(
  '/messages',
  validateMiddleware(validators.messageBoardValidationSchemas.addNewMessage),
  async (req, res) => {
    const newMessage = await services.messageBoard.addNewMessage(req.body);
    res.status(201).json(newMessage);
  },
);

app.listen(port, async () => {
  console.log(`App running on port ${port}.`);
});
