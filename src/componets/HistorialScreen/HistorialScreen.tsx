import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'
import * as calculatorActions from './../../redux/actions/actions'
import * as calculatorSelector from './../../redux/selectors/selectors'
import './HistorialScreen.scss'

const HistorialScreen = () => {

    const historialList = useSelector(calculatorSelector.getHistorialList)
    const handleKeyEqualPresset = useActions(calculatorActions.handleHistoryRowCliked)

    
    const rowCliked = (operation: string) => {
        handleKeyEqualPresset(operation)
    } 


    return (
        <div className="historial-screen">
            <ul>
                {
                    historialList.map(({operation, result}) => {
                        return (
                            <li key={"row-history" + result} onClick={() => rowCliked(operation)}>
                                <p className="operation">{operation}</p>
                                <p className="equal">=</p>
                                <p className="result">{result}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default HistorialScreen