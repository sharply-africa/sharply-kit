import { toast as rToast, TypeOptions } from 'react-toastify';

interface UseToastValue {
  toast: (msg: string, type?: TypeOptions, options?: object) => void;
}

const useToast = (): UseToastValue => {
  const toast = (msg: string, type: TypeOptions, options = {}) => {
    if (type) {
      rToast[type](msg, options);
    } else {
      rToast(msg, options);
    }
  };

  return { toast };
};

export default useToast;
