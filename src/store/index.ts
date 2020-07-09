import { combineReducers, createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reading from './reading';
import room from './room';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['reading'],
};

const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    reading,
    room,
  }),
);

export type RootState = ReturnType<typeof rootReducer>;

const rootStore = createStore(rootReducer);

export default rootStore;
export type { ReadingCreate, Reading, ReadingState, ReadingAction } from './reading';
export { READING_CREATE, READING_REMOVE, readingActions } from './reading';

export type { Room, RoomState, RoomAction } from './room';
export { ROOM_CREATE, ROOM_UPDATE, ROOM_REMOVE, roomActions } from './room';
