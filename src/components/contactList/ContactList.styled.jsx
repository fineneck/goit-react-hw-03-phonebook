import styled from '@emotion/styled';

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const P = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  display: block;
  min-width: 80px;
  height: ${p => p.theme.sizes.l};
  border: none;
  background: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.btnLight};
  padding: 7px 10px;
  font-size: ${p => p.theme.fontSizes.m};
  border-radius: 5px;
  cursor: pointer;
  transition: ${p => p.theme.transition.transition};
  /* :not(:last-child) {
    margin-right: ${p => p.theme.sizes.xxs};
  } */
  :hover {
    background: rgba(0, 0, 0, 0);
    color: ${p => p.theme.colors.blue};
    box-shadow: ${p => p.theme.shadows.btn};
    transform: ${p => p.theme.transform.scale};
  }
`;
