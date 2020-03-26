/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useReadingDispatch } from '../../contexts/ReadingContext';
import styled from '@emotion/styled';
import oc from '../../libs/styles/open-color';
import Button from '../common/Button';

const WriteFormBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    margin: 0;
    color: ${oc.gray[8]};
    margin-bottom: 1rem;
  }

  form {
    flex: 1;
    display: inherit;
    flex-direction: inherit;
    justify-content: inherit;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${oc.gray[5]};
  padding-bottom: .5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: ${oc.violet[7]};
    border-bottom: 1px solid ${oc.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const StyledTextarea = styled.textarea`
  flex: 1;
  border: none;
  border-bottom: 1px solid ${oc.gray[5]};
  font-size: 1rem;
  padding-top: .5rem;
  padding-bottom: .5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: ${oc.violet[7]};
    border-bottom: 1px solid ${oc.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const StyledButton = styled(Button)`
  padding-top: .75rem;
  padding-bottom: .75rem;
  margin-top: 1rem;
  width: 100%;
  font-size: 1.125rem;
  background: ${oc.violet[6]};
  &:hover {
    background: ${oc.violet[4]};
  }
`;

interface WriteProps extends RouteComponentProps {}

function WriteForm({ history }: WriteProps) {
  const [url, setUrl] = useState('');
  const [comment, setComment] = useState('');
  const dispatch = useReadingDispatch();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      url: url,
      desc: '',
      comment: comment,
      time: new Date(),
      image: ''
    });
    setUrl('');
    setComment('');
    history.push('/');
  }

  function onChangeUrl(e: React.ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
  }

  function onChangeText(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setComment(e.target.value);
  }

  return (
    <WriteFormBlock>
      <h3>Write</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          value={url}
          placeholder="https://"
          onChange={onChangeUrl}
        />
        <StyledTextarea
          value={comment}
          placeholder="Comment"
          onChange={onChangeText}
        />
        <StyledButton>등록</StyledButton>
      </form>
    </WriteFormBlock>
  );
}

export default withRouter(WriteForm);