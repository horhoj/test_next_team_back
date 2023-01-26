export const debounce = <CB extends (...args: any[]) => any>(
  cb: (...args: Parameters<CB>) => void,
  timeout = 100,
) => {
  let timerId: NodeJS.Timeout | null = null;

  return (...args: Parameters<CB>) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => cb(...args), timeout);
  };
};
