import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: ${p => p.theme.sizes.m};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: 500;
  color: ${p => p.theme.colors.blue};
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: 500;
  color: ${p => p.theme.colors.blue};
  margin-bottom: ${p => p.theme.sizes.xxs};
`;
export const Input = styled.input`
  margin-bottom: ${p => p.theme.sizes.xxs};
  width: 100%;
  height: ${p => p.theme.sizes.l};
  font-size: ${p => p.theme.fontSizes.m};
  ::placeholder {
    font-size: ${p => p.theme.fontSizes.s};
    font-style: italic;
  }
`;
