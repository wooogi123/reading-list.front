import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import oc from '../../libs/styles/open-color';

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: .5rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${oc.gray[8]};
  &:hover {
    background: ${oc.gray[6]};
  }
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
  text-decoration: none;
`;

interface ButtonProps {
  to?: string;
  children: string;
}

function Button(props: ButtonProps) {
  return props.to ? (
    <StyledLink {...props} to={props.to}/>
  ) : (
    <StyledButton {...props} />
  );
}

export default Button;