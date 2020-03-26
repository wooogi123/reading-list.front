import React from 'react';
import { useReadingDispatch, Reading } from '../../contexts/ReadingContext';
import styled from '@emotion/styled';
import oc from '../../libs/styles/open-color';

const PostItemBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  &:first-of-type {
    padding-top: 0;
  }

  & + & {
    border-top: 1px solid ${oc.gray[5]};
  }
`;

const SubInfo = styled.div`
  flex: 1;
  display: inherit;
  flex-direction: column;
  justify-content: inherit;
  color: ${oc.gray[6]};
  margin-left: 1.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0;
    margin-top: 0;
    color: ${oc.gray[8]};
    &:hover {
    color: ${oc.gray[6]};
    }
  }
`;

const StyledImg = styled.img`
  border: 1px solid ${oc.gray[4]};
  width: 100px;
  height: 100px;
`;

const Remove = styled.span`
  color: red;
  margin-left: 4px;
  cursor: pointer;
`;

const Comment = styled.p`
  color: ${oc.gray[6]};
  
  span {
    color: ${oc.gray[8]};
    font-weight: 600
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
      id: reading.id
    });
  }

  return (
    <PostItemBlock>
      {(reading.image === '')
        ? <StyledImg src="./logo192.png" alt="Placeholder" onClick={onClick}/>
        : <StyledImg src={reading.image} alt="Placeholder" onClick={onClick}/>
      }
      <SubInfo onClick={onClick}>
        <h3>{reading.url}</h3>
        <span>{reading.time.toLocaleString()}</span>
        {(reading.desc === '')
          ? null
          : <p>{reading.desc}</p>
        }
        {(reading.comment === '')
          ? null
          : <Comment><span>Comment: </span>{reading.comment}</Comment>
        }
      </SubInfo>
      <Remove onClick={onRemove}>(X)</Remove>
    </PostItemBlock>
  );
}

export default PostItem;