import { InjectionToken } from '@angular/core';

export const LOCAL_STORAGE = new InjectionToken<ILocalStorage>('LOCAL_STORAGE');

export type Identifier = number | string;
export type NumberValue = number | string;
export type TextFormat = 'plain' | 'html';

export interface IdentifiedEntity {
  id?: Identifier;
}

export interface ILocalStorage {
  delete: (key: string) => void;
  get: <T>(key: string) => T;
  set: <T>(key: string, value: T) => void;
}
