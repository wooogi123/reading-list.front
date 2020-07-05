import { createAction, createReducer, ActionType } from 'typesafe-actions';

export interface RoomCreate {
  name: string;
  password: string;
}

export interface Room extends RoomCreate {
  id: number;
  count: number;
  createdAt: Date;
  updatedAt: Date;
}

const prefix: string = 'room';

export const ROOM_CREATE = `${prefix}/ROOM_CREATE`;
export const ROOM_UPDATE = `${prefix}/ROOM_UPDATE`;
export const ROOM_REMOVE = `${prefix}.ROOM_REMOVE`;

export const create = createAction(ROOM_CREATE)<RoomCreate>();
export const update = createAction(ROOM_UPDATE)<number>();
export const remove = createAction(ROOM_REMOVE)<number>();

export const roomActions = { create, update, remove };
export type RoomAction = ActionType<typeof roomActions>;

export type RoomState = Room[];

const initState: RoomState = [];

export default createReducer<RoomState, RoomAction>(initState, {
  [ROOM_CREATE]: (state, action: RoomAction) => {
    const id = state.length + 1;
    return state.concat({
      id,
      ...(action.payload as RoomCreate),
      count: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  },
  [ROOM_UPDATE]: (state, action: RoomAction) => {
    return state.filter((room) => {
      const it = room;
      if (it.id === (action.payload as number)) {
        it.id += 1;
      }
      return it;
    });
  },
  [ROOM_REMOVE]: (state, action: RoomAction) => {
    return state.filter((room) => room.id !== (action.payload as number));
  },
});
