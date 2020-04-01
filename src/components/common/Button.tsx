import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledButton = styled('button')`
  ${tw`
    bg-gray-700 hover:bg-gray-500
    border-0 rounded outline-none
    text-base text-white font-bold
    cursor-pointer py-2 px-4
  `}
`;

const StyledLink = styled(Link)`
  ${tw`
    bg-purple-700 hover:bg-purple-500
    border-0 rounded outline-none
    text-base text-white font-bold
    cursor-pointer py-2 px-4
  `}
`;

interface ButtonProps {
  to?: string;
  className?: string;
  children: string;
}

function Button(props: ButtonProps) {
  const { to } = props;
  return to ? <StyledLink {...props} to={to} /> : <StyledButton {...props} />;
}

export default Button;
