import express from 'express';
import cors from 'cors';
import { services } from './services';
import {
  jsonValidateMiddleware,
  validateMiddleware,
  validators,
} from './validators';

const app = express();
const port = 7778;

app.use(express.json());

app.use(
  cors({
    origin: '*',
  }),
);

app.use(jsonValidateMiddleware);

enum RoutePath {
  MESSAGES = '/messages',
  HOME = '/',
  AVERAGE_NUMBERS = '/average-numbers',
}

app.get(RoutePath.HOME, async (req, res) => {
  res.json({ info: 'server is running' });
});

app.get(RoutePath.MESSAGES, async (req, res) => {
  const messageList = await services.messageBoard.getMessageList();
  res.status(200).json(messageList);
});

app.post(
  RoutePath.MESSAGES,
  validateMiddleware(validators.messageBoardValidationSchemas.addNewMessage),
  async (req, res) => {
    const newMessage = await services.messageBoard.addNewMessage(req.body);
    res.status(201).json(newMessage);
  },
);

app.get(RoutePath.AVERAGE_NUMBERS, async (req, res) => {
  const history = await services.averageNumbers.getHistory();

  res.status(200).json(history);
});

app.post(
  RoutePath.AVERAGE_NUMBERS,
  validateMiddleware(validators.averageNumbersValidationSchemas.addAverage),
  async (req, res) => {
    const newHistoryItem = await services.averageNumbers.addAverage(
      req.body.value,
    );

    res.status(201).json(newHistoryItem);
  },
);

app.listen(port, async () => {
  // eslint-disable-next-line no-console
  console.log(`App running on port ${port}.`);
});
