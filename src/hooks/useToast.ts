import { toast as rToast, TypeOptions } from 'react-toastify';

const useToast = () => {
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
