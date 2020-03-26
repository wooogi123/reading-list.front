import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Responsive from './Responsive';
import Button from './Button';
import oc from '../../libs/styles/open-color';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, .4);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    text-decoration: none;
    color: ${oc.gray[8]};
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .logo:hover {
    color: ${oc.gray[6]};
  }
  .right {
    display: inherit;
    align-items: center;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

function Header() {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link className="logo" to="/">ReadingList</Link>
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