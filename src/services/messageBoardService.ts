import { MessageBoardItem } from '../entityTypes/messageBoard';
import { getUUID } from '../utils/getUUID';

const messageList: MessageBoardItem[] = [
  {
    id: getUUID(),
    author: 'Стартовый тестовый автор',
    text: 'сообщение стартового тестового автора',
  },
];

export const getMessageList = async () => {
  return Promise.resolve(messageList);
};

export const addNewMessage = async (data: Omit<MessageBoardItem, 'id'>) => {
  const newMessage: MessageBoardItem = {
    ...data,
    id: getUUID(),
  };

  messageList.push(newMessage);
  return Promise.resolve(newMessage);
};
