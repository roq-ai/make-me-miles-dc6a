import * as yup from 'yup';

export const loyaltyProgramValidationSchema = yup.object().shape({
  name: yup.string().required(),
  points: yup.number().integer().required(),
  organization_id: yup.string().nullable(),
});
