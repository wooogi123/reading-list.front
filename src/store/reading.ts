import { createAction, createReducer, ActionType } from 'typesafe-actions';

export interface ReadingCreate {
  uri: string;
  comment: string;
  desc: string;
  createdAt: Date;
  roomId: number;
  image: string;
}

export interface Reading extends ReadingCreate {
  id: number;
  updatedAt: Date;
}

const prefix: string = 'reading';

export const READING_CREATE = `${prefix}/READING_CREATE`;
export const READING_REMOVE = `${prefix}/READING_REMOVE`;

export const create = createAction(READING_CREATE)<ReadingCreate>();
export const remove = createAction(READING_REMOVE)<number>();

export const readingActions = { create, remove };
export type ReadingAction = ActionType<typeof readingActions>;

export type ReadingState = Reading[];

const initState: ReadingState = [];

export default createReducer<ReadingState, ReadingAction>(initState, {
  [READING_CREATE]: (state, action: ReadingAction) => {
    const id = state.length + 1;
    return state.concat({
      id,
      ...(action.payload as ReadingCreate),
      updatedAt: new Date(),
    });
  },
  [READING_REMOVE]: (state, action: ReadingAction) => {
    return state.filter((reading) => reading.id !== (action.payload as number));
  },
});
