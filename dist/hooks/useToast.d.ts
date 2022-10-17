import { TypeOptions } from 'react-toastify';

interface UseToastValue {
    toast: (msg: string, type?: TypeOptions, options?: object) => void;
}
declare const useToast: () => UseToastValue;

export { useToast as default };
