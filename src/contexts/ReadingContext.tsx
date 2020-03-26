import React, { createContext, Dispatch, useReducer, useContext } from 'react';

export interface Reading {
  id: number;
  url: string;
  text: string;
  done: boolean;
}

type Action =
  | { type: 'CREATE'; url: string, text: string }
  | { type: 'REMOVE'; id: number };

type ReadingState = Reading[];
const ReadingStateContext = createContext<ReadingState | undefined>(undefined);

type ReadingDispatch = Dispatch<Action>;
const ReadingDispatchContext = createContext<ReadingDispatch | undefined>(undefined);

function readingReducer(state: ReadingState, action: Action): ReadingState {
  switch (action.type) {
    case 'CREATE':
      const nextId = Math.max(...state.map(reading => reading.id)) + 1;
      return state.concat({
        id: nextId,
        url: action.url,
        text: action.text,
        done: false
      });
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error('Unhandled action');
  }
}

export function ReadingContextProvider({ children }: { children: React.ReactNode }) {
  const [readings, dispatch] = useReducer(readingReducer, [
    {
      id: 1,
      url: 'https://google.com',
      text: 'Context API 배우기',
      done: true
    },
    {
      id: 2,
      url: 'https://google.com',
      text: 'TypeScript 배우기',
      done: true
    },
    {
      id: 3,
      url: 'https://google.com',
      text: 'TypeScript 와 Context API 함께 사용하기',
      done: false
    }
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