import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'
import * as calculatorActions from './../../redux/actions/actions'
import * as calculatorSelector from './../../redux/selectors/selectors'
import './Header.scss'

const HistorialScreen = () => {

    return (
        <div className="calculator-header">
            <button>Undo</button>
            <select>
                <option>Basic</option>
            </select>
            <div>H</div>
        </div>
    )
}

export default HistorialScreen