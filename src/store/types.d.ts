/// <reference types="types.d.ts" />

import { RouterAction, LocationChangeAction } from 'react-router-redux';
import { TodoActions } from '../_actions/todo.actions'

type ReactRouterAction = RouterAction | LocationChangeAction;

export type RootState = StateType<typeof import('./rootReducer').default>;

export type RootAction = | TodoActions ;
