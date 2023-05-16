import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: 500;
  color: ${p => p.theme.colors.blue};
`;

export const Form = styled.form`
  margin-bottom: ${p => p.theme.sizes.m};
`;

export const Input = styled.input`
  margin-bottom: 10px;
  width: 100%;
  height: ${p => p.theme.sizes.l};
  font-size: ${p => p.theme.fontSizes.m};
  ::placeholder {
    font-size: ${p => p.theme.fontSizes.s};
    font-style: italic;
  }
`;

export const Button = styled.button`
  display: block;
  width: 150px;
  height: 40px;
  border: none;
  background: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.btnLight};
  padding: 10px 20px;
  font-size: ${p => p.theme.fontSizes.m};
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;
  transition: all 500ms ease;
  :hover {
    background: rgba(0, 0, 0, 0);
    color: ${p => p.theme.colors.blue};
    box-shadow: inset 0 0 0 3px #3a7999;
    transform: scale(1.05);
  }
`;
