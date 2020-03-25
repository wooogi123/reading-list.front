import React, { useState } from 'react';
import { useReadingDispatch } from '../contexts/ReadingContext';

function ReadingForm() {
  const [value, setValue] = useState('');
  const dispatch = useReadingDispatch();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      url: value,
      text: value
    });
    setValue('');
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        placeholder="무엇을 하실 건가요?"
        onChange={onChange}
      />
      <button>등록</button>
    </form>
  );
}

export default ReadingForm;