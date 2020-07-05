import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Room, roomActions, RootState, RoomState } from '../store';

export function useRoomStore(): RoomState {
  return useSelector((state: RootState) => state.room);
}

export function useRoomCreate() {
  const dispatch = useDispatch();
  return useCallback((room: Room) => dispatch(roomActions.create(room)), [dispatch]);
}

export function useRoomUpdate() {
  const dispatch = useDispatch();
  return useCallback((id: number) => dispatch(roomActions.update(id)), [dispatch]);
}

export function useRoomRemove() {
  const dispatch = useDispatch();
  return useCallback((id: number) => dispatch(roomActions.update(id)), [dispatch]);
}
