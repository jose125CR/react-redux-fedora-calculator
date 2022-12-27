import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'
import * as calculatorActions from './../../redux/actions/actions'
import * as calculatorSelector from './../../redux/selectors/selectors'
import './InputSection.scss'

const InputSection = () => {

    const ref = useRef<any>(null)

    const onchangeInput = useActions(calculatorActions.handleChangeInputValue)
    const handleChangeTargetPosition = useActions(calculatorActions.handleChangeTargetPosition)
    const handleHasErrors = useActions(calculatorActions.handleHasErrors)

    const checkCaretPosition = () => {
        handleChangeTargetPosition(ref.current.selectionStart)
    }

    const onChange = (value: string) => {
        onchangeInput(value)
        handleHasErrors("")
        checkCaretPosition()
    }

    const onclick = () => {
        checkCaretPosition()
    }

    return (
        <div className="input-section">
            <input
                ref={ref}
                onClick={onclick}
                onChange={({ target }) => onChange(target.value)}
                value={useSelector(calculatorSelector.getInputValue)}
            />
            <span>{useSelector(calculatorSelector.getError)}</span>
        </div>
    )
}

export default InputSection