import React from 'react';
import styled from '@emotion/styled';
import Responsive from '../common/Responsive';
import oc from '../../libs/styles/open-color';

const WriteTemplateBlock = styled.div`
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  background: ${oc.gray[5]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled(Responsive)`
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  padding: 2rem;
  height: 40%;
  background: white;
  border-radius: 2px;
`;

function WriteTemplate({ children }: { children: React.FunctionComponentElement<null> }) {
  return (
    <WriteTemplateBlock>
      <WhiteBox>
        {children}
      </WhiteBox>
    </WriteTemplateBlock>
  );
}

export default WriteTemplate;