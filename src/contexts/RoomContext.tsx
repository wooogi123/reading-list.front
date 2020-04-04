import React, { createContext, Dispatch, useReducer, useContext } from 'react';

export interface Room {
  id: number;
  name: string;
  password: string;
  count: number;
  createAt: Date;
  updateAt: Date;
}

type Action =
  | {
      type: 'CREATE';
      name: string;
      password: string;
      createAt: Date;
    }
  | { type: 'UPDATE'; id: number }
  | { type: 'REMOVE'; id: number };

type RoomState = Room[];
const RoomStateContext = createContext<RoomState | undefined>(undefined);

type RoomDispatch = Dispatch<Action>;
const RoomDispatchContext = createContext<RoomDispatch | undefined>(undefined);

function roomReducer(state: RoomState, action: Action): RoomState {
  switch (action.type) {
    case 'CREATE': {
      const nextId = Math.max(...state.map((room) => room.id)) + 1;
      return state.concat({
        id: nextId,
        name: action.name,
        password: action.password,
        count: 0,
        createAt: new Date(),
        updateAt: new Date(),
      });
    }
    case 'UPDATE': {
      return state.filter((room) => {
        const it = room;
        if (it.id === action.id) {
          it.id += 1;
        }
        return it;
      });
    }
    case 'REMOVE': {
      return state.filter((room) => room.id !== action.id);
    }
    default: {
      throw new Error('Unhandled action');
    }
  }
}

export function RoomContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [rooms, dispatch] = useReducer(roomReducer, [
    {
      id: 1,
      name: 'room1',
      password: 'room1',
      count: 0,
      createAt: new Date(),
      updateAt: new Date(),
    },
  ]);

  return (
    <RoomDispatchContext.Provider value={dispatch}>
      <RoomStateContext.Provider value={rooms}>
        {children}
      </RoomStateContext.Provider>
    </RoomDispatchContext.Provider>
  );
}

export function useRoomState() {
  const state = useContext(RoomStateContext);
  if (!state) throw new Error('RoomProvider not found');
  return state;
}

export function useRoomDispatch() {
  const dispatch = useContext(RoomDispatchContext);
  if (!dispatch) throw new Error('RoomProvider not found');
  return dispatch;
}
