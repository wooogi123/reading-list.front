import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const common = tw`
    bg-gray-700 hover:bg-gray-500
    border-0 rounded outline-none
    text-base text-white font-bold
    cursor-pointer py-2 px-4
`;

const StyledButton = styled('button')`
  ${common}
`;

const StyledLink = styled(Link)`
  ${common}
`;

interface ButtonProps {
  to?: string;
  children: string;
}

function Button(props: ButtonProps) {
  const { to } = props;
  return to ? <StyledLink {...props} to={to} /> : <StyledButton {...props} />;
}

export default Button;
