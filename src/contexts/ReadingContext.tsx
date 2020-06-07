import React, { createContext, Dispatch, useReducer, useContext } from 'react';

export interface Reading {
  id: number;
  url: string;
  desc: string;
  comment: string;
  time: Date;
  image: string;
}

type Action =
  | {
      type: 'CREATE';
      url: string;
      desc: string;
      comment: string;
      time: Date;
      image: string;
    }
  | { type: 'REMOVE'; id: number };

type ReadingState = Reading[];
const ReadingStateContext = createContext<ReadingState | undefined>(undefined);

type ReadingDispatch = Dispatch<Action>;
const ReadingDispatchContext = createContext<ReadingDispatch | undefined>(
  undefined,
);

function readingReducer(state: ReadingState, action: Action): ReadingState {
  switch (action.type) {
    case 'CREATE': {
      const nextId = Math.max(...state.map((reading) => reading.id)) + 1;
      return state.concat({
        id: nextId,
        url: action.url,
        desc: action.desc,
        comment: action.comment,
        time: action.time,
        image: action.image,
      });
    }
    case 'REMOVE': {
      return state.filter((todo) => todo.id !== action.id);
    }
    default: {
      throw new Error('Unhandled action');
    }
  }
}

export function ReadingContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [readings, dispatch] = useReducer(readingReducer, [
    {
      id: 1,
      url: 'https://google.com',
      desc: '',
      comment: 'Context API 배우기',
      time: new Date(),
      image: '',
    },
  ]);

  return (
    <ReadingDispatchContext.Provider value={dispatch}>
      <ReadingStateContext.Provider value={readings}>
        {children}
      </ReadingStateContext.Provider>
    </ReadingDispatchContext.Provider>
  );
}

export function useReadingState() {
  const state = useContext(ReadingStateContext);
  if (!state) throw new Error('ReadingProvider not found');
  return state;
}

export function useReadingDispatch() {
  const dispatch = useContext(ReadingDispatchContext);
  if (!dispatch) throw new Error('ReadingProvider not found');
  return dispatch;
}
