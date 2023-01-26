import { services } from '../services';

export const getMessageListController = async () => {
  return services.messageBoard.getMessageList();
};
