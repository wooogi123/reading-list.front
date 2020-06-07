import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ResponsiveBlock = styled.div`
  ${tw`
    w-full mx-auto
  `}

  @media (min-width: 768px) {
    width: 75%;
  }
`;

interface ResponsiveProps extends React.HTMLProps<HTMLDivElement> {}

function Responsive({ children, ...rest }: ResponsiveProps) {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
}

export default Responsive;
