import styled from '@emotion/styled';

export const H1 = styled.h1`
  color: ${p => p.theme.colors.textPrimary};
  margin-bottom: ${p => p.theme.sizes.m};
`;
export const H2 = styled.h2`
  color: ${p => p.theme.colors.textPrimary};
  margin-bottom: ${p => p.theme.sizes.m};
`;
export const Warning = styled.p`
  font-size: ${p => p.theme.sizes.m};
  color: ${p => p.theme.colors.bad};
`;
