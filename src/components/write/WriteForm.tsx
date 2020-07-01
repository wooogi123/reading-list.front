import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import Button from '../common/Button';
import { useReadingCreate } from '../../hooks';

const WriteFormBlock = styled.div`
  ${tw`
    h-full flex flex-col justify-between
  `}

  h3 {
    ${tw`
      m-0 mb-4 text-gray-800
    `}
  }

  form {
    ${tw`
      flex-1 flex flex-col justify-between
    `}
  }
`;

const StyledInput = styled.input`
  ${tw`
    text-xl border-b border-solid border-gray-400 outline-none w-full
    focus:text-purple-700 focus:border-b focus:border-solid focus:border-gray-600
  `}

  & + & {
    ${tw`
      mt-4
    `}
  }
`;

const StyledTextarea = styled.textarea`
  ${tw`
    flex-1 border-b border-solid border-gray-400 text-base py-2 outline-none w-full
    focus:text-purple-700 focus:border-b focus:border-solid focus:border-gray-600
  `}

  & + & {
    ${tw`
      mt-4
    `}
  }
`;

const StyledButton = styled(Button)`
  ${tw`
    py-3 mt-4 w-full text-xl bg-purple-700 hover:bg-purple-500
  `}
`;

interface WriteProps extends RouteComponentProps {}

function WriteForm({ history }: WriteProps) {
  const [uri, setUri] = useState('');
  const [comment, setComment] = useState('');

  const create = useReadingCreate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    create({
      uri,
      desc: '',
      comment,
      createdAt: new Date(),
      roomId: 1,
      image: '',
    });
    setUri('');
    setComment('');
    history.push('/');
  }

  function onChangeUrl(e: React.ChangeEvent<HTMLInputElement>) {
    setUri(e.target.value);
  }

  function onChangeText(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setComment(e.target.value);
  }

  return (
    <WriteFormBlock>
      <h3>Write</h3>
      <form onSubmit={onSubmit}>
        <StyledInput value={uri} placeholder="https://" onChange={onChangeUrl} />
        <StyledTextarea value={comment} placeholder="Comment" onChange={onChangeText} />
        <StyledButton>등록</StyledButton>
      </form>
    </WriteFormBlock>
  );
}

export default withRouter(WriteForm);
