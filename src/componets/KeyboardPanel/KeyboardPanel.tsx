import * as calculatorActions from './../../redux/actions/actions'
import { FaBackspace } from "react-icons/all";
import { useActions } from '../../hooks/useActions'

import panelBtns from './panelBtns.json'
import './KeyboardPanel.scss'

const keyboardPanel = () => {

    const handleKeyPressed = useActions(calculatorActions.handleKeyPressed)
    const handleKeyEqualPresset = useActions(calculatorActions.handleKeyEqualPresset)
    const handleCleanInput = useActions(calculatorActions.handleCleanInput)
    const handleHasErrors = useActions(calculatorActions.handleHasErrors)

    const handleClick = (key: any) => {
        handleHasErrors("")
        if (key == "=") {
            handleKeyEqualPresset()
        } else if (key == "X") {
            handleCleanInput()
        } else {
            const cleanedKey = key.replace(/x²/g, "²")
            handleKeyPressed(cleanedKey)
        }
    }

    return (
        <table className="keyboard-panel">
            {
                panelBtns["basic"].map((btns, index) => {
                    return (
                        <tr key={index}>
                            {
                                btns.map((btn) => {
                                    return (
                                        <td key={btn} rowSpan={btn == "=" ? 2 : 1}>
                                            <button
                                                className={`${new RegExp(/\d/).test(btn) && "number"} `}
                                                onClick={() => handleClick(btn.trim())}
                                            >
                                                {btn == "X" ? <FaBackspace/>: btn} 
                                            </button>
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
        </table>
    )
}

export default keyboardPanel