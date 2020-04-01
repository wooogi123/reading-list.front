import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Responsive from './Responsive';
import Button from './Button';
import tw from 'tailwind.macro';

const HeaderBlock = styled.div`
  ${tw`
    fixed w-full bg-white px-4
  `}
`;

const Wrapper = styled(Responsive)`
  ${tw`
    h-20 flex items-center justify-between
  `}

  .logo {
    ${tw`
      text-xl font-extrabold tracking-widest text-gray-800 hover:text-gray-600
    `}
  }

  .right {
    ${tw`
      flex items-center
    `}
  }
`;

const Spacer = styled.div`
  ${tw`
    h-16
  `}
`;

function Header() {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link className="logo" to="/">
            ReadingList
          </Link>
          <div className="right">
            <Button>Room</Button>
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
}

export default Header;
