import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import Responsive from '../common/Responsive';

const WriteTemplateBlock = styled.div`
  ${tw`
    inset-0 absolute flex flex-col justify-center items-center
  `}
  background: rgba(0, 0, 0, 0.85);
`;

const WhiteBox = styled(Responsive)`
  ${tw`
    p-8 bg-white rounded-lg
  `}
`;

function WriteTemplate({
  children,
}: {
  children: React.FunctionComponentElement<null>;
}) {
  return (
    <WriteTemplateBlock>
      <WhiteBox>{children}</WhiteBox>
    </WriteTemplateBlock>
  );
}

export default WriteTemplate;
