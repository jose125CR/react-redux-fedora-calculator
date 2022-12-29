import { ActionType, getType } from 'typesafe-actions';
import * as calculatorActionsCreators from '../actionsCreators/actionsCreators';

export const initialCalculatorState = {
    inputValue: '',
    historial: [],
    error: '',
    inputTargetPosition: 0
};

export type ICalculator = Readonly<{
    inputValue: string;
    historial: Array<any>;
    error: string;
    inputTargetPosition: number
}>;

export type CalculatorAction = ActionType<typeof calculatorActionsCreators>

export const calculatorReducer = (
    state: ICalculator = initialCalculatorState,
    action: CalculatorAction
): ICalculator => {
    switch (action.type) {
        case getType(calculatorActionsCreators.add):
            return { ...state, inputValue: action.payload.inputValue };

        case getType(calculatorActionsCreators.handleChangeInputValue):
            return { ...state, inputValue: action.payload.value };

        case getType(calculatorActionsCreators.handleChangeTargetPosition):
            return { ...state, inputTargetPosition: action.payload.position };

        case getType(calculatorActionsCreators.handleKeyEqualPressed):
            return { ...state, ...action.payload.result };

        case getType(calculatorActionsCreators.handleKeyboardPanelPressed):
            return { ...state, ...action.payload.result };

        case getType(calculatorActionsCreators.handleHasErrors):
            return { ...state, error: action.payload.error };

        case getType(calculatorActionsCreators.handleHistoryRowCliked):
            return { ...state, inputValue: action.payload.result };

        case getType(calculatorActionsCreators.handleCleanInput):
            return { ...state, inputValue: '' };

        default:
            return state;
    }
}
