import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 320px;
`;

export const Field = styled(FormikField)`
  padding: 4px;
  font: inherit;
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ErrorMessage = styled(FormikError)`
  color: ${p => p.theme.colors.red};
  font-size: 14px;
`;
