import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { useReadingRemove } from '../../hooks';
import { Reading } from '../../store';

const PostItemBlock = styled.div`
  ${tw`
    flex flex-row justify-between cursor-pointer py-4
  `}

  & + & {
    ${tw`
      border-t border-solid border-gray-400
    `}
  }
`;

const SubInfo = styled.div`
  ${tw`
    flex-1 flex flex-col justify-between text-gray-600 mx-4
  `}

  h3 {
    ${tw`
      text-base md:text-lg my-0 font-semibold text-gray-800 hover:text-gray-600
    `}
  }
`;

const StyledImg = styled.img`
  ${tw`
    border border-solid border-gray-400 w-20 h-20
  `}
`;

const Remove = styled.span`
  ${tw`
    text-red-600
  `}
`;

const Comment = styled.p`
  ${tw`
    text-sm md:text-base text-gray-600
  `}

  span {
    ${tw`
      text-gray-800 font-semibold
    `}
  }
`;

interface ReadingItemProps {
  reading: Reading;
}

function PostItem({ reading }: ReadingItemProps) {
  const remove = useReadingRemove();

  function onClick() {
    window.open(reading.uri, '_blank')?.focus();
  }

  function onRemove() {
    remove(reading.id);
  }

  return (
    <PostItemBlock>
      {reading.image === '' ? (
        <StyledImg src="./logo192.png" alt="Placeholder" onClick={onClick} />
      ) : (
        <StyledImg src={reading.image} alt="Placeholder" onClick={onClick} />
      )}
      <SubInfo onClick={onClick}>
        <h3>{reading.uri}</h3>
        <span>{reading.createdAt.toLocaleString()}</span>
        {reading.desc === '' ? null : <p>{reading.desc}</p>}
        {reading.comment === '' ? null : (
          <Comment>
            <span>Comment: </span>
            {reading.comment}
          </Comment>
        )}
      </SubInfo>
      <Remove onClick={onRemove}>(X)</Remove>
    </PostItemBlock>
  );
}

export default PostItem;
