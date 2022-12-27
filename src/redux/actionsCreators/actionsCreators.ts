import { deprecated } from 'typesafe-actions'

const { createAction } = deprecated;

export const add = createAction("calculator/ADD", resolve => () => resolve({inputValue: '10'}))

export const handleChangeInputValue = createAction("calculator/HANDLE_CHANGE_INPUT", resolve => (value: string) => resolve({value}))

export const handleChangeTargetPosition = createAction("calculator/CHANGE_TARGET_POSITION", resolve => (position: number) => resolve({position}))

export const handleKeyboardPanelPressed = createAction("calculator/KEYBOARD_PANEL_PRESSET", resolve => (result: any) => resolve({result}))

export const handleKeyEqualPressed = createAction("calculator/KEY_EQUAL_PRESSET", resolve => (result: any) => resolve({result}))

export const handleHistoryRowCliked = createAction("calculator/HISTORY_ROW_CLICKED", resolve => (result: string) => resolve({result}))

export const handleHasErrors = createAction("calculator/OPERATION_HAS_ERRORS", resolve => (error: string) => resolve({error}))
