import React from 'react';
import styled from '@emotion/styled';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import PostItem from './PostItem';
import { useReadingState } from '../../contexts/ReadingContext';
import tw from 'tailwind.macro';

const PostListBlock = styled(Responsive)`
  ${tw`
    mt-12
  `}
`;

const WritePostButtonWrapper = styled.div`
  ${tw`
    flex justify-end mb-12
  `}
`;

const StyledButton = styled(Button)`
  ${tw`
    bg-purple-700 hover:bg-purple-500
  `}
`;

function PostList() {
  const readings = useReadingState();

  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        <StyledButton to="/write">새 글 작성하기</StyledButton>
      </WritePostButtonWrapper>
      <div>
        {readings.reverse().map((reading) => (
          <PostItem reading={reading} key={reading.id} />
        ))}
      </div>
    </PostListBlock>
  );
}

export default PostList;
