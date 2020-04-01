import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import Responsive from '../common/Responsive';
import PostItem from './PostItem';
import { useReadingState } from '../../contexts/ReadingContext';

const PostListBlock = styled(Responsive)`
  ${tw`
    mt-8 px-4
  `}
`;

function PostList() {
  const readings = useReadingState();

  return (
    <PostListBlock>
      <div>
        {readings.reverse().map((reading) => (
          <PostItem reading={reading} key={reading.id} />
        ))}
      </div>
    </PostListBlock>
  );
}

export default PostList;
