import { AverageHistoryItem } from '../entityTypes/averageNumbers';
import { getUUID } from '../utils/getUUID';

const averageNumbersHistoryData: number[] = [];

export const getHistory = async () => {
  const history: AverageHistoryItem[] = [];

  if (averageNumbersHistoryData.length > 0) {
    averageNumbersHistoryData.forEach((item, index) => {
      const prev: number | null =
        index === 0 ? null : averageNumbersHistoryData[index - 1] ?? null;

      const current = item;

      const average: number | null =
        prev === null ? null : (current + prev) / 2;

      const currentHistoryItem: AverageHistoryItem = {
        id: getUUID(),
        prev,
        current,
        average,
      };

      history.push(currentHistoryItem);
    });
  }

  return Promise.resolve(history);
};

export const addAverage = async (value: number) => {
  const prev: number | null =
    averageNumbersHistoryData.length === 0
      ? null
      : averageNumbersHistoryData[averageNumbersHistoryData.length - 1] ?? null;

  const current = value;

  const average: number | null = prev === null ? null : (current + prev) / 2;

  const currentHistoryItem: AverageHistoryItem = {
    id: getUUID(),
    prev,
    current,
    average,
  };

  averageNumbersHistoryData.push(value);

  return Promise.resolve(currentHistoryItem);
};
