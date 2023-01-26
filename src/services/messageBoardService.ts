import { MessageBoardItem } from '../entityTypes/messageBoard';
import { getUUID } from '../utils/getUUID';

const messageList: MessageBoardItem[] = [
  {
    id: getUUID(),
    author: 'Стартовый тестовый пользователь',
    text: 'сообщение стартового тестового пользователя',
  },
];

export const getMessageList = async () => {
  return Promise.resolve(messageList);
};
