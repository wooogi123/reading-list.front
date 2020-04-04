import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import Responsive from './Responsive';
import Button from './Button';

const FooterBlock = styled.div`
  ${tw`
    fixed w-full bg-white bottom-0
  `}
`;

const Wrapper = styled(Responsive)`
  ${tw`
    h-20 flex items-center justify-end w-full h-full
  `}
`;

const StyledButton = styled(Button)`
  ${tw`
    text-2xl rounded-full w-16 h-16 my-8 mx-8 bg-purple-600
  `}
`;

function Footer() {
  return (
    <>
      <FooterBlock>
        <Wrapper>
          <Link to="write">
            <StyledButton>+</StyledButton>
          </Link>
        </Wrapper>
      </FooterBlock>
    </>
  );
}

export default Footer;
