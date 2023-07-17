import * as yup from 'yup';

export const resourceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  course_id: yup.string().nullable(),
});
