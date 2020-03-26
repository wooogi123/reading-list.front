import React from 'react';
import styled from '@emotion/styled';
import oc from '../../libs/styles/open-color';

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${oc.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${oc.gray[6]};
    }
  }

  p {
    margin-top: 2rem;
  }
`;

const SubInfo = styled.div`
  color: ${oc.gray[6]};

  span + span:before {
    color: ${oc.gray[4]};
    padding-left: .25rem;
    padding-right: .25rem;
    content: '\\B7';
  }
`;

function PostItem() {
  return (
    <PostItemBlock>
      <h2>제목</h2>
      <SubInfo>
        <span>{ new Date().toLocaleDateString() }</span>
      </SubInfo>
    </PostItemBlock>
  );
}

export default PostItem;