import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReadingCreate, readingActions, RootState, ReadingState } from '../store';

export function useReadingStore(): ReadingState {
  return useSelector((state: RootState) => state.reading);
}

export function useReadingCreate() {
  const dispatch = useDispatch();
  return useCallback((reading: ReadingCreate) => dispatch(readingActions.create(reading)), [
    dispatch,
  ]);
}

export function useReadingRemove() {
  const dispatch = useDispatch();
  return useCallback((id: number) => dispatch(readingActions.remove(id)), [dispatch]);
}
