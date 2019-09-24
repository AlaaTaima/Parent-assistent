import * as yup from 'yup';

const singUpValidation = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().min(8),
});

export default singUpValidation;
