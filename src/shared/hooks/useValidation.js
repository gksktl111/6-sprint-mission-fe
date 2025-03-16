import { productRegisterValidation } from '@utils/validation/productValidation';

const useValidation = (type, data) => {
  if (type === 'product') {
    return productRegisterValidation(data);
  }
};

export default useValidation;
