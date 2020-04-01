import React from 'react';
import { useReadingDispatch, Reading } from '../../contexts/ReadingContext';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

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
    flex-1 flex flex-col justify-between text-gray-600 ml-6
  `}

  h3 {
    ${tw`
      my-0 text-xl font-semibold text-gray-800 hover:text-gray-600
    `}
  }
`;

const StyledImg = styled.img`
  ${tw`
    border border-solid border-gray-400 w-24 h-24
  `}
`;

const Remove = styled.span`
  ${tw`
    mr-4 text-red-600
  `}
`;

const Comment = styled.p`
  ${tw`
    text-gray-600
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
  const dispatch = useReadingDispatch();

  function onClick() {
    window.open(reading.url, '_blank')?.focus();
  }

  function onRemove() {
    dispatch({
      type: 'REMOVE',
      id: reading.id,
    });
  }

  return (
    <PostItemBlock>
      {reading.image === '' ? (
        <StyledImg src="./logo192.png" alt="Placeholder" onClick={onClick} />
      ) : (
        <StyledImg src={reading.image} alt="Placeholder" onClick={onClick} />
      )}
      <SubInfo onClick={onClick}>
        <h3>{reading.url}</h3>
        <span>{reading.time.toLocaleString()}</span>
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
