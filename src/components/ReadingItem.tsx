import React from 'react';
import { useReadingDispatch, Reading } from '../contexts/ReadingContext';
import styled from '@emotion/styled';

const List = styled.li<ReadingItemProps>`
`;

const Text = styled.span`
  cursor: pointer;
`;

const Remove = styled.span`
  color: red;
  margin-left: 4px;
  cursor: pointer;
`;

interface ReadingItemProps {
  reading: Reading;
}

function ReadingItem({ reading }: ReadingItemProps) {
  const dispatch = useReadingDispatch();

  function onRemove() {
    dispatch({
      type: 'REMOVE',
      id: reading.id
    });
  }

  return (
    <List reading={reading}>
      <Text>{reading.text}</Text>
      <Remove onClick={onRemove}>(X)</Remove>
    </List>
  );
}

export default ReadingItem;