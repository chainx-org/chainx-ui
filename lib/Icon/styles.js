import styled from 'styled-components';
export const IconWrapper = styled.img `
  padding: ${({ padding }) => padding && padding};
  margin: ${({ margin }) => margin && margin};
  border: ${({ border }) => border && border};
  cursor: ${({ cursor }) => (cursor ? cursor : 'default')};
`;
//# sourceMappingURL=styles.js.map