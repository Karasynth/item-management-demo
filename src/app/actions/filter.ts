import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';

export namespace FilterActions {
  export enum Type {
    SET_FILTER = 'SET_FILTER',
  }

  export const setFilter = createAction<string>(Type.SET_FILTER);
}

export type FilterActions = Omit<typeof FilterActions, 'Type'>;

export const useFilterActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = FilterActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as FilterActions;
};
