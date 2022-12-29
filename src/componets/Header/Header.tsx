import { IoMenuSharp, TiArrowSortedDown, TbArrowBackUp } from "react-icons/all";

import './Header.scss'

const HistorialScreen = () => {

    return (
        <div className="calculator-header">
            <button>
                {<TbArrowBackUp />} Undo
            </button>
            <button>
                Basic {<TiArrowSortedDown />}
            </button>
            <IoMenuSharp />
        </div>
    )
}

export default HistorialScreen