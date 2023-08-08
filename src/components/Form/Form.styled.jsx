import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 600px;
  align-items: center;
  gap: 10px;
  border: 1px solid grey;
`;

export const StyledField = styled(Field)`
  display: block;
  width: 400px;
`;

export const FormButton = styled.button`
  width: 150px;
  padding: 10px;
  border-radius: 20px;
`;
