import React from 'react';
import styled from '@emotion/styled';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import oc from '../../libs/styles/open-color';
import PostItem from './PostItem';

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const StyledButton = styled(Button)`
  background: ${oc.violet[6]};
  &:hover {
    background: ${oc.violet[4]};
  }
`;


function PostList() {
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        <StyledButton to="/write">새 글 작성하기</StyledButton>
      </WritePostButtonWrapper>
      <div>
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </PostListBlock>
  );
}

export default PostList;