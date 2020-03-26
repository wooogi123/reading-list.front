import React from 'react';
import styled from '@emotion/styled';
import oc from '../../libs/styles/open-color';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: .25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${oc.gray[8]};
  &:hover {
    background: ${oc.gray[6]};
  }
`;

interface ButtonProps {
  children: string;
}

function Button(props: ButtonProps) {
  return (
    <StyledButton {...props} />
  );
}

export default Button;