import { ICalculator } from '../reducers/reducers';
import { RootState } from '../root';

const s = (state: RootState): ICalculator => state;

export const getInputValue = (state: RootState): string => s(state).inputValue;

export const getHistorialList = (state: RootState): Array<any> => s(state).historial;

export const getError = (state: RootState): string=> s(state).error;