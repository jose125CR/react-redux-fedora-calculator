import { evaluate } from 'mathjs'
import * as calculatorActionCreators from '../actionsCreators/actionsCreators';

export const addCalculator = () => async (
  dispatch: any,
) => dispatch(
  calculatorActionCreators.add(),
);

export const handleChangeInputValue = (inputValue: string) => async (
  dispatch: any,
) => dispatch(
  calculatorActionCreators.handleChangeInputValue(inputValue),
);

export const handleChangeTargetPosition = (position: number) => async (
  dispatch: any,
) => dispatch(
  calculatorActionCreators.handleChangeTargetPosition(position),
);

export const handleKeyPressed = (key: string) => async (
  dispatch: any,
  getState: any
) => {

  const { inputValue, inputTargetPosition } = getState()

  if (inputValue?.toString().trim() == 0) {
    dispatch(
      calculatorActionCreators.handleKeyboardPanelPressed({
        inputValue: key,
        inputTargetPosition: 1
      }),
    );
  } else {
    dispatch(
      calculatorActionCreators.handleKeyboardPanelPressed({
        inputValue: inputValue?.substring(0, inputTargetPosition) + key + inputValue.substring(inputTargetPosition),
        inputTargetPosition: inputTargetPosition + 1
      }),
    );
  }
}

export const handleHistoryRowCliked = (result: string) => async (
  dispatch: any,
) => dispatch(
  calculatorActionCreators.handleHistoryRowCliked(result),
);

const cleanTheValue = (dirtyValue: string) => {
  return dirtyValue
    .replace(/²/g, '^2')
    .replace(/π/g, 'pi ')
    .replace(/÷/g, '/')
    .replace(/−/g, '-')
    .replace(/mod/g, 'mod ')
    .replace(/×/g, '*')
    .replace(/√([\d^²]*[.,]?\d+|\([(mod|pi)0-9\(\)%.,^²\s*\/+-]*\))?/g, "sqrt($1)")
}

export const handleKeyEqualPresset = () => async (
  dispatch: any,
  getState: any
) => {


  const { inputValue, historial } = getState();
  console.log(cleanTheValue(inputValue), "cleanTheValue");
  try {
    const operationResult = evaluate(cleanTheValue(inputValue)).toString()

    const { operation, result } = historial?.length ? historial[Math.max(historial?.length - 1, 0)] : { operation: null, result: null }

    if (operation == inputValue || result == inputValue) {
      dispatch(
        calculatorActionCreators.handleKeyEqualPressed({
          inputValue: operation == inputValue ? result : operation
        }),
      );
    } else {
      //if the last record it does not match
      const newRecord = {
        "operation": inputValue,
        result: operationResult,
      }

      dispatch(
        calculatorActionCreators.handleKeyEqualPressed({
          inputValue: operationResult,
          historial: [...historial, newRecord]
        }),
      );
    }
  } catch (e: any) {
    console.log(e.message, "Errores en la operacion");
    dispatch(
      calculatorActionCreators.handleHasErrors(e.message),
    );
  }
}

export const handleHasErrors = (error: string) => async (
  dispatch: any,
) => dispatch(
  calculatorActionCreators.handleHasErrors(error),
);

export const handleCleanInput= () => async (
  dispatch: any,
) => dispatch(
  calculatorActionCreators.handleCleanInput(),
);
